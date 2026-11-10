#pragma once

#include <string>

#include "bms_client.h"

namespace EDMQTT
{
    class MQTT;
}

namespace EDHA
{
    class DiscoveryMgr;
    class Device;
}

namespace Faraday
{
    namespace Bms
    {
        // JBD-BMS-over-Bluetooth telemetry domain facade (automation.cpp
        // pattern): owns the Client singleton and the MQTT/HA sensor objects.
        // Read-only telemetry plus the operator-triggered failed-event counter
        // clear, with the JBD app-key handshake for command access; no
        // MOSFET/balancer writes.
        // init() starts the client task; when no valid MAC is configured it
        // creates no sensors and the client stays BLE-dormant (scan only).
        void init(EDMQTT::MQTT* mqtt, EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, const std::string& mqttPrefix);

        // Pumps every created sensor object. Must be called from the loop task
        // outside the modbusBus/controlBus guards. Sensors are pumped only when
        // the BLE link is connected AND MQTT is ready: publishing while offline
        // only feeds the ed-utils logger's failed-publish flood.
        void update(bool mqttReady);

        // Always-available client accessor (BLE scan, state) for the HTTP layer.
        Client* client();

        // Validates/normalizes a full "AA:BB:CC:DD:EE:FF" MAC (any hex case,
        // 1-2 digits per group) into uppercase form. Returns false for an
        // empty/invalid input or when outSize < 18.
        bool validateMacAddress(const char* input, char* out, size_t outSize);
    }
}
