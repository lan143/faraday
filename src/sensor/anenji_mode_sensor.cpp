#include <ExtStrings.h>
#include <Utils.h>
#include <device/anenji4200.h>
#include <log/log.h>

#include "./anenji_mode_sensor.h"

const char* Faraday::AnenjiModeSensor::objectID() const
{
    switch (_kind) {
        case Kind::WorkMode:
            return "work_mode";
        case Kind::OutputMode:
            return "output_mode";
        case Kind::OutputPriority:
            return "output_priority";
        case Kind::ChargePriority:
            return "charge_priority";
    }

    return "unknown";
}

const char* Faraday::AnenjiModeSensor::displayName() const
{
    switch (_kind) {
        case Kind::WorkMode:
            return "Work mode";
        case Kind::OutputMode:
            return "Output mode";
        case Kind::OutputPriority:
            return "Output priority";
        case Kind::ChargePriority:
            return "Charge priority";
    }

    return "Unknown";
}

int64_t Faraday::AnenjiModeSensor::readInterval() const
{
    // The live work mode moves; the three settings change rarely.
    return _kind == Kind::WorkMode ? 10000000LL : 30000000LL;
}

const char* Faraday::AnenjiModeSensor::label(Kind kind, uint16_t value)
{
    switch (kind) {
        case Kind::WorkMode:
            switch (value) {
                case 0: return "Power on";
                case 1: return "Standby";
                case 2: return "Mains";
                case 3: return "Off grid";
                case 4: return "Bypass";
                case 5: return "Charging";
                case 6: return "Fault";
            }
            break;

        case Kind::OutputMode:
            switch (value) {
                case 0: return "Single";
                case 1: return "Parallel";
                case 2: return "Three-phase L1";
                case 3: return "Three-phase L2";
                case 4: return "Three-phase L3";
            }
            break;

        case Kind::OutputPriority:
            switch (value) {
                case 0: return "Mains-PV-Battery";
                case 1: return "PV-Mains-Battery (inverter)";
                case 2: return "PV-Battery-Mains";
                case 3: return "PV-Mains-Battery (mains)";
            }
            break;

        case Kind::ChargePriority:
            switch (value) {
                case 0: return "Mains preferred";
                case 1: return "PV preferred";
                case 2: return "PV equal mains";
                case 3: return "PV only";
            }
            break;
    }

    return "Unknown";
}

bool Faraday::AnenjiModeSensor::init(
    EDMQTT::MQTT* mqtt,
    std::string topicPrefix,
    EDHA::DiscoveryMgr* discoveryMgr,
    EDHA::Device* device,
    uint8_t index
)
{
    _mqtt = mqtt;
    _discoveryMgr = discoveryMgr;
    _haDevice = device;

    const std::string id = objectID();
    _stateTopic = topicPrefix + "/" + id + "/state";

    if (_discoveryMgr != nullptr && _haDevice != nullptr) {
        const std::string uniqueID = EDUtils::formatString(
            "%s_faraday_%s", id.c_str(), EDUtils::getChipID()
        );

        // Text state: no unit, device class or state class. EDHA::Sensor only
        // emits those fields when they are actually set (sensor.cpp checks for
        // non-empty / non-NONE), so an unset value produces a valid plain text
        // sensor for Home Assistant.
        _discoveryMgr->addSensor(_haDevice, displayName(), id, uniqueID)
            ->setStateTopic(_stateTopic)
            ->setValueTemplate("{{ value }}");
    }

    // Delay the first gate opening by 800 * index ms from now, then run at the
    // regular interval.
    _lastReadTime = esp_timer_get_time() + static_cast<int64_t>(index) * 800000LL - readInterval();

    return true;
}

void Faraday::AnenjiModeSensor::update()
{
    const int64_t now = esp_timer_get_time();
    if ((now - _lastReadTime) < readInterval()) {
        return;
    }
    _lastReadTime = now;

    if (_device == nullptr) {
        return;
    }

    uint16_t value = 0;
    bool readOk = false;

    switch (_kind) {
        case Kind::WorkMode: {
            const auto read = _device->getWorkMode();
            value = static_cast<uint16_t>(read.first);
            readOk = read.second;
            break;
        }
        case Kind::OutputMode: {
            const auto read = _device->getOutputMode();
            value = static_cast<uint16_t>(read.first);
            readOk = read.second;
            break;
        }
        case Kind::OutputPriority: {
            const auto read = _device->getOutputPriority();
            value = static_cast<uint16_t>(read.first);
            readOk = read.second;
            break;
        }
        case Kind::ChargePriority: {
            const auto read = _device->getBatteryChargePriority();
            value = static_cast<uint16_t>(read.first);
            readOk = read.second;
            break;
        }
    }

    // A failed read holds the last known value.
    if (readOk) {
        if (!_hasValue || _value != value) {
            _value = value;
            _hasValue = true;
            _publishPending = true;
        }
    }

    // Never publish an assumption before the first valid reading.
    if (!_hasValue) {
        return;
    }

    const bool heartbeatDue = (_lastPublishTime + 60000000) < now;
    if (_publishPending || heartbeatDue) {
        if (publishState()) {
            _publishPending = false;
        }
    }
}

bool Faraday::AnenjiModeSensor::publishState()
{
    if (_mqtt == nullptr || !_hasValue) {
        return false;
    }

    if (!_mqtt->publish(_stateTopic.c_str(), label(_kind, _value), true)) {
        LOGE("anenji", "failed to publish %s state", objectID());
        return false;
    }

    _lastPublishTime = esp_timer_get_time();

    return true;
}
