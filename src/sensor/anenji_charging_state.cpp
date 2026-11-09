#include <ExtStrings.h>
#include <Utils.h>
#include <device/anenji4200.h>
#include <log/log.h>

#include "./anenji_charging_state.h"

bool Faraday::BatteryChargingState::init(
    EDMQTT::MQTT* mqtt,
    std::string topicPrefix,
    EDHA::DiscoveryMgr* discoveryMgr,
    EDHA::Device* device
)
{
    _mqtt = mqtt;
    _discoveryMgr = discoveryMgr;
    _haDevice = device;

    const std::string objectID = "battery_charging";
    _stateTopic = topicPrefix + "/" + objectID + "/state";

    if (_discoveryMgr != nullptr && _haDevice != nullptr) {
        const std::string uniqueID = EDUtils::formatString(
            "%s_faraday_%s", objectID.c_str(), EDUtils::getChipID()
        );

        _discoveryMgr->addBinarySensor(_haDevice, "Battery charging", objectID, uniqueID)
            ->setStateTopic(_stateTopic)
            ->setValueTemplate("{{ value }}")
            ->setPayloadOn("ON")
            ->setPayloadOff("OFF")
            ->setDeviceClass("battery_charging");
    }

    return true;
}

void Faraday::BatteryChargingState::update()
{
    // Internal read gate (mirrors EDCommon::Sensor): loop() calls update() every
    // guarded pass, so throttle the Modbus read itself to once per 10 s. Publish
    // (change/heartbeat/pending) is only evaluated on gated passes.
    if ((esp_timer_get_time() - _lastReadTime) < 10000000LL) {
        return;
    }
    _lastReadTime = esp_timer_get_time();

    if (_device == nullptr) {
        return;
    }

    // Register 232: positive = charging, negative = discharging. A zero or
    // failed read holds the last known state.
    const auto current = _device->getBatteryCurrentFiltered();
    if (current.second) {
        State next = _state;
        if (current.first > 0.0f) {
            next = State::Charging;
        } else if (current.first < 0.0f) {
            next = State::NotCharging;
        }

        if (next != _state && next != State::Unknown) {
            _state = next;
            _publishPending = true;
        }
    }

    // Never publish an assumption before the first valid reading.
    if (_state == State::Unknown) {
        return;
    }

    const bool heartbeatDue = (_lastPublishTime + 60000000) < esp_timer_get_time();
    if (_publishPending || heartbeatDue) {
        if (publishState()) {
            _publishPending = false;
        }
    }
}

bool Faraday::BatteryChargingState::publishState()
{
    if (_mqtt == nullptr || _state == State::Unknown) {
        return false;
    }

    const char* payload = _state == State::Charging ? "ON" : "OFF";

    if (!_mqtt->publish(_stateTopic.c_str(), payload, true)) {
        LOGE("anenji", "failed to publish battery charging state");
        return false;
    }

    _lastPublishedState = _state;
    _lastPublishTime = esp_timer_get_time();

    return true;
}
