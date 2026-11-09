#pragma once

#include <Arduino.h>
#include <discovery.h>
#include <mqtt.h>

#include <cstdint>
#include <string>

namespace EDWB
{
    class ANENJI4200;
}

namespace Faraday
{
    // Standalone HA sensor exposing one ANENJI4200 enum as a plain text state.
    // The generic EDCommon::Sensor base is float-only, so this class mirrors the
    // BatteryChargingState publish/heartbeat machinery instead of deriving from
    // it: interval-gated read, publish-on-change plus a 60 s retained heartbeat,
    // failed-publish pending retry, silent until the first valid read, and hold
    // the previous label when a read fails.
    class AnenjiModeSensor
    {
    public:
        enum class Kind
        {
            WorkMode,
            OutputMode,
            OutputPriority,
            ChargePriority,
        };

        explicit AnenjiModeSensor(Kind kind) : _kind(kind) { }

        // The inverter device is bound separately (the object is constructed at
        // file scope before the Modbus device exists).
        void setDevice(EDWB::ANENJI4200* device) { _device = device; }

        // `index` staggers the first read by 800 * index ms so the four enum
        // objects (and the existing telemetry sensors) never align into one bus
        // burst.
        bool init(
            EDMQTT::MQTT* mqtt,
            std::string topicPrefix,
            EDHA::DiscoveryMgr* discoveryMgr,
            EDHA::Device* device,
            uint8_t index
        );

        // Must be called with the modbusBus semaphore held.
        void update();

        // Single source of truth for the HA entity and the web API. Unknown
        // values map to "Unknown" instead of crashing.
        static const char* label(Kind kind, uint16_t value);

    private:
        const char* objectID() const;
        const char* displayName() const;
        int64_t readInterval() const;
        bool publishState();

        Kind _kind;
        EDWB::ANENJI4200* _device = nullptr;
        EDMQTT::MQTT* _mqtt = nullptr;
        EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
        EDHA::Device* _haDevice = nullptr;
        std::string _stateTopic;
        uint16_t _value = 0;
        bool _hasValue = false;
        bool _publishPending = false;
        int64_t _lastReadTime = 0;
        int64_t _lastPublishTime = 0;
    };
}
