#include "status_led.h"

namespace
{
    void applyLevel(Faraday::Health::HealthLevel adapterLevel,
        Faraday::Health::HealthLevel& level)
    {
        if (adapterLevel == Faraday::Health::HealthLevel::Error) {
            level = Faraday::Health::HealthLevel::Error;
        } else if (adapterLevel == Faraday::Health::HealthLevel::Warning
            && level == Faraday::Health::HealthLevel::Ok) {
            level = Faraday::Health::HealthLevel::Warning;
        }
    }
}

void Faraday::Health::StatusLed::begin()
{
    _strip.setBrightness(STATUS_LED_BRIGHTNESS);
    _strip.begin();
    _first = true;
}

void Faraday::Health::StatusLed::update(bool mqttConnected, const MeterHealth* meter,
    const InverterHealth* inverter, const BmsHealth* bms)
{
    HealthLevel level = mqttConnected ? HealthLevel::Ok : HealthLevel::Error;
    if (meter != nullptr) {
        applyLevel(meter->level(), level);
    }
    if (inverter != nullptr) {
        applyLevel(inverter->level(), level);
    }
    if (bms != nullptr) {
        applyLevel(bms->level(), level);
    }

    if (!_first && level == _shown) {
        return;
    }

    uint8_t red = 0;
    uint8_t green = 0;
    switch (level) {
        case HealthLevel::Ok:
            green = 255;
            break;
        case HealthLevel::Warning:
            red = 255;
            green = 255;
            break;
        case HealthLevel::Error:
            red = 255;
            break;
    }

    // White stays 0: Adafruit handles the GRBW byte order in this overload.
    _strip.setPixelColor(0, red, green, 0, 0);
    _strip.show();
    _shown = level;
    _first = false;
}
