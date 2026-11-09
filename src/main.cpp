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
#include <wirenboard.h>
#include <sensor/wb_map12e_voltage.h>
#include <sensor/wb_map12e_current.h>
#include <sensor/wb_map12e_active_power.h>
#include <sensor/wb_map12e_frequency.h>
#include <sensor/wb_map12e_energy.h>
#include <sensor/wb_map12e_reactive_power.h>
#include <sensor/anenji_sensor.h>
#include <sensor/anenji_charging_state.h>
#include <sensor/anenji_mode_sensor.h>
#include <relay/pcf8574.h>
#include <light/relay_light.h>

#include <string>

#include "defines.h"
#include "config.h"
#include "automation/automation.h"
#include "bms/bms.h"
#include "web/handler.h"
#include "web/reboot_after_response.h"

EDConfig::DataMgr<Config> configMgr(new EDConfig::StorageLittleFS<Config>("/config.bin"));
EDNetwork::NetworkMgr networkMgr;
EDNetwork::NetworkApi networkApi(networkMgr);
EDMQTT::MQTT mqtt;
EDWB::WirenBoard modbus(Serial2);

EDHealthCheck::HealthCheck healthCheck;
EDHA::DiscoveryMgr discoveryMgr;
EDHA::Device* device = nullptr;

EDWB::MAP12E* map12e = nullptr;

EDWB::ANENJI4200* anenji = nullptr;

Faraday::AnenjiSensor* anenjiMainsVoltageSensor = nullptr;
Faraday::AnenjiSensor* anenjiMainsCurrentSensor = nullptr;
Faraday::AnenjiSensor* anenjiMainsPowerSensor = nullptr;
Faraday::AnenjiSensor* anenjiOutputVoltageSensor = nullptr;
Faraday::AnenjiSensor* anenjiOutputCurrentSensor = nullptr;
Faraday::AnenjiSensor* anenjiOutputPowerSensor = nullptr;
Faraday::AnenjiSensor* anenjiBatteryVoltageSensor = nullptr;
Faraday::AnenjiSensor* anenjiBatteryCurrentSensor = nullptr;
Faraday::AnenjiSensor* anenjiBatteryPowerSensor = nullptr;
Faraday::AnenjiSensor* anenjiPvVoltageSensor = nullptr;
Faraday::AnenjiSensor* anenjiPvCurrentSensor = nullptr;
Faraday::AnenjiSensor* anenjiPvPowerSensor = nullptr;

Faraday::BatteryChargingState anenjiCharging;

Faraday::AnenjiModeSensor anenjiWorkModeSensor(Faraday::AnenjiModeSensor::Kind::WorkMode);
Faraday::AnenjiModeSensor anenjiOutputModeSensor(Faraday::AnenjiModeSensor::Kind::OutputMode);
Faraday::AnenjiModeSensor anenjiOutputPrioritySensor(Faraday::AnenjiModeSensor::Kind::OutputPriority);
Faraday::AnenjiModeSensor anenjiChargePrioritySensor(Faraday::AnenjiModeSensor::Kind::ChargePriority);

EDCommon::Sensor::Sensor* supplierEnergy = nullptr;
EDCommon::Sensor::Sensor* supplierEnergyVoltage = nullptr;
EDCommon::Sensor::Sensor* supplierEnergyCurrent = nullptr;
EDCommon::Sensor::Sensor* supplierEnergyPower = nullptr;
EDCommon::Sensor::Sensor* supplierEnergyReactivePower = nullptr;
EDCommon::Sensor::Sensor* supplierEnergyFrequency = nullptr;

PCF8574 relayExp(RELAY_IIC_ADDRESS);
PCF8574 inputExp(INPUT_IIC_ADDRESS);

// Set from the relay-expander probe in setup(): PCF8574::read8() returns 0 on
// I2C failure, so isEnabled() would falsely report both relays ON when absent.
bool relayExpPresent = false;

EDCommon::Relay::PCF8574P ventilationRelay(&relayExp);
EDCommon::Relay::PCF8574P lightRelay(&relayExp);
EDCommon::Light::Relay light(&lightRelay);

// Binary semaphore serializing Modbus bus access between the loop task and the
// AsyncTCP/webserver task (extern-declared in src/web/handler.cpp as the RAII
// ModbusGuard). Created and given as one of the first setup() actions, before
// any bus call; starts in the unlocked state.
SemaphoreHandle_t modbusBus = nullptr;

// Same pattern for the shared relay PCF8574 (its write() is a read-modify-write
// of _dataOut and read() mutates _dataIn, so concurrent task access can corrupt
// an I2C transaction). Extern-declared in src/web/handler.cpp as ControlGuard.
SemaphoreHandle_t controlBus = nullptr;

Handler handler(&configMgr, &networkApi, &healthCheck, &modbus);

bool inited = false;

// Electricity state derived from the WB-MAP12E L1 voltage with hysteresis.
// Only OK/ON_BATTERY are emitted in the current domain scope; ON_GENERATOR/FAIL
// are reserved for future generator/inverter logic and never transitioned to.
enum class ElectricityStatus { OK, ON_BATTERY, ON_GENERATOR, FAIL };

static const char* electricityStatusText(ElectricityStatus status)
{
    switch (status) {
        case ElectricityStatus::ON_BATTERY:
            return "ON_BATTERY";
        case ElectricityStatus::ON_GENERATOR:
            return "ON_GENERATOR";
        case ElectricityStatus::FAIL:
            return "FAIL";
        case ElectricityStatus::OK:
            break;
    }

    return "OK";
}

// The status is only published after the first valid meter reading so the
// initial retained message reflects reality instead of an assumption.
static ElectricityStatus electricityStatus = ElectricityStatus::OK;
static bool electricityStatusEverRead = false;
static bool electricityStatusPublishPending = false;

void setup()
{
    randomSeed(micros());

    // The bus guard must exist before any Modbus call (modbus.init below, and
    // the web handlers registered later in this function); give it right away
    // so it boots in the unlocked state.
    modbusBus = xSemaphoreCreateBinary();
    xSemaphoreGive(modbusBus);

    // Same guard for the relay expander, created/given before the relay inits
    // below and before handler.init(); boots unlocked like modbusBus.
    controlBus = xSemaphoreCreateBinary();
    xSemaphoreGive(controlBus);

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
        snprintf(config->mqttStatusTopic, MQTT_TOPIC_LEN, "faraday/%s/status", EDUtils::getChipID());
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
    Serial2.begin(configMgr.getData()->modbusSpeed, SERIAL_8N1, RS485_RX, RS485_TX);
    modbus.init(15);
    Serial1.begin(GSM_SPEED, SERIAL_8N1, GSM_RX, GSM_TX);

    LOGI("setup", "init i2c");
    Wire.begin(IIC_SDA, IIC_SCL);
    Wire.setClock(100000);

    LOGI("setup", "init PCF8574");
    relayExpPresent = relayExp.begin();
    if (relayExpPresent) {
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

    LOGI("setup", "init WB-MAP12E");
    Config* config = configMgr.getData();
    map12e = modbus.addMAP12E(config->map12eAddress);
    handler.setMap12E(map12e);

    LOGI("setup", "init ANENJI 4200");
    if (config->anenjiAddress > 0) {
        anenji = modbus.addANENJI4200(config->anenjiAddress);
        LOGI("setup", "anenji enabled at %u", (unsigned)config->anenjiAddress);
    } else {
        LOGI("setup", "anenji disabled");
    }
    handler.setAnenji(anenji);

    // The device already applies the CT ratio to its measurements; keep the
    // stored ratio in sync with the device because the meter cannot be probed
    // reliably later without a successful read.
    auto ctRatio = map12e->getCTTransformRatio(1, EDWB::MAP12E_PHASE_L1);
    if (!ctRatio.second) {
        LOGW("setup", "map12e not reachable, skipping CT ratio reconciliation");
    } else if (ctRatio.first != config->map12eCt1Ratio) {
        if (!map12e->setCTTransformRatio(1, EDWB::MAP12E_PHASE_L1, config->map12eCt1Ratio)) {
            LOGW("setup", "failed to set map12e CT1 ratio");
        }
    }

    std::string mqttPrefix = EDUtils::formatString("faraday/%s", EDUtils::getChipID());

    supplierEnergy = new EDCommon::Sensor::WBMAP12EEnergy(
        map12e, 1, EDWB::MAP12E_PHASE_L1, &config->energySyncValue, &config->energyMeterBase
    );
    if (!supplierEnergy->init(2, 60000, {
            EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", "Supplier energy"),
            EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
        })) {
        LOGE("setup", "failed to init supplier energy sensor");
    }

    supplierEnergyVoltage = new EDCommon::Sensor::WBMAP12EVoltage(map12e, EDWB::MAP12E_PHASE_L1);
    if (!supplierEnergyVoltage->init(1, 10000, {
            EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", "Supplier energy voltage"),
            EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
        })) {
        LOGE("setup", "failed to init supplier energy voltage sensor");
    }

    supplierEnergyCurrent = new EDCommon::Sensor::WBMAP12ECurrent(map12e, 1, EDWB::MAP12E_PHASE_L1);
    if (!supplierEnergyCurrent->init(2, 10000, {
            EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", "Supplier energy current"),
            EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
        })) {
        LOGE("setup", "failed to init supplier energy current sensor");
    }

    supplierEnergyPower = new EDCommon::Sensor::WBMAP12EActivePower(map12e, 1, EDWB::MAP12E_PHASE_L1);
    if (!supplierEnergyPower->init(0, 10000, {
            EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", "Supplier energy power"),
            EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
        })) {
        LOGE("setup", "failed to init supplier energy power sensor");
    }

    supplierEnergyReactivePower = new Faraday::WBMAP12EReactivePower(map12e, 1, EDWB::MAP12E_PHASE_L1);
    if (!supplierEnergyReactivePower->init(0, 10000, {
            EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", "Supplier energy reactive power"),
            EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
        })) {
        LOGE("setup", "failed to init supplier energy reactive power sensor");
    }

    supplierEnergyFrequency = new EDCommon::Sensor::WBMAP12EFrequency(map12e);
    if (!supplierEnergyFrequency->init(2, 10000, {
            EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", "Supplier energy frequency"),
            EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
        })) {
        LOGE("setup", "failed to init supplier energy frequency sensor");
    }

    if (anenji != nullptr) {
        // Staggered first reads: all 12 sensors would otherwise poll the bus in
        // the same first microseconds and their synchronized ~300 ms timeout
        // bursts exceed the project's worst-case stall convention when the
        // inverter is enabled but absent. Index 0..11 -> 10000..18800 ms.
        uint8_t anenjiSensorIndex = 0;
        auto initAnenjiSensor = [&](Faraday::AnenjiSensor*& sensor,
                                    Faraday::AnenjiSensor::Quantity quantity,
                                    uint8_t precision,
                                    const char* name) {
            sensor = new Faraday::AnenjiSensor(anenji, quantity);
            if (!sensor->init(precision, 10000 + anenjiSensorIndex * 800, {
                    EDCommon::Sensor::withMQTT(&mqtt, mqttPrefix, "faraday", name),
                    EDCommon::Sensor::withDiscovery(&discoveryMgr, device),
                })) {
                LOGE("setup", "failed to init %s sensor", name);
            }
            ++anenjiSensorIndex;
        };

        initAnenjiSensor(anenjiMainsVoltageSensor, Faraday::AnenjiSensor::Quantity::MainsVoltage, 1, "Mains voltage");
        initAnenjiSensor(anenjiMainsCurrentSensor, Faraday::AnenjiSensor::Quantity::MainsCurrent, 1, "Mains current");
        initAnenjiSensor(anenjiMainsPowerSensor, Faraday::AnenjiSensor::Quantity::MainsPower, 0, "Mains power");
        initAnenjiSensor(anenjiOutputVoltageSensor, Faraday::AnenjiSensor::Quantity::OutputVoltage, 1, "Output voltage");
        initAnenjiSensor(anenjiOutputCurrentSensor, Faraday::AnenjiSensor::Quantity::OutputCurrent, 1, "Output current");
        initAnenjiSensor(anenjiOutputPowerSensor, Faraday::AnenjiSensor::Quantity::OutputPower, 0, "Output power");
        initAnenjiSensor(anenjiBatteryVoltageSensor, Faraday::AnenjiSensor::Quantity::BatteryVoltage, 1, "Battery voltage");
        initAnenjiSensor(anenjiBatteryCurrentSensor, Faraday::AnenjiSensor::Quantity::BatteryCurrent, 1, "Battery current");
        initAnenjiSensor(anenjiBatteryPowerSensor, Faraday::AnenjiSensor::Quantity::BatteryPower, 0, "Battery power");
        initAnenjiSensor(anenjiPvVoltageSensor, Faraday::AnenjiSensor::Quantity::PvVoltage, 1, "PV voltage");
        initAnenjiSensor(anenjiPvCurrentSensor, Faraday::AnenjiSensor::Quantity::PvCurrent, 1, "PV current");
        initAnenjiSensor(anenjiPvPowerSensor, Faraday::AnenjiSensor::Quantity::PvPower, 0, "PV power");

        anenjiCharging.setDevice(anenji);
        if (!anenjiCharging.init(&mqtt, mqttPrefix, &discoveryMgr, device)) {
            LOGE("setup", "failed to init battery charging state");
        }

        anenjiWorkModeSensor.setDevice(anenji);
        if (!anenjiWorkModeSensor.init(&mqtt, mqttPrefix, &discoveryMgr, device, 0)) {
            LOGE("setup", "failed to init work mode sensor");
        }

        anenjiOutputModeSensor.setDevice(anenji);
        if (!anenjiOutputModeSensor.init(&mqtt, mqttPrefix, &discoveryMgr, device, 1)) {
            LOGE("setup", "failed to init output mode sensor");
        }

        anenjiOutputPrioritySensor.setDevice(anenji);
        if (!anenjiOutputPrioritySensor.init(&mqtt, mqttPrefix, &discoveryMgr, device, 2)) {
            LOGE("setup", "failed to init output priority sensor");
        }

        anenjiChargePrioritySensor.setDevice(anenji);
        if (!anenjiChargePrioritySensor.init(&mqtt, mqttPrefix, &discoveryMgr, device, 3)) {
            LOGE("setup", "failed to init charge priority sensor");
        }
    }

    Faraday::Bms::init(&mqtt, &discoveryMgr, device, mqttPrefix);
    handler.setBms(Faraday::Bms::client());

    if (relayExpPresent) {
        // The three relay/light inits touch the shared PCF8574 and must never be
        // skipped: block (bounded in practice by the 200 ms handler guard) until
        // the bus is free.
        const bool controlBusLocked = controlBus != nullptr
            && xSemaphoreTake(controlBus, portMAX_DELAY) == pdTRUE;

        if (!ventilationRelay.init(VENTILATION_RELAY_CHANNEL, {
                EDCommon::Relay::withMQTT(&mqtt, mqttPrefix, "faraday", "Ventilation"),
                EDCommon::Relay::withDiscovery(&discoveryMgr, device),
            })) {
            LOGE("setup", "failed to init ventilation relay");
        }

        // Backing relay for the light: no MQTT/discovery options so no duplicate HA
        // switch appears next to the light entity (the light owns the topics).
        if (!lightRelay.init(LIGHT_RELAY_CHANNEL, {})) {
            LOGE("setup", "failed to init light relay");
        }

        // Must come after lightRelay.init(): light.init() re-reads the relay state.
        if (!light.init({
                EDCommon::Light::withMQTT(&mqtt, mqttPrefix, "faraday", "Light"),
                EDCommon::Light::withDiscovery(&discoveryMgr, device),
            })) {
            LOGE("setup", "failed to init light");
        }

        Faraday::Automation::init(&mqtt, &discoveryMgr, device, mqttPrefix);

        if (controlBusLocked) {
            xSemaphoreGive(controlBus);
        }

        handler.setControls(&ventilationRelay, &light, Faraday::Automation::changeover());
    } else {
        LOGW("setup", "relay expander absent - ventilation/light/generator disabled");
    }

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
    // The bus is shared with the web handlers running in the AsyncTCP task:
    // hold the binary semaphore across modbus.loop() and the sensor polls. On
    // contention (take timeout) skip the whole bus-touching block this cycle:
    // sensors retry on their next interval.
    const bool mqttUp = mqtt.isConnected();
    if (modbusBus != nullptr && xSemaphoreTake(modbusBus, pdMS_TO_TICKS(200)) == pdTRUE) {
        modbus.loop();
        // While MQTT is down the reads have no destination; pumping them only
        // produces failed-publish log storms (the pinned ed-utils logger's
        // growing append reallocs and aborts on small heaps). Skip until the
        // broker is back — values resume on the next interval tick / change.
        if (mqttUp) {
            if (supplierEnergy) supplierEnergy->update();
            if (supplierEnergyVoltage) supplierEnergyVoltage->update();
            if (supplierEnergyCurrent) supplierEnergyCurrent->update();
            if (supplierEnergyPower) supplierEnergyPower->update();
            if (supplierEnergyReactivePower) supplierEnergyReactivePower->update();
            if (supplierEnergyFrequency) supplierEnergyFrequency->update();
            if (anenjiMainsVoltageSensor) anenjiMainsVoltageSensor->update();
            if (anenjiMainsCurrentSensor) anenjiMainsCurrentSensor->update();
            if (anenjiMainsPowerSensor) anenjiMainsPowerSensor->update();
            if (anenjiOutputVoltageSensor) anenjiOutputVoltageSensor->update();
            if (anenjiOutputCurrentSensor) anenjiOutputCurrentSensor->update();
            if (anenjiOutputPowerSensor) anenjiOutputPowerSensor->update();
            if (anenjiBatteryVoltageSensor) anenjiBatteryVoltageSensor->update();
            if (anenjiBatteryCurrentSensor) anenjiBatteryCurrentSensor->update();
            if (anenjiBatteryPowerSensor) anenjiBatteryPowerSensor->update();
            if (anenjiPvVoltageSensor) anenjiPvVoltageSensor->update();
            if (anenjiPvCurrentSensor) anenjiPvCurrentSensor->update();
            if (anenjiPvPowerSensor) anenjiPvPowerSensor->update();
            if (anenji != nullptr) anenjiCharging.update();
            if (anenji != nullptr) anenjiWorkModeSensor.update();
            if (anenji != nullptr) anenjiOutputModeSensor.update();
            if (anenji != nullptr) anenjiOutputPrioritySensor.update();
            if (anenji != nullptr) anenjiChargePrioritySensor.update();
        }
        xSemaphoreGive(modbusBus);
    }

    // I2C/MQTT work, not Modbus: drain the relay/light/generator command queues
    // outside the bus guard. Light::Relay::update() also pumps the backing
    // lightRelay; the changeover facade pumps its two backing relays in the same
    // pass. The PCF8574 is shared with the web handlers, so hold controlBus
    // across all updates; on contention skip the block this cycle (retry next).
    // While the broker is down the command queues still fill from HTTP setState
    // (queue-only, never blocks); pumping only retries doomed publishes and
    // produced a per-loop LOGE storm (relay heartbeat) — on reconnect the
    // queues drain and heartbeat resumes.
    if (mqttUp && relayExpPresent && controlBus != nullptr && xSemaphoreTake(controlBus, pdMS_TO_TICKS(200)) == pdTRUE) {
        ventilationRelay.update();
        light.update();
        Faraday::Automation::update();
        xSemaphoreGive(controlBus);
    }

    // BLE/BMS work: no RS-485 or I2C access, so its own block outside both
    // guards. The BLE task owns the radio; this only pumps the RAM-backed
    // sensor objects. BLE-connected but MQTT-offline is the same log-flood
    // class as the RS-485 sensors, so skip the pump until the broker is back.
    Faraday::Bms::update(mqttUp);

    // Cheap, no bus access: derive the electricity state from the last valid
    // L1 voltage reading and publish it retained on change. getValue() only
    // returns a valid pair once the sensor has produced a reading, so nothing
    // is published before the meter has been read at least once.
    if (supplierEnergyVoltage != nullptr) {
        auto voltage = supplierEnergyVoltage->getValue();
        if (voltage.second) {
            const bool firstReading = !electricityStatusEverRead;
            const ElectricityStatus previous = electricityStatus;

            if (firstReading) {
                electricityStatusEverRead = true;
                electricityStatus = voltage.first <= 0.0f
                    ? ElectricityStatus::ON_BATTERY
                    : ElectricityStatus::OK;
            } else if (electricityStatus == ElectricityStatus::OK && voltage.first <= 0.0f) {
                electricityStatus = ElectricityStatus::ON_BATTERY;
            } else if (electricityStatus == ElectricityStatus::ON_BATTERY && voltage.first > 100.0f) {
                electricityStatus = ElectricityStatus::OK;
            }

            if (electricityStatus != previous) {
                LOGI("status", "electricity status: %s (%0.1f V)", electricityStatusText(electricityStatus), voltage.first);
            }

            if (firstReading || electricityStatus != previous) {
                electricityStatusPublishPending = true;
            }
        }
    }

    if (electricityStatusPublishPending && electricityStatusEverRead && mqtt.isConnected()) {
        if (mqtt.publish(configMgr.getData()->mqttStatusTopic, electricityStatusText(electricityStatus), true)) {
            electricityStatusPublishPending = false;
        }
    }

    networkLogger.update();
}
