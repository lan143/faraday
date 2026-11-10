#pragma once

#include <Adafruit_NeoPixel.h>

#include <defines.h>

#include "device_health.h"

namespace Faraday
{
    namespace Health
    {
        // Single-pixel health indicator mirroring /healthcheck/ready:
        // green = no errors, yellow = warning, red = error (error dominates).
        // update() only reads the adapters' cached level() getters and never
        // calls ready(), so it cannot double-drive probes or MQTT ticks.
        class StatusLed
        {
        public:
            void begin();
            void update(bool mqttConnected, const MeterHealth* meter,
                const InverterHealth* inverter, const BmsHealth* bms);

        private:
            Adafruit_NeoPixel _strip{
                STATUS_LED_COUNT, STATUS_LED_PIN, NEO_GRBW + NEO_KHZ800
            };
            HealthLevel _shown = HealthLevel::Error;
            bool _first = true;
        };
    }
}
