#include "automation.h"

#include <PCF8574.h>
#include <log/log.h>
#include <relay/pcf8574.h>
#include <relay/relay.h>

#include "defines.h"

// Defined in src/main.cpp. The PCF8574 constructor only stores the address, so
// this cross-translation-unit reference is safe during static initialization.
extern PCF8574 relayExp;

namespace
{
    class GeneratorChangeover : public EDCommon::Relay::Relay
    {
    public:
        GeneratorChangeover(EDCommon::Relay::Relay* relayOne, EDCommon::Relay::Relay* relayTwo)
            : Relay(), _relayOne(relayOne), _relayTwo(relayTwo)
        {
        }

    protected:
        // Queue-only delegation: safe to reach the enqueue from any task; hardware
        // writes happen when the backing relays' update() drains (called in update()).
        bool setStateInternal(bool enable) override
        {
            return _relayOne->setState(enable) && _relayTwo->setState(enable);
        }

        std::pair<bool, bool> isEnabledInternal() override
        {
            const auto one = _relayOne->isEnabled();
            const auto two = _relayTwo->isEnabled();
            return {one.first && two.first, one.second && two.second};
        }

    private:
        EDCommon::Relay::Relay* _relayOne;
        EDCommon::Relay::Relay* _relayTwo;
    };

    EDCommon::Relay::PCF8574P changeoverRelayOne(&relayExp);
    EDCommon::Relay::PCF8574P changeoverRelayTwo(&relayExp);
    GeneratorChangeover generatorChangeover(&changeoverRelayOne, &changeoverRelayTwo);
}

void Faraday::Automation::init(EDMQTT::MQTT* mqtt, EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, const std::string& mqttPrefix)
{
    // No MQTT/discovery options on the backing relays: only the facade owns
    // topics and the HA switch entity (lightRelay precedent).
    if (!changeoverRelayOne.init(CHANGEOVER_RELAY_K2_CHANNEL, {}))
    {
        LOGE("automation", "failed to init changeover relay K2");
    }

    if (!changeoverRelayTwo.init(CHANGEOVER_RELAY_K5_CHANNEL, {}))
    {
        LOGE("automation", "failed to init changeover relay K5");
    }

    if (!generatorChangeover.init({
            EDCommon::Relay::withMQTT(mqtt, mqttPrefix, "faraday", "Generator"),
            EDCommon::Relay::withDiscovery(discoveryMgr, device),
        }))
    {
        LOGE("automation", "failed to init generator changeover");
    }
}

void Faraday::Automation::update()
{
    generatorChangeover.update();
    changeoverRelayOne.update();
    changeoverRelayTwo.update();
}

EDCommon::Relay::Relay* Faraday::Automation::changeover()
{
    return &generatorChangeover;
}
