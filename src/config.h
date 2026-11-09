#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <log/log_config.h>
#include <mqtt_config.h>
#include <network/network_config.h>

#include "defines.h"

// Bump whenever the persisted layout changes (fields reordered/renamed/retyped).
#define CURRENT_VERSION 5

#define MQTT_TOPIC_LEN 64

struct Config
{
    uint8_t version = CURRENT_VERSION;

    EDNetwork::Config network;
    EDMQTT::Config mqtt;

    bool mqttIsHADiscovery = true;
    char mqttHADiscoveryPrefix[MQTT_TOPIC_LEN] = {0};
    char mqttCommandTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStateTopic[MQTT_TOPIC_LEN] = {0};
    char mqttStatusTopic[MQTT_TOPIC_LEN] = {0};

    EDUtils::LogConfig log;

    // RS485 / WB-MAP12E energy meter.
    uint32_t modbusSpeed = 9600;
    uint8_t map12eAddress = 1;
    uint16_t map12eCt1Ratio = 0;
    // ANENJI 4200 hybrid inverter Modbus slave address; 0 = device disabled.
    uint8_t anenjiAddress = 0;
    // WB-MAP12E forward-active-energy counters are read-only and can never be
    // reset, so the supplier reading is emulated in software: HA value =
    // energySyncValue + (deviceEnergy - energyMeterBase). energySyncValue is
    // the supplier kWh reading captured at the last sync; energyMeterBase is
    // the MAP12E counter at that same moment.
    float energySyncValue = 0.0f;
    float energyMeterBase = 0.0f;

    // JBD BMS Bluetooth MAC address, "AA:BB:CC:DD:EE:FF". Empty = BMS disabled
    // (mirrors the anenjiAddress = 0 convention): no BLE init, no polling and no
    // MQTT/HA entities until a MAC is configured.
    char bmsMacAddress[18] = {0};
    // Real number of cells in the battery pack (this board: 12S battery on a
    // 20S-capable BMS), valid range 1..20. Cell telemetry is capped to this.
    uint8_t bmsCellCount = 12;
};
