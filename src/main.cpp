#include <Arduino.h>
#include <ArduinoJson.h>
#include <ArduinoOTA.h>
#include <data_mgr.h>
#include <storage/littlefs_storage.hpp>
#include <esp_log.h>
#include <discovery.h>
#include <mqtt.h>
#include <healthcheck.h>
#include <PCF8574.h>
#include <Wire.h>
#include <network/network.h>
#include <network/network_api.h>
#include <log/log.h>

#include "defines.h"
#include "config.h"
#include "web/handler.h"
#include "web/reboot_after_response.h"

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDNetwork::NetworkApi networkApi(networkMgr);
EDMQTT::MQTT mqtt;

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

PCF8574 relayExp(RELAY_IIC_ADDRESS);
PCF8574 inputExp(INPUT_IIC_ADDRESS);

Handler handler(&configMgr, &networkApi, &healthCheck);

bool inited = false;

void setup()
{
    randomSeed(micros());

    Serial.begin(SERIAL_SPEED);

    esp_log_level_set("*", ESP_LOG_VERBOSE);

    LOGI("setup", "Faraday");
    LOGI("setup", "start");

    LOGI("setup", "littlefs begin");
    if (!LittleFS.begin(true)) {
        LOGE("setup", "failed to init littlefs");
        return;
    }

    configMgr.setDefault([](Config* config) {
        snprintf(config->network.wifiAPSSID, WIFI_SSID_LEN, "Faraday_%s", EDUtils::getMacAddress().c_str());
        snprintf(config->mqttStateTopic, MQTT_TOPIC_LEN, "faraday/%s/state", EDUtils::getChipID());
        snprintf(config->mqttCommandTopic, MQTT_TOPIC_LEN, "faraday/%s/set", EDUtils::getChipID());
        snprintf(config->mqttHADiscoveryPrefix, MQTT_TOPIC_LEN, "homeassistant");
        snprintf(config->log.host, LOG_HOST_LEN, "192.168.1.2");
        snprintf(config->log.uri, LOG_HOST_LEN, "/_bulk");
        config->log.port = 5555;
    });

    LOGI("setup", "load config");
    configMgr.load();

    networkLogger.init(configMgr.getData()->log, CONTROLLER_NAME, EDUtils::formatString("Faraday_%s", EDUtils::getMacAddress().c_str()));

    LOGI("setup", "init serial ports");
    Serial2.begin(RS485_SPEED, SERIAL_8N1, RS485_RX, RS485_TX);
    Serial1.begin(GSM_SPEED, SERIAL_8N1, GSM_RX, GSM_TX);

    LOGI("setup", "init i2c");
    Wire.begin(IIC_SDA, IIC_SCL);
    Wire.setClock(100000);

    LOGI("setup", "init PCF8574");
    if (relayExp.begin()) {
        LOGI("setup", "relay expander found at 0x%02X", RELAY_IIC_ADDRESS);
    } else {
        LOGW("setup", "relay expander not found at 0x%02X", RELAY_IIC_ADDRESS);
    }
    if (inputExp.begin()) {
        LOGI("setup", "input expander found at 0x%02X", INPUT_IIC_ADDRESS);
    } else {
        LOGW("setup", "input expander not found at 0x%02X", INPUT_IIC_ADDRESS);
    }

    LOGI("setup", "init network");
    networkMgr.init(configMgr.getData()->network, true, ETH_ADDR, ETH_POWER_PIN, ETH_MDC_PIN, ETH_MDIO_PIN, ETH_TYPE, ETH_CLK_MODE);

    LOGI("setup", "init OTA");
    ArduinoOTA.setPassword(FARADAY_OTA_AUTH);
    ArduinoOTA.begin();

    LOGI("setup", "mqtt init");
    mqtt.init(configMgr.getData()->mqtt);
    networkMgr.OnConnect([&](bool isConnected) {
        networkLogger.enable(isConnected);

        if (isConnected) {
            mqtt.connect();
        } else {
            mqtt.disconnect();
        }
    });
    healthCheck.registerService(&mqtt);

    networkApi.onSettingsChanged([&](const EDNetwork::Config& config) -> bool {
        configMgr.getData()->network = config;
        return configMgr.store();
    });

    LOGI("setup", "api handler init");
    handler.init();

    LOGI("setup", "discoveryMgr init");
    discoveryMgr.init(
        configMgr.getData()->mqttHADiscoveryPrefix,
        configMgr.getData()->mqttIsHADiscovery,
        [](std::string topicName, std::string payload) {
            return mqtt.publish(topicName.c_str(), payload.c_str(), true);
        }
    );

    LOGI("setup", "create HA device");
    device = discoveryMgr.addDevice();
    device->setHWVersion(deviceHWVersion)
        ->setSWVersion(deviceFWVersion)
        ->setModel(deviceModel)
        ->setName(deviceName)
        ->setManufacturer(deviceManufacturer);

    inited = true;
    LOGI("setup", "complete");

    // Single short boot-feedback beep; no other buzzer usage yet.
    tone(BUZZER_PIN, 2700, 150);
}

void loop()
{
    RebootAfterResponse::update();

    if (!inited) {
        return;
    }

    networkMgr.loop();
    discoveryMgr.loop();
    ArduinoOTA.handle();
    healthCheck.loop();
    networkLogger.update();
}
