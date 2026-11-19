#pragma once

namespace EDCommon
{
    namespace BinarySensor
    {
        class BinarySensor;
    }

    namespace Light
    {
        class Light;
    }
}

namespace Faraday
{
    namespace Automation
    {
        // Basement light automation: ON while (human present OR door open), with
        // NO illuminance gate. The presence/lux sensor is still read into an
        // internal cache for future use but is never consumed by the automation.
        // Deliberately owns no MQTT topics and no HA entities and has no night
        // mode.
        //
        // initBasementLight() creates one composite OccupancySource and one
        // EDCommon::Automation::Light; updateBasementLight() pumps both.
        //
        // Threading contract (same as automation.h): init and update MUST be
        // called by the caller while controlBus is held. The library's update()
        // performs a blocking I2C light readback behind its own 500 ms gate; this
        // module never takes the semaphore itself. init must run only when the
        // relay expander is present, after the light facade has been inited.
        //
        // presenceSensor == nullptr (presence disabled) leaves the automation
        // unconstructed; updateBasementLight() is then a no-op. A null door
        // sensor degrades the composite to presence-only.
        void initBasementLight(
            EDCommon::Light::Light* light,
            EDCommon::BinarySensor::BinarySensor* presenceSensor,
            EDCommon::BinarySensor::BinarySensor* doorSensor
        );
        void updateBasementLight();
        bool basementLightAutomationEnabled();
    }
}
