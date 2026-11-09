#pragma once

#include <device/anenji4200.h>

#include <sensor/sensor.h>

namespace Faraday
{
    // Anenji 4200 inverter telemetry exposed through the generic EDCommon
    // sensor base (MQTT topic + HA entity + 60 s heartbeat handling).
    class AnenjiSensor : public EDCommon::Sensor::Sensor
    {
    public:
        enum class Quantity
        {
            MainsVoltage,
            MainsCurrent,
            MainsPower,
            OutputVoltage,
            OutputCurrent,
            OutputPower,
            BatteryVoltage,
            BatteryCurrent,
            BatteryPower,
            PvVoltage,
            PvCurrent,
            PvPower,
        };

        AnenjiSensor(EDWB::ANENJI4200* device, Quantity quantity)
            : _device(device)
            , _quantity(quantity)
        {
        }

    protected:
        bool preInit() override
        {
            switch (_quantity) {
                case Quantity::MainsVoltage:
                case Quantity::OutputVoltage:
                case Quantity::BatteryVoltage:
                case Quantity::PvVoltage:
                    _config.unitOfMeasurement = "V";
                    _config.deviceClass = "voltage";
                    break;

                case Quantity::MainsCurrent:
                case Quantity::OutputCurrent:
                case Quantity::BatteryCurrent:
                case Quantity::PvCurrent:
                    _config.unitOfMeasurement = "A";
                    _config.deviceClass = "current";
                    break;

                case Quantity::MainsPower:
                case Quantity::OutputPower:
                case Quantity::BatteryPower:
                case Quantity::PvPower:
                    _config.unitOfMeasurement = "W";
                    _config.deviceClass = "power";
                    break;
            }

            _config.sensorStateClass = EDHA::SENSOR_STATE_CLASS_MEASUREMENT;

            return true;
        }

        std::pair<float_t, bool> getValueInternal() override
        {
            switch (_quantity) {
                case Quantity::MainsVoltage:
                    return _device->getMainsVoltage();

                case Quantity::MainsCurrent: {
                    // No mains-current register: derive it from power/voltage
                    // (PF = 1 assumption). Guard against a missing/zero voltage.
                    const auto power = _device->getMainsPower();
                    const auto voltage = _device->getMainsVoltage();
                    if (!power.second || !voltage.second || voltage.first < 0.5f) {
                        return {0.0f, false};
                    }

                    return {static_cast<float_t>(power.first) / voltage.first, true};
                }

                case Quantity::MainsPower: {
                    const auto value = _device->getMainsPower();
                    return {static_cast<float_t>(value.first), value.second};
                }

                case Quantity::OutputVoltage:
                    return _device->getOutputVoltage();

                case Quantity::OutputCurrent:
                    return _device->getOutputCurrent();

                case Quantity::OutputPower: {
                    const auto value = _device->getOutputActivePower();
                    return {static_cast<float_t>(value.first), value.second};
                }

                case Quantity::BatteryVoltage:
                    return _device->getBatteryVoltage();

                case Quantity::BatteryCurrent:
                    return _device->getBatteryCurrent();

                case Quantity::BatteryPower: {
                    const auto value = _device->getBatteryPower();
                    return {static_cast<float_t>(value.first), value.second};
                }

                case Quantity::PvVoltage:
                    return _device->getPvVoltage();

                case Quantity::PvCurrent:
                    return _device->getPvCurrent();

                case Quantity::PvPower: {
                    const auto value = _device->getPvPower();
                    return {static_cast<float_t>(value.first), value.second};
                }
            }

            return {0.0f, false};
        }

    private:
        EDWB::ANENJI4200* _device = nullptr;
        Quantity _quantity = Quantity::MainsVoltage;
    };
}
