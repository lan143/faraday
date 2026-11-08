#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <log/log_config.h>
#include <mqtt_config.h>
#include <network/network_config.h>

#include "defines.h"

// Bump whenever the persisted layout changes (fields reordered/renamed/retyped).
#define CURRENT_VERSION 3

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
    // WB-MAP12E forward-active-energy counters are read-only and can never be
    // reset, so the supplier reading is emulated in software: HA value =
    // energySyncValue + (deviceEnergy - energyMeterBase). energySyncValue is
    // the supplier kWh reading captured at the last sync; energyMeterBase is
    // the MAP12E counter at that same moment.
    float energySyncValue = 0.0f;
    float energyMeterBase = 0.0f;
};
