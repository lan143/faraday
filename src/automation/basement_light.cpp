#include "basement_light.h"

#include <LittleFS.h>

#include <utility>

#include <automation/light.h>
#include <binary_sensor/binary_sensor.h>
#include <light/light.h>
#include <log/log.h>

#include "defines.h"

namespace
{
    // Composite occupancy for the basement light: human presence OR door open.
    // All reads come from the children's mutex-free caches (isActive()), so this
    // never touches the Modbus/I2C buses. Door-open keeps the room "occupied"
    // even with no human detected, and a presence child holding its last valid
    // value keeps the light on through transient Modbus failures.
    class OccupancySource : public EDCommon::BinarySensor::BinarySensor
    {
    public:
        OccupancySource(
            EDCommon::BinarySensor::BinarySensor* presence,
            EDCommon::BinarySensor::BinarySensor* door
        ) : _presence(presence), _door(door)
        {
        }

    protected:
        bool preInit() override
        {
            _config.reverse = false;
            return true;
        }

        std::pair<bool, bool> isActiveInternal() override
        {
            const auto presence = _presence != nullptr ? _presence->isActive() : std::pair<bool, bool>{false, false};
            const auto door = _door != nullptr ? _door->isActive() : std::pair<bool, bool>{false, false};

            if (presence.second || door.second) {
                // Door-open keeps the basement "occupied" even with no human
                // detected; presence holds through transient Modbus failures
                // because the child caches retain their last valid values.
                _last = (presence.second && presence.first) || (door.second && door.first);
                return {_last, true};
            }

            // Neither child has ever produced a valid read: stay with the last
            // known verdict but report valid. The base logs an error every
            // interval on an invalid read, and a false-negative here would flip
            // the light off spuriously.
            return {_last, true};
        }

    private:
        EDCommon::BinarySensor::BinarySensor* _presence = nullptr;
        EDCommon::BinarySensor::BinarySensor* _door = nullptr;
        bool _last = false;
    };
}

static OccupancySource* occupancySource = nullptr;
static EDCommon::Automation::Light* basementAutomation = nullptr;

void Faraday::Automation::initBasementLight(
    EDCommon::Light::Light* light,
    EDCommon::BinarySensor::BinarySensor* presenceSensor,
    EDCommon::BinarySensor::BinarySensor* doorSensor
)
{
    if (basementAutomation != nullptr) {
        return;
    }

    if (presenceSensor == nullptr) {
        return;
    }

    occupancySource = new OccupancySource(presenceSensor, doorSensor);
    if (!occupancySource->init(BASEMENT_LIGHT_SOURCE_POLL_MS, {})) {
        LOGE("automation", "failed to init basement occupancy source");
        delete occupancySource;
        occupancySource = nullptr;
        return;
    }

    // The board doctrine is ALL relays OFF after every boot, and the library
    // adopts a persisted enabled=true as a manual override (parking the
    // automation in manual mode for ~10 min). Deleting the state file before the
    // automation constructs its DataMgr guarantees a fresh default state.
    if (LittleFS.exists(BASEMENT_LIGHT_STATE_FILE)) {
        LittleFS.remove(BASEMENT_LIGHT_STATE_FILE);
    }

    basementAutomation = new EDCommon::Automation::Light(light, nullptr, occupancySource);

    // Presence/door only, no illuminance gate. No night mode, no MQTT and no
    // discovery options: the automation owns no topics and registers no HA
    // entity. The lux sensor is read elsewhere into an internal cache for
    // future use and is deliberately never attached here.
    const bool inited = basementAutomation->init(BASEMENT_LIGHT_STATE_FILE, {});

    if (!inited) {
        LOGW("automation", "failed to init basement light automation");
        delete basementAutomation;
        basementAutomation = nullptr;
        delete occupancySource;
        occupancySource = nullptr;
        return;
    }

    LOGI("automation", "basement light automation enabled");
}

void Faraday::Automation::updateBasementLight()
{
    if (basementAutomation == nullptr) {
        return;
    }

    // Pump the composite source first so the library sees a fresh verdict; both
    // calls are internal-gated (500 ms) and run with controlBus held by caller.
    occupancySource->update();
    basementAutomation->update();
}

bool Faraday::Automation::basementLightAutomationEnabled()
{
    return basementAutomation != nullptr;
}
