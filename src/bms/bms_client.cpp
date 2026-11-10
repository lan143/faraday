#include "bms_client.h"

#include <NimBLEAddress.h>
#include <NimBLEAdvertisedDevice.h>
#include <NimBLEClient.h>
#include <NimBLEDevice.h>
#include <NimBLERemoteCharacteristic.h>
#include <NimBLERemoteService.h>
#include <NimBLEScan.h>
#include <NimBLEUUID.h>
#include <Arduino.h>
#include <esp_timer.h>
#include <log/log.h>

#include <algorithm>
#include <cstdio>
#include <cstring>
#include <strings.h>

#include <freertos/queue.h>
#include <freertos/task.h>

#include "bms_protocol.h"
#include "defines.h"

namespace
{
    constexpr uint16_t kJbdServiceUuid = 0xFF00;
    constexpr uint16_t kJbdNotifyUuid = 0xFF01;
    constexpr uint16_t kJbdCommandUuid = 0xFF02;
}

struct Faraday::Bms::Client::Impl
{
    struct RxChunk
    {
        uint16_t len = 0;
        uint8_t data[80] = {0};
    };

    enum class TxResult
    {
        Ok,
        Timeout,
        ConfigChanged,
    };

    enum class AuthState
    {
        NotAuthenticated,
        Authenticating,
        Authenticated,
        Failed,
    };

    struct SessionOutcome
    {
        bool configChanged = false;
        bool connected = false;
    };

    // Streaming advertisement adapter. onResult() runs on the NimBLE host task,
    // so it only copies plain data into the mutex-guarded scan table (no NimBLE
    // calls inside the lock).
    struct ScanCallbacks : NimBLEAdvertisedDeviceCallbacks
    {
        Impl* impl = nullptr;
        void onResult(NimBLEAdvertisedDevice* device) override
        {
            if (impl != nullptr) {
                impl->onAdvertised(device);
            }
        }
    };

    Client* owner = nullptr;
    TaskHandle_t task = nullptr;
    QueueHandle_t rxQueue = nullptr;

    // Guarded by owner->_mutex.
    char address[18] = {0};
    uint8_t cellCount = BMS_DEFAULT_CELLS;
    bool scanning = false;
    bool scanRequested = false;
    uint32_t scanGeneration = 0;
    BmsScanResult scanResults[BMS_MAX_SCAN_RESULTS];
    uint16_t scanResultCount = 0;
    BmsSnapshot snapshot;
    uint32_t configGeneration = 0;
    // Failed-event-counter clear state, all guarded by owner->_mutex. The BLE
    // task consumes clearRequested and publishes clearResult/clearPending.
    bool clearRequested = false;
    uint8_t clearGeneration = 0;
    bool clearPending = false;
    char clearResult[8] = {0};
    // Guarded by owner->_mutex: written only via markBleUnavailable(), read
    // under lock by Client::bleUnavailable(). The bms task itself reads the
    // raw field as a lock-free fast path (single writer task — do not take
    // lock() for those reads, keeping lock() calls strictly paired).
    bool bleUnavailable = false;
    // Guarded by owner->_mutex: written only by the bms task via
    // setAuthState(); the task reads its own raw value as a fast path.
    AuthState authState = AuthState::NotAuthenticated;

    // Scan completion edge set by scanCompleteShim() on the NimBLE host task.
    // Written from the host task, read by the bms task; the bms task also runs
    // a hard deadline, so a lost/stale edge is harmless. volatile is enough for
    // a single word flag; no lock is taken in the completion path.
    volatile bool scanCompleted = false;
    ScanCallbacks scanCallbacks;
    // Points at the active Impl while a scan runs so the static completion
    // callback can wake the owning task. Only one scan can be active.
    static Impl* scanOwner;

    // Task-only state (only the bms task touches these, no locking needed).
    bool bleInitialized = false;
    NimBLEClient* bleClient = nullptr;
    NimBLERemoteCharacteristic* cmdChar = nullptr;
    Protocol::FrameAssembler assembler;
    Protocol::AuthAssembler authAssembler;
    uint8_t authRandom = 0;
    // Set when the app-key step gets no response at all. Task-only state, but
    // Client::setAddress() clears it under the mutex when the address changes.
    bool authUnsupported = false;
    // True once a factory-enter frame was acknowledged with status 0x00 (the
    // pack is now in factory mode) and no exit frame has been written
    // successfully since. Task-only: deliberately survives plain reconnects so
    // the next session can un-strand the pack; Client::start() resets it to
    // false at boot only (never on a reconnect).
    bool factoryExitPending = false;
    // Throttle for the all-zero basic-info warning (at most one per session).
    bool warnedAllZeroBasic = false;
    int64_t lastHeapWarnAtUs = 0;

    // Pure deferral: never marks bleUnavailable, so a later boot state with more
    // free heap can still bring BLE up. Rate-limited to one warning per ~30 s.
    bool bleHeapAvailable(uint32_t freeHeap)
    {
        if (freeHeap >= BMS_MIN_FREE_HEAP_FOR_BLE) {
            return true;
        }

        const int64_t now = esp_timer_get_time();
        if (lastHeapWarnAtUs == 0 || (now - lastHeapWarnAtUs) >= 30000000LL) {
            lastHeapWarnAtUs = now;
            LOGW(
                "bms",
                "BLE deferred: free heap %u < %u",
                (unsigned)freeHeap,
                (unsigned)BMS_MIN_FREE_HEAP_FOR_BLE
            );
        }

        return false;
    }

    bool initBle()
    {
        if (bleInitialized) {
            return true;
        }

        const uint32_t heapBefore = ESP.getFreeHeap();
        LOGI("bms", "initializing BLE");
        NimBLEDevice::init("Faraday-BMS");
        bleInitialized = NimBLEDevice::getInitialized();

        if (!bleInitialized) {
            LOGE("bms", "BLE initialization failed");
        } else {
            LOGI("bms", "BLE up, heap %u->%u", (unsigned)heapBefore, (unsigned)ESP.getFreeHeap());
        }

        return bleInitialized;
    }

    void drainRx()
    {
        if (rxQueue == nullptr) {
            return;
        }

        RxChunk chunk;
        while (xQueueReceive(rxQueue, &chunk, 0) == pdTRUE) {
        }
    }

    bool configChanged(uint32_t generation) const
    {
        owner->lock();
        const bool changed = configGeneration != generation;
        owner->unlock();
        return changed;
    }

    void updateConnected(bool value)
    {
        owner->lock();
        snapshot.connected = value;
        owner->unlock();
    }

    void setAuthState(AuthState value)
    {
        owner->lock();
        authState = value;
        owner->unlock();
    }

    static bool parseMacBytes(const char* text, uint8_t out[6])
    {
        unsigned int bytes[6] = {0};
        if (sscanf(
                text,
                "%2x:%2x:%2x:%2x:%2x:%2x",
                &bytes[0],
                &bytes[1],
                &bytes[2],
                &bytes[3],
                &bytes[4],
                &bytes[5]
            ) != 6) {
            return false;
        }

        for (uint8_t i = 0; i < 6; ++i) {
            out[i] = static_cast<uint8_t>(bytes[i]);
        }
        return true;
    }

    // bleUnavailable is read cross-task by Client::bleUnavailable() under the
    // owner mutex, so every task-side write must go through here.
    void markBleUnavailable()
    {
        owner->lock();
        bleUnavailable = true;
        owner->unlock();
    }

    void waitAbort(uint32_t ms, uint32_t generation)
    {
        const int64_t deadline = esp_timer_get_time() + static_cast<int64_t>(ms) * 1000;

        for (;;) {
            if (configChanged(generation)) {
                return;
            }

            // A clear request must not wait out the full poll interval.
            owner->lock();
            const bool clearWaiting = clearRequested;
            owner->unlock();
            if (clearWaiting) {
                return;
            }

            const int64_t remain = deadline - esp_timer_get_time();
            if (remain <= 0) {
                return;
            }

            const uint32_t ticks = static_cast<uint32_t>(remain / 1000) + 1;
            ulTaskNotifyTake(pdTRUE, pdMS_TO_TICKS(ticks));
        }
    }

    void disconnect()
    {
        if (bleClient != nullptr && bleClient->isConnected()) {
            bleClient->disconnect();
        }

        cmdChar = nullptr;
        assembler.reset();
        authAssembler.reset();
        drainRx();
        updateConnected(false);
        setAuthState(AuthState::NotAuthenticated);

        // A clear that never reached the wire fails; do not let it stay
        // pending across sessions (future requests would be refused forever).
        owner->lock();
        const bool clearAborted = clearRequested || clearPending;
        owner->unlock();
        if (clearAborted) {
            finishClear("failed", false);
        }
    }

    bool writeFrame(const uint8_t* frame, uint16_t frameLen)
    {
        if (cmdChar == nullptr || frame == nullptr || frameLen == 0) {
            return false;
        }

        // Write-without-response works on the JBD characteristic; fall back to
        // write-with-response when the peer requires an acknowledgement.
        bool ok = cmdChar->writeValue(frame, frameLen, false);
        if (!ok) {
            ok = cmdChar->writeValue(frame, frameLen, true);
        }

        return ok;
    }

    bool sendRead(uint8_t addressByte)
    {
        uint8_t frame[7] = {0};
        const uint16_t frameLen = Protocol::buildReadFrame(addressByte, frame);
        return writeFrame(frame, frameLen);
    }

    bool sendFactoryFrame(uint8_t registerAddress, const uint8_t* payload, uint8_t payloadLen)
    {
        uint8_t frame[16] = {0};
        const uint16_t frameLen = Protocol::buildWriteFrame(
            registerAddress, payload, payloadLen, frame);
        return writeFrame(frame, frameLen);
    }

    // Responses arrive on the notify characteristic (0xFF01); commands are
    // written to 0xFF02. Auth (FF AA) and DD frames interleave on that single
    // notification path, so route by whichever assembler already holds a
    // partial frame first (a split frame is never misrouted), otherwise the
    // FF AA prefix picks auth and everything else the DD assembler.
    void routeChunk(const RxChunk& chunk)
    {
        const bool authPrefix =
            chunk.len >= 2
            && chunk.data[0] == Protocol::JBD_AUTH_START_0
            && chunk.data[1] == Protocol::JBD_AUTH_START_1;
        if (authAssembler.hasPartial()) {
            authAssembler.onNotification(chunk.data, chunk.len);
        } else if (assembler.hasPartial()) {
            assembler.onNotification(chunk.data, chunk.len);
        } else if (authPrefix) {
            authAssembler.onNotification(chunk.data, chunk.len);
        } else {
            assembler.onNotification(chunk.data, chunk.len);
        }
    }

    TxResult waitForFrame(uint8_t expectedFunction, const uint8_t*& data, uint16_t& len, uint32_t generation)
    {
        const int64_t deadline = esp_timer_get_time() + static_cast<int64_t>(BMS_RESPONSE_TIMEOUT_MS) * 1000;

        for (;;) {
            RxChunk chunk;

            while (xQueueReceive(rxQueue, &chunk, 0) == pdTRUE) {
                routeChunk(chunk);

                if (assembler.hasFrame()) {
                    uint8_t function = 0;
                    uint8_t status = 0;
                    const uint8_t* frameData = nullptr;
                    uint16_t frameLen = 0;

                    if (assembler.takeFrame(function, status, frameData, frameLen) && function == expectedFunction) {
                        data = frameData;
                        len = frameLen;
                        return TxResult::Ok;
                    }
                }
            }

            if (configChanged(generation)) {
                return TxResult::ConfigChanged;
            }

            const int64_t remain = deadline - esp_timer_get_time();
            if (remain <= 0) {
                return TxResult::Timeout;
            }

            const uint32_t ticks = static_cast<uint32_t>(remain / 1000) + 1;
            ulTaskNotifyTake(pdTRUE, pdMS_TO_TICKS(ticks));
        }
    }

    // Factory-mode responses may carry an error status (e.g. 0x80 when the
    // pack is not in factory mode); surface the validated frame either way.
    TxResult waitForFactoryFrame(
        uint8_t& function,
        uint8_t& status,
        const uint8_t*& data,
        uint16_t& len,
        uint32_t generation
    )
    {
        const int64_t deadline = esp_timer_get_time() + static_cast<int64_t>(BMS_RESPONSE_TIMEOUT_MS) * 1000;

        for (;;) {
            RxChunk chunk;

            while (xQueueReceive(rxQueue, &chunk, 0) == pdTRUE) {
                routeChunk(chunk);

                if (assembler.hasFrame()) {
                    uint8_t frameFunction = 0;
                    uint8_t frameStatus = 0;
                    const uint8_t* frameData = nullptr;
                    uint16_t frameLen = 0;

                    if (assembler.takeFrameAllowError(
                            frameFunction, frameStatus, frameData, frameLen)) {
                        function = frameFunction;
                        status = frameStatus;
                        data = frameData;
                        len = frameLen;
                        return TxResult::Ok;
                    }
                }
            }

            if (bleClient == nullptr || !bleClient->isConnected()) {
                return TxResult::ConfigChanged;
            }

            if (configChanged(generation)) {
                return TxResult::ConfigChanged;
            }

            const int64_t remain = deadline - esp_timer_get_time();
            if (remain <= 0) {
                return TxResult::Timeout;
            }

            const uint32_t ticks = static_cast<uint32_t>(remain / 1000) + 1;
            ulTaskNotifyTake(pdTRUE, pdMS_TO_TICKS(ticks));
        }
    }

    void authTimeout()
    {
        LOGW("bms", "auth: timeout");
        setAuthState(AuthState::Failed);
    }

    void authWriteFailed()
    {
        LOGW("bms", "auth: write failed");
        setAuthState(AuthState::Failed);
    }

    void authShortResponse()
    {
        LOGW("bms", "auth: response too short");
        setAuthState(AuthState::Failed);
    }

    void authRejected(uint8_t command, uint8_t code)
    {
        LOGW(
            "bms",
            "auth: command 0x%02X rejected code 0x%02X",
            (unsigned)command,
            (unsigned)code
        );
        setAuthState(AuthState::Failed);
    }

    TxResult waitAuthResponse(
        uint8_t expectedCommand,
        const uint8_t*& data,
        uint8_t& dataLen,
        uint32_t generation,
        uint32_t timeoutMs
    )
    {
        const int64_t deadline =
            esp_timer_get_time() + static_cast<int64_t>(timeoutMs) * 1000;

        for (;;) {
            uint8_t command = 0;
            uint8_t frameLen = 0;
            const uint8_t* frameData = nullptr;
            if (authAssembler.takeFrame(command, frameData, frameLen)) {
                if (command == expectedCommand) {
                    data = frameData;
                    dataLen = frameLen;
                    return TxResult::Ok;
                }
                // Unsolicited/unrelated auth frame: ignore and keep waiting.
                continue;
            }

            RxChunk chunk;
            while (xQueueReceive(rxQueue, &chunk, 0) == pdTRUE) {
                routeChunk(chunk);
                if (authAssembler.hasFrame()) {
                    break;
                }
            }
            if (authAssembler.hasFrame()) {
                continue;
            }

            if (bleClient == nullptr || !bleClient->isConnected()) {
                return TxResult::ConfigChanged;
            }
            if (configChanged(generation)) {
                return TxResult::ConfigChanged;
            }

            const int64_t remain = deadline - esp_timer_get_time();
            if (remain <= 0) {
                return TxResult::Timeout;
            }

            const uint32_t ticks = static_cast<uint32_t>(remain / 1000) + 1;
            ulTaskNotifyTake(pdTRUE, pdMS_TO_TICKS(ticks));
        }
    }

    TxResult performAuth(const uint8_t mac[6], uint32_t generation)
    {
        if (authUnsupported) {
            // The pack ignored the app-key dialect on an earlier connection:
            // skip the handshake (and its timeout) until the address changes.
            setAuthState(AuthState::Failed);
            return TxResult::Ok;
        }

        if (cmdChar == nullptr) {
            setAuthState(AuthState::Failed);
            return TxResult::Ok;
        }

        authAssembler.reset();
        setAuthState(AuthState::Authenticating);

        uint8_t frame[20] = {0};
        const uint8_t* data = nullptr;
        uint8_t dataLen = 0;

        uint16_t frameLen = Protocol::buildAppKeyFrame(frame);
        if (!writeFrame(frame, frameLen)) {
            authWriteFailed();
            return TxResult::Ok;
        }
        LOGI("bms", "auth: app key sent");

        TxResult result = waitAuthResponse(
            Protocol::JBD_AUTH_CMD_APP_KEY,
            data,
            dataLen,
            generation,
            BMS_AUTH_APPKEY_TIMEOUT_MS
        );
        if (result == TxResult::ConfigChanged) {
            return result;
        }
        if (result == TxResult::Timeout) {
            // No frame at all: this pack does not speak the FF AA dialect.
            authUnsupported = true;
            setAuthState(AuthState::Failed);
            LOGW(
                "bms",
                "auth: no response to app key, skipping the handshake for this address"
            );
            return TxResult::Ok;
        }
        if (dataLen < 1) {
            authShortResponse();
            return TxResult::Ok;
        }

        const uint8_t appKeyCode = data[0];
        if (appKeyCode == 0x02) {
            setAuthState(AuthState::Authenticated);
            LOGI("bms", "auth: no password required");
            return TxResult::Ok;
        }
        if (appKeyCode != 0x00) {
            authRejected(Protocol::JBD_AUTH_CMD_APP_KEY, appKeyCode);
            return TxResult::Ok;
        }

        // Password required: fetch a random byte for the user password.
        frameLen = Protocol::buildRandomRequestFrame(frame);
        if (!writeFrame(frame, frameLen)) {
            authWriteFailed();
            return TxResult::Ok;
        }
        result = waitAuthResponse(
            Protocol::JBD_AUTH_CMD_GET_RANDOM,
            data,
            dataLen,
            generation,
            BMS_AUTH_STEP_TIMEOUT_MS
        );
        if (result == TxResult::ConfigChanged) {
            return result;
        }
        if (result == TxResult::Timeout) {
            authTimeout();
            return TxResult::Ok;
        }
        if (dataLen < 1) {
            authShortResponse();
            return TxResult::Ok;
        }
        authRandom = data[0];

        const uint8_t password[6] = {'1', '2', '3', '1', '2', '3'};
        frameLen = Protocol::buildUserPasswordFrame(mac, password, authRandom, frame);
        if (!writeFrame(frame, frameLen)) {
            authWriteFailed();
            return TxResult::Ok;
        }
        result = waitAuthResponse(
            Protocol::JBD_AUTH_CMD_PASSWORD,
            data,
            dataLen,
            generation,
            BMS_AUTH_STEP_TIMEOUT_MS
        );
        if (result == TxResult::ConfigChanged) {
            return result;
        }
        if (result == TxResult::Timeout) {
            authTimeout();
            return TxResult::Ok;
        }
        if (dataLen < 1) {
            authShortResponse();
            return TxResult::Ok;
        }
        if (data[0] != 0x00) {
            authRejected(Protocol::JBD_AUTH_CMD_PASSWORD, data[0]);
            return TxResult::Ok;
        }

        // Fetch a fresh random byte for the root password.
        frameLen = Protocol::buildRandomRequestFrame(frame);
        if (!writeFrame(frame, frameLen)) {
            authWriteFailed();
            return TxResult::Ok;
        }
        result = waitAuthResponse(
            Protocol::JBD_AUTH_CMD_GET_RANDOM,
            data,
            dataLen,
            generation,
            BMS_AUTH_STEP_TIMEOUT_MS
        );
        if (result == TxResult::ConfigChanged) {
            return result;
        }
        if (result == TxResult::Timeout) {
            authTimeout();
            return TxResult::Ok;
        }
        if (dataLen < 1) {
            authShortResponse();
            return TxResult::Ok;
        }
        authRandom = data[0];

        frameLen = Protocol::buildRootPasswordFrame(mac, authRandom, frame);
        if (!writeFrame(frame, frameLen)) {
            authWriteFailed();
            return TxResult::Ok;
        }
        result = waitAuthResponse(
            Protocol::JBD_AUTH_CMD_ROOT_PASSWORD,
            data,
            dataLen,
            generation,
            BMS_AUTH_STEP_TIMEOUT_MS
        );
        if (result == TxResult::ConfigChanged) {
            return result;
        }
        if (result == TxResult::Timeout) {
            authTimeout();
            return TxResult::Ok;
        }
        if (dataLen < 1) {
            authShortResponse();
            return TxResult::Ok;
        }
        if (data[0] != 0x00) {
            authRejected(Protocol::JBD_AUTH_CMD_ROOT_PASSWORD, data[0]);
            return TxResult::Ok;
        }

        setAuthState(AuthState::Authenticated);
        LOGI("bms", "auth: authenticated");
        return TxResult::Ok;
    }

    void finishClear(const char* result, bool zeroCounters)
    {
        owner->lock();
        snprintf(clearResult, sizeof(clearResult), "%s", result);
        clearPending = false;
        // A finished/aborted request must never survive into another session:
        // a leftover clearRequested would silently re-send the command on the
        // next connect (possibly against a changed MAC) and break the
        // reconnect backoff / scan wait paths.
        clearRequested = false;
        if (zeroCounters) {
            // Optimistic UI/latency aid, not the truth source: the next 0xAA
            // poll (<= 10 s) restores the device counters if the command did
            // not actually clear them.
            snapshot.errorCounts = BmsErrorCounts();
            snapshot.hasErrorCounts = true;
        }
        owner->unlock();

        LOGI("bms", "failed-event counter clear %s", result);
    }

    void executeClear(uint8_t requestGeneration, uint32_t generation)
    {
        if (configChanged(generation)
            || bleClient == nullptr
            || !bleClient->isConnected()
            || cmdChar == nullptr) {
            finishClear("failed", false);
            return;
        }

        // Enter factory/EEPROM mode (register 0x00 <- 0x5678).
        if (!sendFactoryFrame(
                Protocol::JBD_ADDR_FACTORY_ENTER,
                Protocol::JBD_FACTORY_ENTER_DATA,
                sizeof(Protocol::JBD_FACTORY_ENTER_DATA))) {
            finishClear("failed", false);
            return;
        }

        LOGI(
            "bms",
            "sent factory enter for counter clear (generation %u)",
            (unsigned)requestGeneration
        );

        uint8_t function = 0;
        uint8_t status = 0;
        const uint8_t* data = nullptr;
        uint16_t len = 0;

        TxResult result = waitForFactoryFrame(function, status, data, len, generation);
        if (result == TxResult::ConfigChanged) {
            // Only when the enter had already been acknowledged
            // (factoryExitPending is set solely after status 0x00) may the pack
            // actually be in factory mode and need the targeted warning; an
            // enter that was never acknowledged keeps the generic failure.
            if (factoryExitPending) {
                LOGW(
                    "bms",
                    "clear: session lost in factory mode; the pack may need a power cycle"
                );
            }
            finishClear("failed", false);
            return;
        }
        if (result == TxResult::Timeout) {
            LOGW("bms", "clear: no response to factory enter");
            finishClear("failed", false);
            return;
        }

        LOGI(
            "bms",
            "clear: factory enter response function 0x%02X len %u status 0x%02X",
            (unsigned)function,
            (unsigned)len,
            (unsigned)status
        );

        if (status != 0x00) {
            LOGW("bms", "clear: factory enter status 0x%02X", (unsigned)status);
            finishClear("failed", false);
            return;
        }

        // The enter is acknowledged: the pack is in factory mode now. Remember
        // it until an exit frame is written, so an interrupted sequence is
        // retried at the start of the next session instead of stranding the
        // pack (this flag is never reset by a plain reconnect).
        factoryExitPending = true;

        // Mode switch settle time; still inside the bms task.
        vTaskDelay(pdMS_TO_TICKS(200));

        // If the session/config changed after a confirmed enter, leave factory
        // mode once if the link is still there; otherwise the pack may be
        // stranded in EEPROM mode.
        if (configChanged(generation)
            || bleClient == nullptr
            || !bleClient->isConnected()
            || cmdChar == nullptr) {
            if (bleClient != nullptr && bleClient->isConnected() && cmdChar != nullptr) {
                if (sendFactoryFrame(
                        Protocol::JBD_ADDR_FACTORY_EXIT,
                        Protocol::JBD_FACTORY_EXIT_CLEAR_DATA,
                        sizeof(Protocol::JBD_FACTORY_EXIT_CLEAR_DATA))) {
                    // Exit frame written: no longer stranded. A failed write
                    // keeps the flag so the next connection retries it.
                    factoryExitPending = false;
                }
            } else {
                LOGW(
                    "bms",
                    "clear: session lost in factory mode; the pack may need a power cycle"
                );
            }
            finishClear("failed", false);
            return;
        }

        // Exit factory mode with the counter clear (register 0x01 <- 0x2828).
        if (!sendFactoryFrame(
                Protocol::JBD_ADDR_FACTORY_EXIT,
                Protocol::JBD_FACTORY_EXIT_CLEAR_DATA,
                sizeof(Protocol::JBD_FACTORY_EXIT_CLEAR_DATA))) {
            if (bleClient == nullptr || !bleClient->isConnected()) {
                LOGW(
                    "bms",
                    "clear: session lost in factory mode; the pack may need a power cycle"
                );
            }
            // The exit write failed: keep factoryExitPending set so the next
            // connection retries the exit frame.
            finishClear("failed", false);
            return;
        }

        // Exit frame on the wire (write succeeded): the pack is un-stranded
        // even if the response below never arrives or the session drops.
        factoryExitPending = false;

        LOGI(
            "bms",
            "sent factory exit/counter clear (generation %u)",
            (unsigned)requestGeneration
        );

        result = waitForFactoryFrame(function, status, data, len, generation);
        if (result == TxResult::ConfigChanged) {
            finishClear("failed", false);
            return;
        }
        if (result == TxResult::Timeout) {
            // The exit write was sent; the next 0xAA poll shows the truth.
            finishClear("sent", true);
            return;
        }

        LOGI(
            "bms",
            "clear: factory exit response function 0x%02X len %u status 0x%02X",
            (unsigned)function,
            (unsigned)len,
            (unsigned)status
        );

        if (status != 0x00) {
            LOGW("bms", "clear: factory exit status 0x%02X", (unsigned)status);
            finishClear("failed", false);
            return;
        }

        finishClear("acked", true);
    }

    TxResult readRequest(uint8_t addressByte, const uint8_t*& data, uint16_t& len, uint32_t generation)
    {
        if (configChanged(generation)) {
            return TxResult::ConfigChanged;
        }

        if (!sendRead(addressByte)) {
            return TxResult::Timeout;
        }

        return waitForFrame(addressByte, data, len, generation);
    }

    void applyBasicInfo(const BmsBasicInfo& info, const BmsCells* cells, const BmsErrorCounts* errors, bool hasBasic)
    {
        // In factory mode register 0x03 answers zeros; committing them would
        // publish SOC 0 % / 0 V to HA. Reject only this parsed basic frame
        // (cells and error counts still apply) and warn at most once per
        // connection.
        const bool zeroBasic = hasBasic && info.totalVoltage <= 0.0f && info.soc == 0.0f;
        if (zeroBasic) {
            hasBasic = false;
            if (!warnedAllZeroBasic) {
                warnedAllZeroBasic = true;
                LOGW("bms", "ignoring all-zero basic info (pack may be in factory mode)");
            }
        }

        owner->lock();

        if ((hasBasic || cells != nullptr) && !zeroBasic) {
            snapshot.basicInfo = info;
        }
        if (hasBasic) {
            snapshot.hasBasicInfo = true;
            snapshot.lastBasicInfoAtMs = static_cast<uint32_t>(esp_timer_get_time() / 1000);
        }
        if (cells != nullptr) {
            snapshot.cells = *cells;
            snapshot.hasCells = cells->count > 0;
        }
        if (errors != nullptr) {
            snapshot.errorCounts = *errors;
            snapshot.hasErrorCounts = true;
        }

        snapshot.connected = true;
        owner->unlock();
    }

    SessionOutcome runSession(const char* mac, uint8_t configuredCells, uint32_t generation)
    {
        SessionOutcome outcome;

        assembler.reset();
        drainRx();
        warnedAllZeroBasic = false;

        if (bleClient == nullptr) {
            bleClient = NimBLEDevice::createClient();
            if (bleClient == nullptr) {
                LOGE("bms", "failed to create BLE client");
                markBleUnavailable();
                return outcome;
            }
            // NimBLE 1.4.x: setConnectTimeout() takes SECONDS.
            bleClient->setConnectTimeout(10);
        }

        // Brace/explicit construction is mandatory: `NimBLEAddress peer(std::string(mac))`
        // is a most-vexing-parse (it declares a function), which silently bound
        // connect(peer) to the connect(bool) overload and dialed the zero address.
        const std::string peerMac(mac);
        const NimBLEAddress peer{peerMac, BLE_ADDR_PUBLIC};
        if (!bleClient->connect(peer, true)) {
            LOGW("bms", "BLE connect failed to %s", mac);
            updateConnected(false);
            if (configChanged(generation)) {
                outcome.configChanged = true;
            }
            return outcome;
        }

        outcome.connected = true;
        updateConnected(true);

        if (configChanged(generation)) {
            disconnect();
            outcome.configChanged = true;
            return outcome;
        }

        LOGI("bms", "connected to %s", mac);

        NimBLERemoteService* service = bleClient->getService(NimBLEUUID(kJbdServiceUuid));
        if (service == nullptr) {
            LOGE("bms", "JBD service 0xFF00 not found");
            disconnect();
            return outcome;
        }

        NimBLERemoteCharacteristic* notifyChar = service->getCharacteristic(NimBLEUUID(kJbdNotifyUuid));
        cmdChar = service->getCharacteristic(NimBLEUUID(kJbdCommandUuid));

        if (
            notifyChar == nullptr
            || cmdChar == nullptr
            || (!cmdChar->canWrite() && !cmdChar->canWriteNoResponse())
            || !notifyChar->canNotify()
        ) {
            LOGE("bms", "JBD characteristics 0xFF01/0xFF02 not usable");
            disconnect();
            return outcome;
        }

        const bool subscribed = notifyChar->subscribe(
            true,
            [this](NimBLERemoteCharacteristic*, uint8_t* pData, size_t length, bool) {
                if (length == 0 || rxQueue == nullptr) {
                    return;
                }

                RxChunk chunk;
                chunk.len = static_cast<uint16_t>(std::min<size_t>(length, sizeof(chunk.data)));
                memcpy(chunk.data, pData, chunk.len);
                xQueueSend(rxQueue, &chunk, 0);

                if (task != nullptr) {
                    xTaskNotifyGive(task);
                }
            },
            false
        );

        if (!subscribed) {
            LOGE("bms", "failed to subscribe to 0xFF01");
            disconnect();
            return outcome;
        }

        if (configChanged(generation)) {
            disconnect();
            outcome.configChanged = true;
            return outcome;
        }

        // JBD packs may accept reads without auth but ignore commands until the
        // app-key handshake completes. Failure only marks the auth state; reads
        // and the clear attempt continue either way.
        uint8_t macBytes[6] = {0};
        if (parseMacBytes(mac, macBytes)) {
            const TxResult authResult = performAuth(macBytes, generation);
            if (authResult == TxResult::ConfigChanged) {
                disconnect();
                outcome.configChanged = true;
                return outcome;
            }
        } else {
            setAuthState(AuthState::Failed);
            LOGW("bms", "auth: invalid MAC address");
        }

        // Drop any DD/auth frames that arrived while the handshake ran.
        authAssembler.reset();
        assembler.reset();

        // Un-strand recovery: a previous clear that was interrupted after its
        // enter was acknowledged left the pack in factory mode. Retry the EXIT
        // frame once at the start of this session; the enter frame is never
        // sent from this path.
        if (factoryExitPending) {
            const bool exitWritten = sendFactoryFrame(
                Protocol::JBD_ADDR_FACTORY_EXIT,
                Protocol::JBD_FACTORY_EXIT_CLEAR_DATA,
                sizeof(Protocol::JBD_FACTORY_EXIT_CLEAR_DATA));

            if (exitWritten) {
                uint8_t exitFunction = 0;
                uint8_t exitStatus = 0;
                const uint8_t* exitData = nullptr;
                uint16_t exitLen = 0;
                const TxResult exitResult = waitForFactoryFrame(
                    exitFunction,
                    exitStatus,
                    exitData,
                    exitLen,
                    generation);

                if (exitResult == TxResult::Ok) {
                    if (exitStatus == 0x00) {
                        LOGI(
                            "bms",
                            "clear: factory exit retry status 0x%02X",
                            (unsigned)exitStatus);
                    } else {
                        // e.g. 0x80 = the pack is not in factory mode; either
                        // way the exit frame was delivered, so the flag goes.
                        LOGW(
                            "bms",
                            "clear: factory exit retry status 0x%02X",
                            (unsigned)exitStatus);
                    }
                } else {
                    // The exit frame is on the wire; the next 0xAA poll (or a
                    // status-0x80 enter on a later clear) shows the truth.
                    LOGI("bms", "clear: factory exit retry sent");
                }
                factoryExitPending = false;
            } else {
                // Keep the flag set so the next connection retries the exit.
                LOGW("bms", "clear: factory exit retry write failed");
            }
        }

        // Device model is read once per connection, right after subscribe.
        {
            const uint8_t* data = nullptr;
            uint16_t len = 0;
            const TxResult result = readRequest(Protocol::JBD_ADDR_HW_VERSION, data, len, generation);

            if (result == TxResult::ConfigChanged) {
                disconnect();
                outcome.configChanged = true;
                return outcome;
            }

            if (result == TxResult::Ok) {
                char model[32] = {0};
                if (Protocol::parseDeviceModel(data, len, model, sizeof(model))) {
                    owner->lock();
                    snprintf(snapshot.deviceModel, sizeof(snapshot.deviceModel), "%s", model);
                    snapshot.hasDeviceModel = true;
                    owner->unlock();
                }
            }
        }

        bool warnedTimeout = false;
        uint8_t emptyCycles = 0;

        for (;;) {
            if (!bleClient->isConnected()) {
                break;
            }

            BmsBasicInfo basic;

            owner->lock();
            basic = snapshot.basicInfo;
            owner->unlock();

            BmsCells cells;
            BmsErrorCounts errors;
            bool gotBasic = false;
            bool gotCells = false;
            bool gotErrors = false;

            const uint8_t* data = nullptr;
            uint16_t len = 0;

            TxResult result = readRequest(Protocol::JBD_ADDR_BASIC_INFO, data, len, generation);
            if (result == TxResult::ConfigChanged) {
                disconnect();
                outcome.configChanged = true;
                return outcome;
            }
            if (result == TxResult::Ok) {
                gotBasic = Protocol::parseBasicInfo(data, len, basic);
            } else if (!warnedTimeout) {
                LOGW("bms", "basic info read timed out");
                warnedTimeout = true;
            }

            if (!bleClient->isConnected()) {
                break;
            }

            data = nullptr;
            len = 0;
            result = readRequest(Protocol::JBD_ADDR_CELL_INFO, data, len, generation);
            if (result == TxResult::ConfigChanged) {
                disconnect();
                outcome.configChanged = true;
                return outcome;
            }
            if (result == TxResult::Ok) {
                gotCells = Protocol::parseCells(data, len, configuredCells, cells, &basic);
            } else if (!warnedTimeout) {
                LOGW("bms", "cell info read timed out");
                warnedTimeout = true;
            }

            if (!bleClient->isConnected()) {
                break;
            }

            data = nullptr;
            len = 0;
            result = readRequest(Protocol::JBD_ADDR_ERROR_COUNTS, data, len, generation);
            if (result == TxResult::ConfigChanged) {
                disconnect();
                outcome.configChanged = true;
                return outcome;
            }
            if (result == TxResult::Ok) {
                gotErrors = Protocol::parseErrorCounts(data, len, errors);
            } else if (!warnedTimeout) {
                LOGW("bms", "error-count read timed out");
                warnedTimeout = true;
            }

            if (gotBasic || gotCells || gotErrors) {
                applyBasicInfo(
                    basic,
                    gotCells ? &cells : nullptr,
                    gotErrors ? &errors : nullptr,
                    gotBasic
                );
                emptyCycles = 0;
            } else {
                ++emptyCycles;
                if (emptyCycles >= 3) {
                    LOGW("bms", "no valid frames for 3 cycles, disconnecting");
                    break;
                }
            }

            // One clear command per poll cycle at most, after the 0xAA read has
            // been applied and before the sleep, so it cannot starve reads.
            bool clearNow = false;
            uint8_t requestGeneration = 0;
            owner->lock();
            if (clearRequested) {
                clearRequested = false;
                requestGeneration = clearGeneration;
                clearNow = true;
            }
            owner->unlock();

            if (clearNow) {
                executeClear(requestGeneration, generation);
            }

            waitAbort(BMS_POLL_INTERVAL_MS, generation);
            if (configChanged(generation)) {
                disconnect();
                outcome.configChanged = true;
                return outcome;
            }
        }

        disconnect();
        return outcome;
    }

    // NimBLE host-task scan-completion hook. Only marks the edge and wakes the
    // bms task; the task also owns a hard deadline, so losing this wakeup is
    // harmless.
    static void scanCompleteShim(NimBLEScanResults)
    {
        Impl* impl = scanOwner;
        if (impl == nullptr) {
            return;
        }

        impl->scanCompleted = true;

        if (impl->task != nullptr) {
            xTaskNotifyGive(impl->task);
        }
    }

    // Called from the NimBLE host task for every advertisement (wantDuplicates
    // gives us RSSI updates). NimBLE accessors run before the lock; only plain
    // data is copied while the mutex is held.
    void onAdvertised(NimBLEAdvertisedDevice* device)
    {
        const std::string mac = device->getAddress().toString();
        if (mac.empty()) {
            return;
        }
        const std::string name = device->haveName() ? device->getName() : std::string();
        const int rssi = device->getRSSI();

        owner->lock();

        for (uint16_t i = 0; i < scanResultCount; ++i) {
            if (strcasecmp(scanResults[i].mac, mac.c_str()) == 0) {
                if (rssi > scanResults[i].rssi) {
                    scanResults[i].rssi = rssi;
                    if (!name.empty()) {
                        snprintf(scanResults[i].name, sizeof(scanResults[i].name), "%s", name.c_str());
                    }
                }
                owner->unlock();
                return;
            }
        }

        if (scanResultCount < BMS_MAX_SCAN_RESULTS) {
            BmsScanResult& entry = scanResults[scanResultCount];
            snprintf(entry.mac, sizeof(entry.mac), "%s", mac.c_str());
            snprintf(entry.name, sizeof(entry.name), "%s", name.c_str());
            entry.rssi = rssi;
            ++scanResultCount;
        }

        owner->unlock();
    }

    void finalizeScan()
    {
        owner->lock();
        scanning = false;
        ++scanGeneration;
        const uint16_t count = scanResultCount;
        owner->unlock();

        LOGI("bms", "BLE scan done: %u device(s)", (unsigned)count);
    }

    void performScan(uint32_t generation)
    {
        disconnect();

        if (bleUnavailable) {
            // Task-local fast path: raw read, no lock() (see the declaration).
            finalizeScan();
            return;
        }

        if (!bleInitialized) {
            // Deferred scan: memory is tight, so abort rather than starve Wi-Fi.
            if (!bleHeapAvailable(ESP.getFreeHeap())) {
                finalizeScan();
                return;
            }
            if (!initBle()) {
                markBleUnavailable();
                LOGE("bms", "BLE unavailable, scan aborted");
                finalizeScan();
                return;
            }
        }

        NimBLEScan* scan = NimBLEDevice::getScan();
        if (scan == nullptr) {
            LOGE("bms", "BLE scan unavailable");
            finalizeScan();
            return;
        }

        // Replace the previous result set; this is the documented behavior.
        owner->lock();
        scanResultCount = 0;
        scanCompleted = false;
        owner->unlock();

        scanCallbacks.impl = this;
        scanOwner = this;
        scan->setActiveScan(true);
        scan->setInterval(100);
        scan->setWindow(99);
        // maxResults == 0 together with a device callback puts NimBLE in
        // streaming mode: each device is erased right after onResult(), so the
        // heap never accumulates the (default) up-to-255 cached entries.
        scan->setMaxResults(0);
        scan->setAdvertisedDeviceCallbacks(&scanCallbacks, true);

        // Duration is SECONDS in the NimBLE 1.4.x API.
        LOGI("bms", "BLE scan started (%u s)", (unsigned)BMS_SCAN_DURATION_S);
        if (!scan->start(BMS_SCAN_DURATION_S, &Impl::scanCompleteShim)) {
            LOGE("bms", "BLE scan failed to start");
            scan->setAdvertisedDeviceCallbacks(nullptr, false);
            scanOwner = nullptr;
            finalizeScan();
            return;
        }

        // Non-blocking start: this task never parks inside NimBLE (so its task
        // notifications stay ours), results stream in via onAdvertised(), and
        // waitAbort() exits early when the config changes (e.g. saving a MAC).
        waitAbort(BMS_SCAN_DURATION_MS + 1000, generation);

        scan->stop();
        scan->setAdvertisedDeviceCallbacks(nullptr, false);
        scanOwner = nullptr;
        finalizeScan();
    }
};

Faraday::Bms::Client::Impl* Faraday::Bms::Client::Impl::scanOwner = nullptr;

Faraday::Bms::Client::Client() = default;

bool Faraday::Bms::Client::start()
{
    if (_impl != nullptr) {
        return true;
    }

    if (_mutex == nullptr) {
        _mutex = xSemaphoreCreateMutex();
        if (_mutex == nullptr) {
            LOGE("bms", "failed to create BMS mutex");
            return false;
        }
    }

    _impl = new Impl();
    _impl->owner = this;
    _impl->cellCount = BMS_DEFAULT_CELLS;
    _impl->authUnsupported = false;
    _impl->factoryExitPending = false;
    _impl->rxQueue = xQueueCreate(8, sizeof(Impl::RxChunk));

    if (_impl->rxQueue == nullptr) {
        LOGE("bms", "failed to create BMS RX queue");
        return false;
    }

    if (xTaskCreate(&Client::taskEntry, "bms", BMS_TASK_STACK, this, 1, &_impl->task) != pdPASS) {
        LOGE("bms", "failed to create BMS task");
        return false;
    }

    LOGI("bms", "client task started");
    return true;
}

void Faraday::Bms::Client::taskEntry(void* arg)
{
    static_cast<Client*>(arg)->run();
}

void Faraday::Bms::Client::run()
{
    Impl* impl = _impl;
    uint32_t backoff = BMS_RECONNECT_MIN_MS;

    for (;;) {
        char addr[sizeof(impl->address)];
        uint8_t cells = BMS_DEFAULT_CELLS;
        bool scanRequested = false;
        uint32_t generation = 0;

        lock();
        memcpy(addr, impl->address, sizeof(addr));
        cells = impl->cellCount;
        scanRequested = impl->scanRequested;
        impl->scanRequested = false;
        generation = impl->configGeneration;
        unlock();

        if (scanRequested) {
            impl->performScan(generation);
            backoff = BMS_RECONNECT_MIN_MS;
            continue;
        }

        if (addr[0] == '\0') {
            impl->disconnect();
            ulTaskNotifyTake(pdTRUE, portMAX_DELAY);
            continue;
        }

        if (impl->bleUnavailable) {
            // Task-local fast path: raw read, no lock() (see the declaration).
            impl->waitAbort(BMS_RECONNECT_MAX_MS, generation);
            continue;
        }

        if (!impl->bleInitialized) {
            // Deferred (not failed): retry with the normal reconnect backoff.
            if (!impl->bleHeapAvailable(ESP.getFreeHeap())) {
                impl->waitAbort(BMS_RECONNECT_MAX_MS, generation);
                continue;
            }
            if (!impl->initBle()) {
                impl->markBleUnavailable();
                impl->waitAbort(BMS_RECONNECT_MAX_MS, generation);
                continue;
            }
        }

        const Impl::SessionOutcome outcome = impl->runSession(addr, cells, generation);

        if (outcome.configChanged) {
            backoff = BMS_RECONNECT_MIN_MS;
            continue;
        }

        if (outcome.connected) {
            backoff = BMS_RECONNECT_MIN_MS;
        }

        impl->waitAbort(backoff, generation);

        const uint32_t next = backoff * 2;
        backoff = next > BMS_RECONNECT_MAX_MS ? BMS_RECONNECT_MAX_MS : next;
    }
}

void Faraday::Bms::Client::setCellCount(uint8_t count)
{
    if (_impl == nullptr) {
        return;
    }

    uint8_t clamped = count;
    if (clamped < 1) {
        clamped = 1;
    }
    if (clamped > BMS_MAX_CELLS) {
        clamped = BMS_MAX_CELLS;
    }

    lock();
    const bool changed = _impl->cellCount != clamped;
    if (changed) {
        _impl->cellCount = clamped;
        ++_impl->configGeneration;
    }
    const TaskHandle_t task = _impl->task;
    unlock();

    // Mirror setAddress(): a live change aborts the running session (which
    // captured the cell count at run() loop entry) so the new parse cap is
    // picked up on the next connection. Safe at boot: bms.cpp calls
    // setCellCount before setAddress, and run() simply re-reads its state.
    if (changed && task != nullptr) {
        xTaskNotifyGive(task);
    }
}

uint8_t Faraday::Bms::Client::cellCount() const
{
    if (_impl == nullptr) {
        return BMS_DEFAULT_CELLS;
    }

    lock();
    const uint8_t value = _impl->cellCount;
    unlock();
    return value;
}

void Faraday::Bms::Client::setAddress(const char* macOrNull)
{
    if (_impl == nullptr) {
        return;
    }

    char normalized[sizeof(_impl->address)] = {0};
    if (macOrNull != nullptr) {
        snprintf(normalized, sizeof(normalized), "%s", macOrNull);
    }

    lock();
    const bool changed = strcmp(_impl->address, normalized) != 0;
    if (changed) {
        memcpy(_impl->address, normalized, sizeof(_impl->address));
        ++_impl->configGeneration;
        // The unsupported-auth verdict is per address; a new target may speak
        // the FF AA dialect.
        _impl->authUnsupported = false;
    }
    const TaskHandle_t task = _impl->task;
    unlock();

    if (changed && task != nullptr) {
        xTaskNotifyGive(task);
    }
}

bool Faraday::Bms::Client::address(char* out, size_t n) const
{
    if (_impl == nullptr || out == nullptr || n == 0) {
        return false;
    }

    lock();
    const bool hasAddress = _impl->address[0] != '\0';
    if (hasAddress) {
        snprintf(out, n, "%s", _impl->address);
    }
    unlock();

    return hasAddress;
}

bool Faraday::Bms::Client::isConnected() const
{
    if (_impl == nullptr) {
        return false;
    }

    lock();
    const bool value = _impl->snapshot.connected;
    unlock();
    return value;
}

bool Faraday::Bms::Client::bleUnavailable() const
{
    if (_impl == nullptr) {
        return false;
    }

    lock();
    const bool value = _impl->bleUnavailable;
    unlock();
    return value;
}

bool Faraday::Bms::Client::hasSnapshot() const
{
    if (_impl == nullptr) {
        return false;
    }

    lock();
    const bool value = _impl->snapshot.hasBasicInfo;
    unlock();
    return value;
}

uint32_t Faraday::Bms::Client::lastBasicInfoAtMs() const
{
    if (_impl == nullptr) {
        return 0;
    }

    lock();
    const uint32_t value = _impl->snapshot.lastBasicInfoAtMs;
    unlock();
    return value;
}

void Faraday::Bms::Client::copySnapshot(BmsSnapshot& out) const
{
    if (_impl == nullptr) {
        out = BmsSnapshot();
        return;
    }

    lock();
    out = _impl->snapshot;
    unlock();
}

void Faraday::Bms::Client::requestScan()
{
    if (_impl == nullptr) {
        return;
    }

    lock();
    if (_impl->scanning) {
        unlock();
        return;
    }
    _impl->scanning = true;
    _impl->scanRequested = true;
    ++_impl->configGeneration;
    const TaskHandle_t task = _impl->task;
    unlock();

    if (task != nullptr) {
        xTaskNotifyGive(task);
    }
}

bool Faraday::Bms::Client::isScanning() const
{
    if (_impl == nullptr) {
        return false;
    }

    lock();
    const bool value = _impl->scanning;
    unlock();
    return value;
}

uint16_t Faraday::Bms::Client::scanResults(BmsScanResult* out, uint16_t max) const
{
    if (_impl == nullptr || out == nullptr || max == 0) {
        return 0;
    }

    lock();
    const uint16_t count = std::min<uint16_t>(_impl->scanResultCount, max);
    for (uint16_t i = 0; i < count; ++i) {
        out[i] = _impl->scanResults[i];
    }
    unlock();

    return count;
}

uint32_t Faraday::Bms::Client::scanGeneration() const
{
    if (_impl == nullptr) {
        return 0;
    }

    lock();
    const uint32_t value = _impl->scanGeneration;
    unlock();
    return value;
}

bool Faraday::Bms::Client::requestClearErrors()
{
    if (_impl == nullptr) {
        return false;
    }

    lock();
    const bool eligible = _impl->snapshot.connected
        && !_impl->scanning
        && !_impl->bleUnavailable
        && !_impl->clearPending;
    if (!eligible) {
        unlock();
        return false;
    }

    _impl->clearRequested = true;
    ++_impl->clearGeneration;
    _impl->clearPending = true;
    const TaskHandle_t task = _impl->task;
    unlock();

    if (task != nullptr) {
        xTaskNotifyGive(task);
    }

    return true;
}

uint8_t Faraday::Bms::Client::clearGeneration() const
{
    if (_impl == nullptr) {
        return 0;
    }

    lock();
    const uint8_t value = _impl->clearGeneration;
    unlock();
    return value;
}

bool Faraday::Bms::Client::clearPending() const
{
    if (_impl == nullptr) {
        return false;
    }

    lock();
    const bool value = _impl->clearPending;
    unlock();
    return value;
}

bool Faraday::Bms::Client::clearResult(char* out, size_t n) const
{
    if (_impl == nullptr || out == nullptr || n == 0) {
        return false;
    }

    lock();
    const bool hasResult = _impl->clearResult[0] != '\0';
    if (hasResult) {
        snprintf(out, n, "%s", _impl->clearResult);
    }
    unlock();

    return hasResult;
}

bool Faraday::Bms::Client::authState(char* out, size_t n) const
{
    if (_impl == nullptr || out == nullptr || n == 0) {
        return false;
    }

    Impl::AuthState state;
    lock();
    state = _impl->authState;
    unlock();

    const char* text = "not-authenticated";
    switch (state) {
        case Impl::AuthState::Authenticating:
            text = "authenticating";
            break;
        case Impl::AuthState::Authenticated:
            text = "authenticated";
            break;
        case Impl::AuthState::Failed:
            text = "failed";
            break;
        default:
            text = "not-authenticated";
            break;
    }

    snprintf(out, n, "%s", text);
    return true;
}

void Faraday::Bms::Client::lock() const
{
    // All critical sections only copy small plain-data structs (the BLE calls
    // are deliberately outside the lock), so a waiter can never be held for
    // long. Blocking here is bounded in practice and avoids an unbalanced
    // give() after a timed-out take.
    if (_mutex != nullptr) {
        xSemaphoreTake(_mutex, portMAX_DELAY);
    }
}

void Faraday::Bms::Client::unlock() const
{
    if (_mutex != nullptr) {
        xSemaphoreGive(_mutex);
    }
}
