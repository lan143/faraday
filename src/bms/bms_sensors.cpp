#include "bms_sensors.h"

#include <ExtStrings.h>
#include <Utils.h>
#include <log/log.h>

#include "bms_protocol.h"

const char* Faraday::BmsBinarySensor::objectID() const
{
    switch (_kind) {
        case Kind::Charging:
            return "bms_charging";
        case Kind::Discharging:
            return "bms_discharging";
        case Kind::Balancing:
            return "bms_balancing";
        case Kind::Fault:
            return "bms_fault";
    }

    return "bms_unknown";
}

const char* Faraday::BmsBinarySensor::displayName() const
{
    switch (_kind) {
        case Kind::Charging:
            return "BMS charging";
        case Kind::Discharging:
            return "BMS discharging";
        case Kind::Balancing:
            return "BMS balancing";
        case Kind::Fault:
            return "BMS fault";
    }

    return "BMS unknown";
}

bool Faraday::BmsBinarySensor::init(
    EDMQTT::MQTT* mqtt,
    std::string topicPrefix,
    EDHA::DiscoveryMgr* discoveryMgr,
    EDHA::Device* device
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

        _discoveryMgr->addBinarySensor(_haDevice, displayName(), id, uniqueID)
            ->setStateTopic(_stateTopic)
            ->setValueTemplate("{{ value }}")
            ->setPayloadOn("ON")
            ->setPayloadOff("OFF");
    }

    return true;
}

bool Faraday::BmsBinarySensor::readValue(bool& value) const
{
    if (_snapshot == nullptr || !_snapshot->hasBasicInfo) {
        return false;
    }

    switch (_kind) {
        case Kind::Charging:
            value = (_snapshot->basicInfo.mosfetBitmask & 0x01) != 0;
            return true;

        case Kind::Discharging:
            value = (_snapshot->basicInfo.mosfetBitmask & 0x02) != 0;
            return true;

        case Kind::Balancing:
            value = _snapshot->basicInfo.balancerBitmask != 0;
            return true;

        case Kind::Fault: {
            bool fault = _snapshot->basicInfo.protectionBitmask != 0;

            if (_snapshot->hasErrorCounts) {
                const auto& errors = _snapshot->errorCounts;
                fault = fault
                    || errors.shortCircuit != 0
                    || errors.chargeOvercurrent != 0
                    || errors.dischargeOvercurrent != 0
                    || errors.cellOvervoltage != 0
                    || errors.cellUndervoltage != 0
                    || errors.chargeOvertemperature != 0
                    || errors.chargeUndertemperature != 0
                    || errors.dischargeOvertemperature != 0
                    || errors.dischargeUndertemperature != 0
                    || errors.batteryOvervoltage != 0
                    || errors.batteryUndervoltage != 0;
            }

            value = fault;
            return true;
        }
    }

    return false;
}

void Faraday::BmsBinarySensor::update()
{
    bool value = false;
    if (readValue(value)) {
        if (!_hasValue || value != _value) {
            _value = value;
            _hasValue = true;
            _publishPending = true;
        }
    }

    // Never publish an assumption before the first valid reading.
    if (!_hasValue) {
        return;
    }

    const bool heartbeatDue = (_lastPublishTime + 60000000) < esp_timer_get_time();
    if (_publishPending || heartbeatDue) {
        if (publishState()) {
            _publishPending = false;
        }
    }
}

bool Faraday::BmsBinarySensor::publishState()
{
    if (_mqtt == nullptr || !_hasValue) {
        return false;
    }

    const char* payload = _value ? "ON" : "OFF";

    if (!_mqtt->publish(_stateTopic.c_str(), payload, true)) {
        LOGE("bms", "failed to publish %s state", objectID());
        return false;
    }

    _lastPublishTime = esp_timer_get_time();

    return true;
}

const char* Faraday::BmsTextSensor::objectID() const
{
    switch (_kind) {
        case Kind::Status:
            return "bms_status";
        case Kind::Errors:
            return "bms_errors";
        case Kind::DeviceModel:
            return "bms_device_model";
    }

    return "bms_unknown";
}

const char* Faraday::BmsTextSensor::displayName() const
{
    switch (_kind) {
        case Kind::Status:
            return "BMS status";
        case Kind::Errors:
            return "BMS errors";
        case Kind::DeviceModel:
            return "BMS device model";
    }

    return "BMS unknown";
}

bool Faraday::BmsTextSensor::init(
    EDMQTT::MQTT* mqtt,
    std::string topicPrefix,
    EDHA::DiscoveryMgr* discoveryMgr,
    EDHA::Device* device
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

        _discoveryMgr->addSensor(_haDevice, displayName(), id, uniqueID)
            ->setStateTopic(_stateTopic)
            ->setValueTemplate("{{ value }}");
    }

    return true;
}

bool Faraday::BmsTextSensor::readLabel(char* out, size_t outSize) const
{
    if (_snapshot == nullptr || out == nullptr || outSize == 0) {
        return false;
    }

    switch (_kind) {
        case Kind::Status:
            if (!_snapshot->hasBasicInfo) {
                return false;
            }
            Bms::Protocol::formatOperationLabels(_snapshot->basicInfo.mosfetBitmask, out, outSize);
            return true;

        case Kind::Errors:
            if (!_snapshot->hasBasicInfo) {
                return false;
            }
            Bms::Protocol::formatProtectionLabels(_snapshot->basicInfo.protectionBitmask, out, outSize);
            return true;

        case Kind::DeviceModel:
            if (!_snapshot->hasDeviceModel) {
                return false;
            }
            snprintf(out, outSize, "%s", _snapshot->deviceModel);
            return true;
    }

    return false;
}

void Faraday::BmsTextSensor::update()
{
    char label[128] = {0};
    if (readLabel(label, sizeof(label))) {
        if (!_hasValue || _label != label) {
            _label = label;
            _hasValue = true;
            _publishPending = true;
        }
    }

    // Never publish an assumption before the first valid reading.
    if (!_hasValue) {
        return;
    }

    const bool heartbeatDue = (_lastPublishTime + 60000000) < esp_timer_get_time();
    if (_publishPending || heartbeatDue) {
        if (publishState()) {
            _publishPending = false;
        }
    }
}

bool Faraday::BmsTextSensor::publishState()
{
    if (_mqtt == nullptr || !_hasValue) {
        return false;
    }

    if (!_mqtt->publish(_stateTopic.c_str(), _label.c_str(), true)) {
        LOGE("bms", "failed to publish %s state", objectID());
        return false;
    }

    _lastPublishTime = esp_timer_get_time();

    return true;
}
