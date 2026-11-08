#pragma once

#include <Arduino.h>
#include <WiFi.h>
#include <log/log_config.h>
#include <mqtt_config.h>
#include <network/network_config.h>

#include "defines.h"

// Bump whenever the persisted layout changes (fields reordered/renamed/retyped).
#define CURRENT_VERSION 1

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

    EDUtils::LogConfig log;
};
