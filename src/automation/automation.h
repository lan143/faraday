#pragma once

#include <string>

namespace EDMQTT
{
    class MQTT;
}

namespace EDHA
{
    class DiscoveryMgr;
    class Device;
}

namespace EDCommon
{
    namespace Relay
    {
        class Relay;
    }
}

namespace Faraday
{
    namespace Automation
    {
        // Mains<->generator changeover: one logical HA switch driving two PCF8574
        // relay channels together. OFF = mains (both relays de-energized), ON =
        // generator (both energized). State is not persisted; after every boot the
        // bank is all-OFF, so the default mode is mains.
        // init() and update() MUST be called with controlBus held by the caller
        // (they never take it themselves). init() must run only when the relay
        // expander is present. Future automatic network<->generator switching
        // belongs in this module.
        void init(EDMQTT::MQTT* mqtt, EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, const std::string& mqttPrefix);
        void update();
        EDCommon::Relay::Relay* changeover();
    }
}
