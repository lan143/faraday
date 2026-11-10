#include "device_health.h"

#include <cstdio>

#include <esp_timer.h>

#include <bms/bms.h>
#include <bms/bms_client.h>
#include <bms/bms_protocol.h>
#include <bms/bms_types.h>
#include <device/anenji4200.h>
#include <device/wb_map12e.h>
#include <log/log.h>

namespace
{
    uint32_t nowMs()
    {
        return static_cast<uint32_t>(esp_timer_get_time() / 1000);
    }
}

Faraday::Health::MeterHealth::MeterHealth(SemaphoreHandle_t bus, EDWB::MAP12E* const* meterSlot)
    : _bus(bus)
    , _slot(meterSlot)
{
}

EDHealthCheck::ReadyResult Faraday::Health::MeterHealth::ready()
{
    const uint32_t now = nowMs();
    if (!_hasProbed || static_cast<uint32_t>(now - _lastProbeMs) >= kProbeIntervalMs) {
        _hasProbed = true;
        _lastProbeMs = now;
        probe();
    }

    return EDHealthCheck::ReadyResult(_ready, _message);
}

void Faraday::Health::MeterHealth::probe()
{
    if (_bus == nullptr || _slot == nullptr || *_slot == nullptr) {
        return;
    }

    // A contended bus is not evidence of a dead meter: keep the cached verdict
    // and try again at the next interval.
    if (xSemaphoreTake(_bus, pdMS_TO_TICKS(200)) != pdTRUE) {
        return;
    }
    const EDWB::MAP12E* meter = *_slot;
    const auto voltage = meter->getVoltage(EDWB::MAP12E_PHASE_L1);
    xSemaphoreGive(_bus);

    if (voltage.second) {
        if (_unreachable) {
            LOGI("health", "wb-map12e recovered");
        }
        _unreachable = false;
        _consecutiveFails = 0;
        _ready = true;
        _message.clear();
        return;
    }

    if (_consecutiveFails < UINT8_MAX) {
        ++_consecutiveFails;
    }
    if (!_unreachable && _consecutiveFails >= kProbeFailThreshold) {
        _unreachable = true;
        _ready = false;
        _message = "wb-map12e is not responding";
        LOGW("health", "%s", _message.c_str());
    }
}

Faraday::Health::InverterHealth::InverterHealth(SemaphoreHandle_t bus, EDWB::ANENJI4200* const* inverterSlot)
    : _bus(bus)
    , _slot(inverterSlot)
{
}

EDHealthCheck::ReadyResult Faraday::Health::InverterHealth::ready()
{
    const uint32_t now = nowMs();
    if (!_hasProbed || static_cast<uint32_t>(now - _lastProbeMs) >= kProbeIntervalMs) {
        _hasProbed = true;
        _lastProbeMs = now;
        probe();
    }

    return EDHealthCheck::ReadyResult(_ready, _message, _warning);
}

void Faraday::Health::InverterHealth::probe()
{
    if (_bus == nullptr || _slot == nullptr || *_slot == nullptr) {
        return;
    }

    if (xSemaphoreTake(_bus, pdMS_TO_TICKS(200)) != pdTRUE) {
        return;
    }
    const EDWB::ANENJI4200* inverter = *_slot;
    const auto faultCode = inverter->getFaultCode();
    const auto workMode = inverter->getWorkMode();
    const auto warningCode = inverter->getWarningCode();
    xSemaphoreGive(_bus);

    // Work mode is informational here: only a failed fault-code read proves the
    // inverter is unreachable.
    if (!faultCode.second) {
        if (_consecutiveFails < UINT8_MAX) {
            ++_consecutiveFails;
        }
        if (!_unreachable && _consecutiveFails >= kProbeFailThreshold) {
            _unreachable = true;
            _ready = false;
            _warning = false;
            _warningLogged = false;
            _message = "anenji is not responding";
            LOGW("health", "%s", _message.c_str());
        }
        return;
    }

    if (_unreachable) {
        LOGI("health", "anenji recovered");
    }
    _unreachable = false;
    _consecutiveFails = 0;

    const bool faultMode = workMode.second
        && workMode.first == EDWB::ANENJIWorkMode::FaultMode;
    if (faultCode.first != 0 || faultMode) {
        char message[64] = {0};
        snprintf(message, sizeof(message), "anenji fault code 0x%08X",
            static_cast<unsigned>(faultCode.first));
        _message = message;
        if (faultMode) {
            _message += ", work mode = Fault";
        }

        // A fault supersedes a warning: drop the warning state without a
        // separate "cleared" line.
        _warning = false;
        _warningLogged = false;
        if (!_deviceFault) {
            _deviceFault = true;
            LOGW("health", "%s", _message.c_str());
        }
        _ready = false;
        return;
    }

    if (_deviceFault) {
        _deviceFault = false;
        LOGI("health", "anenji fault cleared");
    }

    if (warningCode.second && warningCode.first != 0) {
        char message[64] = {0};
        snprintf(message, sizeof(message), "anenji warning code 0x%08X",
            static_cast<unsigned>(warningCode.first));
        _message = message;
        _ready = true;
        _warning = true;
        if (!_warningLogged) {
            _warningLogged = true;
            LOGW("health", "%s", _message.c_str());
        }
        return;
    }

    if (_warningLogged) {
        _warningLogged = false;
        LOGI("health", "anenji warning cleared");
    }
    _ready = true;
    _warning = false;
    _message.clear();
}

EDHealthCheck::ReadyResult Faraday::Health::BmsHealth::ready()
{
    Faraday::Bms::Client* client = Faraday::Bms::client();
    if (client == nullptr) {
        _level = HealthLevel::Warning;
        return EDHealthCheck::ReadyResult(true, "bms is not available", true);
    }

    if (client->bleUnavailable()) {
        _level = HealthLevel::Warning;
        return EDHealthCheck::ReadyResult(true, "bms: BLE stack unavailable", true);
    }

    if (!client->isConnected()) {
        _level = HealthLevel::Warning;
        return EDHealthCheck::ReadyResult(true, "bms is not connected", true);
    }

    Faraday::Bms::BmsSnapshot snapshot;
    client->copySnapshot(snapshot);

    const uint32_t now = nowMs();
    if (snapshot.hasBasicInfo
        && static_cast<uint32_t>(now - snapshot.lastBasicInfoAtMs) > kBmsStaleMs) {
        _level = HealthLevel::Warning;
        return EDHealthCheck::ReadyResult(true, "bms data is stale", true);
    }

    const bool countersFault = snapshot.hasErrorCounts
        && (snapshot.errorCounts.shortCircuit != 0
            || snapshot.errorCounts.chargeOvercurrent != 0
            || snapshot.errorCounts.dischargeOvercurrent != 0
            || snapshot.errorCounts.cellOvervoltage != 0
            || snapshot.errorCounts.cellUndervoltage != 0
            || snapshot.errorCounts.chargeOvertemperature != 0
            || snapshot.errorCounts.chargeUndertemperature != 0
            || snapshot.errorCounts.dischargeOvertemperature != 0
            || snapshot.errorCounts.dischargeUndertemperature != 0
            || snapshot.errorCounts.batteryOvervoltage != 0
            || snapshot.errorCounts.batteryUndervoltage != 0);
    if (snapshot.hasBasicInfo && snapshot.basicInfo.protectionBitmask != 0) {
        std::string message = "bms fault: ";
        char labels[352] = {0};
        Faraday::Bms::Protocol::formatProtectionLabels(
            snapshot.basicInfo.protectionBitmask, labels, sizeof(labels));
        message += labels;

        if (!_faultLogged) {
            _faultLogged = true;
            LOGW("health", "%s", message.c_str());
        }
        _level = HealthLevel::Error;
        return EDHealthCheck::ReadyResult(false, message);
    }

    if (_faultLogged) {
        _faultLogged = false;
        LOGI("health", "bms fault cleared");
    }

    if (countersFault) {
        static const char* const names[11] = {
            "short_circuit",
            "charge_overcurrent",
            "discharge_overcurrent",
            "cell_overvoltage",
            "cell_undervoltage",
            "charge_overtemperature",
            "charge_undertemperature",
            "discharge_overtemperature",
            "discharge_undertemperature",
            "battery_overvoltage",
            "battery_undervoltage",
        };
        const uint16_t counts[11] = {
            snapshot.errorCounts.shortCircuit,
            snapshot.errorCounts.chargeOvercurrent,
            snapshot.errorCounts.dischargeOvercurrent,
            snapshot.errorCounts.cellOvervoltage,
            snapshot.errorCounts.cellUndervoltage,
            snapshot.errorCounts.chargeOvertemperature,
            snapshot.errorCounts.chargeUndertemperature,
            snapshot.errorCounts.dischargeOvertemperature,
            snapshot.errorCounts.dischargeUndertemperature,
            snapshot.errorCounts.batteryOvervoltage,
            snapshot.errorCounts.batteryUndervoltage,
        };

        std::string message = "bms error counters (latched): ";
        bool first = true;
        for (size_t i = 0; i < 11; ++i) {
            if (counts[i] == 0) {
                continue;
            }
            char entry[40] = {0};
            snprintf(entry, sizeof(entry), "%s%s=%u",
                first ? "" : ", ", names[i], static_cast<unsigned>(counts[i]));
            message += entry;
            first = false;
        }

        if (!_warningLogged) {
            _warningLogged = true;
            LOGW("health", "%s", message.c_str());
        }
        _level = HealthLevel::Warning;
        return EDHealthCheck::ReadyResult(true, message, true);
    }

    if (_warningLogged) {
        _warningLogged = false;
        LOGI("health", "bms error counters cleared");
    }
    _level = HealthLevel::Ok;
    return EDHealthCheck::ReadyResult(true, "");
}
