#pragma once

#include <Arduino.h>
#include <discovery.h>
#include <mqtt.h>
#include <sensor/sensor.h>

#include <cstdint>
#include <string>

#include "bms_types.h"

namespace Faraday
{
    // Numeric BMS telemetry exposed through the generic EDCommon sensor base.
    // The snapshot is owned by Faraday::Bms::update() (a loop-task cache the BLE
    // task never writes directly), so reading it here is race-free.
    class BmsSensor : public EDCommon::Sensor::Sensor
    {
    public:
        enum class Quantity
        {
            StateOfCharge,
            TotalVoltage,
            Current,
            Power,
            CapacityRemaining,
            NominalCapacity,
            ChargingCycles,
            MinCellVoltage,
            MaxCellVoltage,
            AvgCellVoltage,
            DeltaCellVoltage,
            Temperature1,
            Temperature2,
            Temperature3,
            CellVoltage,
        };

        BmsSensor(const Bms::BmsSnapshot* snapshot, Quantity quantity, uint8_t cellIndex = 0)
            : _snapshot(snapshot)
            , _quantity(quantity)
            , _cellIndex(cellIndex)
        {
        }

    protected:
        bool preInit() override
        {
            switch (_quantity) {
                case Quantity::StateOfCharge:
                    _config.unitOfMeasurement = "%";
                    _config.deviceClass = "battery";
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;

                case Quantity::TotalVoltage:
                case Quantity::MinCellVoltage:
                case Quantity::MaxCellVoltage:
                case Quantity::AvgCellVoltage:
                case Quantity::DeltaCellVoltage:
                case Quantity::CellVoltage:
                    _config.unitOfMeasurement = "V";
                    _config.deviceClass = "voltage";
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;

                case Quantity::Current:
                    _config.unitOfMeasurement = "A";
                    _config.deviceClass = "current";
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;

                case Quantity::Power:
                    _config.unitOfMeasurement = "W";
                    _config.deviceClass = "power";
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;

                case Quantity::CapacityRemaining:
                case Quantity::NominalCapacity:
                    _config.unitOfMeasurement = "Ah";
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;

                case Quantity::ChargingCycles:
                    // No unit, no device class: a plain count.
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;

                case Quantity::Temperature1:
                case Quantity::Temperature2:
                case Quantity::Temperature3:
                    _config.unitOfMeasurement = "°C";
                    _config.deviceClass = "temperature";
                    _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;
                    break;
            }

            return true;
        }

        std::pair<float_t, bool> getValueInternal() override
        {
            if (_snapshot == nullptr || !_snapshot->hasBasicInfo) {
                return {0.0f, false};
            }

            const Bms::BmsBasicInfo& basic = _snapshot->basicInfo;

            switch (_quantity) {
                case Quantity::StateOfCharge:
                    return {basic.soc, true};

                case Quantity::TotalVoltage:
                    return {basic.totalVoltage, true};

                case Quantity::Current:
                    return {basic.current, true};

                case Quantity::Power:
                    return {basic.power, true};

                case Quantity::CapacityRemaining:
                    return {basic.capacityRemaining, true};

                case Quantity::NominalCapacity:
                    return {basic.nominalCapacity, true};

                case Quantity::ChargingCycles:
                    return {static_cast<float_t>(basic.cycles), true};

                case Quantity::MinCellVoltage:
                    if (!_snapshot->hasCells) {
                        return {0.0f, false};
                    }
                    return {basic.minCellVoltage, true};

                case Quantity::MaxCellVoltage:
                    if (!_snapshot->hasCells) {
                        return {0.0f, false};
                    }
                    return {basic.maxCellVoltage, true};

                case Quantity::AvgCellVoltage:
                    if (!_snapshot->hasCells) {
                        return {0.0f, false};
                    }
                    return {basic.avgCellVoltage, true};

                case Quantity::DeltaCellVoltage:
                    if (!_snapshot->hasCells) {
                        return {0.0f, false};
                    }
                    return {basic.deltaCellVoltage, true};

                case Quantity::Temperature1:
                case Quantity::Temperature2:
                case Quantity::Temperature3: {
                    const uint8_t index = static_cast<uint8_t>(
                        static_cast<uint8_t>(_quantity) - static_cast<uint8_t>(Quantity::Temperature1)
                    );
                    if (basic.temperatureCount <= index) {
                        return {0.0f, false};
                    }
                    return {basic.temperatures[index], true};
                }

                case Quantity::CellVoltage:
                    if (!_snapshot->hasCells || _cellIndex == 0 || _cellIndex > _snapshot->cells.count) {
                        return {0.0f, false};
                    }
                    return {_snapshot->cells.volts[_cellIndex - 1], true};
            }

            return {0.0f, false};
        }

    private:
        const Bms::BmsSnapshot* _snapshot = nullptr;
        Quantity _quantity = Quantity::StateOfCharge;
        uint8_t _cellIndex = 0;
    };

    // On/Off telemetry that mirrors the BatteryChargingState publish/heartbeat
    // machinery (EDCommon::Sensor is float-only): retained ON/OFF, publish on
    // change + 60 s heartbeat, silent until the first valid frame, hold the last
    // value on a failed read.
    class BmsBinarySensor
    {
    public:
        enum class Kind
        {
            Charging,
            Discharging,
            Balancing,
            Fault,
        };

        BmsBinarySensor(const Bms::BmsSnapshot* snapshot, Kind kind)
            : _snapshot(snapshot)
            , _kind(kind)
        {
        }

        bool init(
            EDMQTT::MQTT* mqtt,
            std::string topicPrefix,
            EDHA::DiscoveryMgr* discoveryMgr,
            EDHA::Device* device
        );

        void update();

    private:
        const char* objectID() const;
        const char* displayName() const;
        bool readValue(bool& value) const;
        bool publishState();

        const Bms::BmsSnapshot* _snapshot = nullptr;
        Kind _kind = Kind::Charging;
        EDMQTT::MQTT* _mqtt = nullptr;
        EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
        EDHA::Device* _haDevice = nullptr;
        std::string _stateTopic;
        bool _value = false;
        bool _hasValue = false;
        bool _publishPending = false;
        int64_t _lastPublishTime = 0;
    };

    // Plain text-state HA sensor (no unit/state class), following the
    // AnenjiModeSensor precedent: retained string, publish on change + 60 s
    // heartbeat, silent until the first valid frame, hold the last value on a
    // failed read.
    class BmsTextSensor
    {
    public:
        enum class Kind
        {
            Status,
            Errors,
            DeviceModel,
        };

        BmsTextSensor(const Bms::BmsSnapshot* snapshot, Kind kind)
            : _snapshot(snapshot)
            , _kind(kind)
        {
        }

        bool init(
            EDMQTT::MQTT* mqtt,
            std::string topicPrefix,
            EDHA::DiscoveryMgr* discoveryMgr,
            EDHA::Device* device
        );

        void update();

    private:
        const char* objectID() const;
        const char* displayName() const;
        bool readLabel(char* out, size_t outSize) const;
        bool publishState();

        const Bms::BmsSnapshot* _snapshot = nullptr;
        Kind _kind = Kind::Status;
        EDMQTT::MQTT* _mqtt = nullptr;
        EDHA::DiscoveryMgr* _discoveryMgr = nullptr;
        EDHA::Device* _haDevice = nullptr;
        std::string _stateTopic;
        std::string _label;
        bool _hasValue = false;
        bool _publishPending = false;
        int64_t _lastPublishTime = 0;
    };
}
