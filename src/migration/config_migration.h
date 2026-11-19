#pragma once

#include <Arduino.h>
#include <mqtt_config.h>
#include <network/network_config.h>

#include "config.h"
#include "defines.h"

// Frozen byte-layout replica of the v5 Config, taken from the pre-v6
// src/config.h. Do not reorder/rename/retype members: the on-device /config.bin
// is read back into this struct byte for byte. Appending a field only to the
// live Config (as v6 does with presenceAddress/presenceLuxThreshold) must leave
// this replica untouched.
struct ConfigV5
{
    uint8_t version = 5;

    EDNetwork::Config network;
    EDMQTT::Config mqtt;

    bool mqttIsHADiscovery = true;
    char mqttHADiscoveryPrefix[MQTT_TOPIC_LEN] = {0};
    char mqttCommandTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStateTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStatusTopic[MQTT_TOPIC_LEN] = {0};

    EDUtils::LogConfig log;

    uint32_t modbusSpeed = 9600;
    uint8_t map12eAddress = 1;
    uint16_t map12eCt1Ratio = 0;
    uint8_t anenjiAddress = 0;
    float energySyncValue = 0.0f;
    float energyMeterBase = 0.0f;

    char bmsMacAddress[18] = {0};
    uint8_t bmsCellCount = 12;
};

// v6 may only append to v5; the replica must stay strictly smaller so the
// exact-size legacy reader can never be confused with the current layout.
static_assert(sizeof(Config) > sizeof(ConfigV5), "v6 Config must grow relative to the frozen v5 replica");

// CRC16 identical to EDConfig::crc16 (init 0xFFFF, poly 0xA001), the checksum
// ed-config appends as a native little-endian uint16_t after the raw struct.
uint16_t migrationCrc16(const uint8_t* data, size_t len);

// Reads "/config.bin" only when it holds an exact-size v5 layout with a valid
// checksum and version <= 5. A missing, corrupt, v6 or differently sized file
// returns false without touching it.
bool readLegacyConfigV5(ConfigV5* out);

// Copies every v5 field onto the (already default-constructed, CURRENT_VERSION)
// v6 target, leaves target->version alone and initializes the two new fields to
// their defaults.
void applyLegacyConfigV5(Config* target, const ConfigV5& src);
