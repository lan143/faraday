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
    // Guarded by owner->_mutex: written only via markBleUnavailable(), read
    // under lock by Client::bleUnavailable(). The bms task itself reads the
    // raw field as a lock-free fast path (single writer task — do not take
    // lock() for those reads, keeping lock() calls strictly paired).
    bool bleUnavailable = false;

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
        drainRx();
        updateConnected(false);
    }

    bool sendRead(uint8_t addressByte)
    {
        if (cmdChar == nullptr) {
            return false;
        }

        uint8_t frame[7] = {0};
        const uint16_t frameLen = Protocol::buildReadFrame(addressByte, frame);

        // Write-without-response works on the JBD characteristic; fall back to
        // write-with-response when the peer requires an acknowledgement.
        bool ok = cmdChar->writeValue(frame, frameLen, false);
        if (!ok) {
            ok = cmdChar->writeValue(frame, frameLen, true);
        }

        return ok;
    }

    TxResult waitForFrame(uint8_t expectedFunction, const uint8_t*& data, uint16_t& len, uint32_t generation)
    {
        const int64_t deadline = esp_timer_get_time() + static_cast<int64_t>(BMS_RESPONSE_TIMEOUT_MS) * 1000;

        for (;;) {
            RxChunk chunk;

            while (xQueueReceive(rxQueue, &chunk, 0) == pdTRUE) {
                assembler.onNotification(chunk.data, chunk.len);

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
        owner->lock();

        if (hasBasic || cells != nullptr) {
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
