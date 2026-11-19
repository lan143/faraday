#pragma once

#include <device/mtd262mb.h>

#include <sensor/sensor.h>

namespace Faraday
{
    // Saifuli MTD262-MB presence/illuminance sensor. The pinned ed-wb driver
    // exposes only the presence channel (input register 0x00); illuminance lives
    // in input register 0x01 (s16, scale 0.1 -> lux) per the Saifuli MTDX62-MB
    // Wiren Board template. Only INPUT registers are read: the device's holding
    // registers (including its own light threshold 0x0B) are never touched.
    class MTD262MBIlluminance : public EDWB::MTD262MB
    {
    public:
        MTD262MBIlluminance(ModbusClient& client) : EDWB::MTD262MB(client) {}

        // Same contract as EDWB::MTD262MB::isHumanDetected(): {value, valid},
        // and no transaction runs unless this is called from an update path.
        std::pair<float, bool> getIlluminance() const;

    private:
        static constexpr uint16_t kIlluminanceRegister = 0x01;
        static constexpr float kIlluminanceScale = 0.1f;
    };

    // Internal-only illuminance wrapper over the generic EDCommon sensor base.
    // No options are ever passed, so it owns no MQTT topic and no HA entity; it
    // only caches the value read under modbusBus for the basement automation.
    class MTD262IlluminanceSensor : public EDCommon::Sensor::Sensor
    {
    public:
        MTD262IlluminanceSensor(EDWB::MTD262MB* device)
            : _device(static_cast<MTD262MBIlluminance*>(device))
        {
        }

    protected:
        // Deliberately no unit/device class/state class: internal cache only.
        bool preInit() override
        {
            return true;
        }

        std::pair<float_t, bool> getValueInternal() override
        {
            const auto illuminance = _device->getIlluminance();
            return {illuminance.first, illuminance.second};
        }

    private:
        MTD262MBIlluminance* _device = nullptr;
    };
}
