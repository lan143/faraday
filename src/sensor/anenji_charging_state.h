#pragma once

#include <Arduino.h>
#include <discovery.h>
#include <mqtt.h>

#include <string>

namespace EDWB
{
    class ANENJI4200;
}

namespace Faraday
{
    // Standalone HA binary_sensor reporting whether the inverter battery is
    // charging. The generic EDCommon::Sensor base is float-only, so this class
    // mirrors its publish/heartbeat behavior instead of deriving from it.
    class BatteryChargingState
    {
    public:
        enum class State
        {
            Unknown,
            Charging,
            NotCharging,
        };

        // The inverter device is bound separately (the object is constructed at
        // file scope before the Modbus device exists).
        void setDevice(EDWB::ANENJI4200* device) { _device = device; }

        bool init(
            EDMQTT::MQTT* mqtt,
            std::string topicPrefix,
            EDHA::DiscoveryMgr* discoveryMgr,
            EDHA::Device* device
        );

        // Must be called with the modbusBus semaphore held.
        void update();

    private:
        bool publishState();

        EDWB::ANENJI4200* _device = nullptr;
        EDMQTT::MQTT* _mqtt = nullptr;
        EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
        EDHA::Device* _haDevice = nullptr;
        std::string _stateTopic;
        State _state = State::Unknown;
        State _lastPublishedState = State::Unknown;
        bool _publishPending = false;
        int64_t _lastReadTime = 0;
        int64_t _lastPublishTime = 0;
    };
}
