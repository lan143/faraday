#include <ArduinoJSON.h>
#include <AsyncJson.h>
#include <FS.h>
#include <esp_system.h>
#include <ExtStrings.h>
#include <Json.h>
#include <log/log.h>
#include <relay/relay.h>
#include <light/light.h>
#include <sensor/anenji_mode_sensor.h>
#include <wirenboard.h>
#include <algorithm>
#include <cstring>
#include <string.h>
#include "bms/bms.h"
#include "bms/bms_client.h"
#include "bms/bms_protocol.h"
#include "defines.h"
#include "handler.h"
#include "web/reboot_after_response.h"

// Defined in src/main.cpp: binary semaphore serializing the shared Modbus bus
// between the loop task and this (AsyncTCP) task. Arduino.h (pulled in by
// ESPAsyncWebServer.h via handler.h) provides the FreeRTOS types.
extern SemaphoreHandle_t modbusBus;

// Defined in src/main.cpp: same pattern for the shared relay PCF8574.
extern SemaphoreHandle_t controlBus;

namespace
{
    // RAII accessor for the shared Modbus bus: bounded 200 ms take, released on
    // every scope exit (return paths included). `locked` reports whether the
    // bus was acquired; callers treat !locked as "meter busy" (no live reading
    // / "meter unreachable" / skip the device-side speed write).
    struct ModbusGuard
    {
        ModbusGuard()
            : locked(modbusBus != nullptr
                  && xSemaphoreTake(modbusBus, pdMS_TO_TICKS(200)) == pdTRUE)
        {
        }

        ~ModbusGuard()
        {
            if (locked) {
                xSemaphoreGive(modbusBus);
            }
        }

        ModbusGuard(const ModbusGuard&) = delete;
        ModbusGuard& operator=(const ModbusGuard&) = delete;

        bool locked;
    };

    // RAII accessor for the shared relay PCF8574. Same bounded take/release
    // semantics as ModbusGuard; !locked means the readback is unavailable and
    // callers report null instead of a possibly torn value.
    struct ControlGuard
    {
        ControlGuard()
            : locked(controlBus != nullptr
                  && xSemaphoreTake(controlBus, pdMS_TO_TICKS(200)) == pdTRUE)
        {
        }

        ~ControlGuard()
        {
            if (locked) {
                xSemaphoreGive(controlBus);
            }
        }

        ControlGuard(const ControlGuard&) = delete;
        ControlGuard& operator=(const ControlGuard&) = delete;

        bool locked;
    };

    void sendLogSettingsState(AsyncWebServerRequest* request, int status)
    {
        const EDUtils::LogConfig config = networkLogger.getConfig();

        AsyncResponseStream* response = request->beginResponseStream("application/json");
        response->setCode(status);

        std::string payload = EDUtils::buildJson([&config](JsonObject entity) {
            entity["host"] = config.host;
            entity["uri"] = config.uri;
            entity["port"] = config.port;
            entity["enabled"] = networkLogger.isEnabled();
        });

        response->write(payload.c_str());
        request->send(response);
    }

    void sendFieldError(AsyncWebServerRequest* request, const char* field, const char* reason)
    {
        std::string message = EDUtils::formatString("%s: %s", field, reason);

        std::string payload = EDUtils::buildJson([&message](JsonObject entity) {
            entity["message"] = message;
        });

        request->send(422, "application/json", payload.c_str());
    }
}

void Handler::init()
{
    _server->serveStatic("/", LittleFS, "/").setDefaultFile("index.html");
    _server->serveStatic("/config.bin", LittleFS, "/config.bin");

    _healthCheck->registerHandlers(_server);

    registerLogSettingsHandlers();
    // Registered before the plain "/api/settings" route below: that matcher is
    // backward-compatible and would otherwise also swallow GET
    // "/api/settings/modbus" and "/api/settings/meter".
    registerModbusSettingsHandlers();
    registerMeterSettingsHandlers();
    registerAnenjiSettingsHandlers();
    registerControlHandlers();
    registerBmsHandlers();

    _networkApi->registerRoutes(*_server);

    _server->on("/api/settings", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            Config* config = _configMgr->getData();

            entity["mqttHost"] = config->mqtt.host;
            entity["mqttPort"] = config->mqtt.port;
            entity["mqttLogin"] = config->mqtt.login;
            entity["mqttPassword"] = config->mqtt.password;
            entity["mqttIsHADiscovery"] = config->mqttIsHADiscovery;
            entity["mqttHADiscoveryPrefix"] = config->mqttHADiscoveryPrefix;
            entity["mqttCommandTopic"] = config->mqttCommandTopic;
            entity["mqttStateTopic"] = config->mqttStateTopic;
            entity["mqttStatusTopic"] = config->mqttStatusTopic;
        });

        response->write(payload.c_str());
        request->send(response);
    });

    _server->on("/api/settings/mqtt", HTTP_POST, [this](AsyncWebServerRequest *request) {
        if (
            !request->hasParam("host", true)
            || !request->hasParam("port", true)
            || !request->hasParam("login", true)
            || !request->hasParam("password", true)
            || !request->hasParam("haDiscoveryPrefix", true)
        ) {
            request->send(422, "application/json", "{\"message\": \"not present mqtt params in request\"}");
            return;
        }

        Config* config = _configMgr->getData();
        const AsyncWebParameter* host = request->getParam("host", true);
        const AsyncWebParameter* port = request->getParam("port", true);
        const AsyncWebParameter* login = request->getParam("login", true);
        const AsyncWebParameter* password = request->getParam("password", true);
        const AsyncWebParameter* haDiscoveryPrefix = request->getParam("haDiscoveryPrefix", true);
        const AsyncWebParameter* ishaDiscoveryEnabled = request->getParam("mqttIsHADiscovery", true);
        const AsyncWebParameter* stateTopic = request->getParam("stateTopic", true);
        const AsyncWebParameter* commandTopic = request->getParam("commandTopic", true);
        // Optional: clients predating the electricity-status topic do not send
        // it; in that case the stored value is left unchanged.
        const AsyncWebParameter* statusTopic = request->hasParam("statusTopic", true)
            ? request->getParam("statusTopic", true)
            : nullptr;

        if (host->value().length() == 0 || host->value().length() > HOST_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT host lenght invalid\"}");
            return;
        }

        int mqttPort;
        if (EDUtils::str2int(&mqttPort, port->value().c_str(), 10) != EDUtils::STR2INT_SUCCESS) {
            request->send(422, "application/json", "{\"message\": \"Incorrect port\"}");
            return;
        }

        if (login->value().length() > MQTT_LOGIN_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT login length invalid\"}");
            return;
        }

        if (password->value().length() > MQTT_PASSWORD_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"MQTT password length invalid\"}");
            return;
        }

        if (haDiscoveryPrefix->value().length() == 0) {
            request->send(422, "application/json", "{\"message\": \"You must specify mqtt topic name\"}");
            return;
        }

        if (haDiscoveryPrefix->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"HA discovery prefix length invalid\"}");
            return;
        }

        if (stateTopic->value().length() == 0 || stateTopic->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"state topic length invalid\"}");
            return;
        }

        if (commandTopic->value().length() == 0 || commandTopic->value().length() > MQTT_TOPIC_LEN-1) {
            request->send(422, "application/json", "{\"message\": \"command topic length invalid\"}");
            return;
        }

        if (statusTopic != nullptr && (statusTopic->value().length() == 0 || statusTopic->value().length() > MQTT_TOPIC_LEN-1)) {
            request->send(422, "application/json", "{\"message\": \"status topic length invalid\"}");
            return;
        }

        strcpy(config->mqtt.host, host->value().c_str());
        config->mqtt.port = (uint16_t)mqttPort;
        strcpy(config->mqtt.login, login->value().c_str());
        strcpy(config->mqtt.password, password->value().c_str());
        strcpy(config->mqttHADiscoveryPrefix, haDiscoveryPrefix->value().c_str());
        strcpy(config->mqttStateTopic, stateTopic->value().c_str());
        strcpy(config->mqttCommandTopic, commandTopic->value().c_str());
        if (statusTopic != nullptr) {
            strcpy(config->mqttStatusTopic, statusTopic->value().c_str());
        }

        if (strcmp(ishaDiscoveryEnabled->value().c_str(), "true") == 0) {
            config->mqttIsHADiscovery = true;
        } else {
            config->mqttIsHADiscovery = false;
        }

        if (!_configMgr->store()) {
            request->send(500, "application/json", "{\"message\": \"failed to save config\"}");
            return;
        }

        request->send(200, "application/json", "{}");
    });

    _server->on("/api/status", HTTP_GET, [this](AsyncWebServerRequest *request) {
        AsyncResponseStream *response = request->beginResponseStream("application/json");

        std::string data = EDUtils::buildJson([this](JsonObject entity) {
            entity[F("freeHeap")] = ESP.getFreeHeap();
            entity[F("uptime")] = esp_timer_get_time() / 1000000;

            esp_reset_reason_t reason = esp_reset_reason();

            switch (reason) {
                case ESP_RST_POWERON:
                    entity[F("lastResetReason")] = "Power-on Reset";
                    break;
                case ESP_RST_EXT:
                    entity[F("lastResetReason")] = "External Reset";
                    break;
                case ESP_RST_SW:
                    entity[F("lastResetReason")] = "Software Reset";
                    break;
                case ESP_RST_PANIC:
                    entity[F("lastResetReason")] = "Panic Reset";
                    break;
                case ESP_RST_INT_WDT:
                    entity[F("lastResetReason")] = "Interrupt Watchdog Reset";
                    break;
                case ESP_RST_TASK_WDT:
                    entity[F("lastResetReason")] = "Task Watchdog Reset";
                    break;
                case ESP_RST_WDT:
                    entity[F("lastResetReason")] = "Other Watchdog Reset";
                    break;
                case ESP_RST_DEEPSLEEP:
                    entity[F("lastResetReason")] = "Wake from Deep Sleep";
                    break;
                case ESP_RST_BROWNOUT:
                    entity[F("lastResetReason")] = "Brownout Reset";
                    break;
                case ESP_RST_SDIO:
                    entity[F("lastResetReason")] = "SDIO Reset";
                    break;
                default:
                    entity[F("lastResetReason")] = "Unknown";
                    break;
            }

            entity[F("fwVersion")] = deviceFWVersion;
        });
        response->print(data.c_str());
        request->send(response);
    });

    _server->on("/api/reboot", HTTP_POST, [this](AsyncWebServerRequest *request) {
        request->send(200, "application/json", "{}");
        RebootAfterResponse::schedule(200);
    });

    // The backup endpoint must be registered before the single-file config
    // endpoint (ed-config README requirement): a plain "/api/config" string
    // matcher defaults to BackwardCompatible (WebServer.cpp:231), i.e. it also
    // matches "/api/config/..." (WebServer.cpp:336); handlers are matched in
    // registration order (_attachHandler, WebServer.cpp:142-151).
    _configBackupHandler.registerHandlers(_server);

    _configFileHandler.registerHandlers(_server);

    _server->begin();
}

void Handler::registerLogSettingsHandlers()
{
    _server->on("/api/log/settings", HTTP_GET, [](AsyncWebServerRequest* request) {
        sendLogSettingsState(request, 200);
    });

    auto* postHandler = new AsyncCallbackJsonWebHandler(
        "/api/log/settings",
        [this](AsyncWebServerRequest* request, JsonVariant& json) {
            if (!json.is<JsonObject>()) {
                request->send(422, "application/json", "{\"message\": \"invalid json\"}");
                return;
            }

            const JsonVariant hostValue = json["host"];
            if (hostValue.isNull() || !hostValue.is<const char*>() || strlen(hostValue.as<const char*>()) == 0) {
                request->send(422, "application/json", "{\"message\": \"host is required\"}");
                return;
            }

            if (strlen(hostValue.as<const char*>()) >= LOG_HOST_LEN) {
                request->send(422, "application/json", "{\"message\": \"host too long\"}");
                return;
            }

            const JsonVariant uriValue = json["uri"];
            if (uriValue.isNull() || !uriValue.is<const char*>() || strlen(uriValue.as<const char*>()) == 0) {
                request->send(422, "application/json", "{\"message\": \"uri is required\"}");
                return;
            }

            if (strlen(uriValue.as<const char*>()) >= LOG_HOST_LEN) {
                request->send(422, "application/json", "{\"message\": \"uri too long\"}");
                return;
            }

            const JsonVariant portValue = json["port"];
            if (!portValue.is<int>() || portValue.as<int>() < 1 || portValue.as<int>() > 65535) {
                request->send(422, "application/json", "{\"message\": \"invalid port\"}");
                return;
            }

            const bool hasEnabled = !json["enabled"].isNull();
            if (hasEnabled && !json["enabled"].is<bool>()) {
                request->send(422, "application/json", "{\"message\": \"invalid enabled\"}");
                return;
            }

            EDUtils::LogConfig config;
            strncpy(config.host, hostValue.as<const char*>(), LOG_HOST_LEN - 1);
            config.host[LOG_HOST_LEN - 1] = '\0';
            strncpy(config.uri, uriValue.as<const char*>(), LOG_HOST_LEN - 1);
            config.uri[LOG_HOST_LEN - 1] = '\0';
            config.port = static_cast<uint16_t>(portValue.as<int>());

            if (!networkLogger.setConfig(config)) {
                request->send(422, "application/json", "{\"message\": \"invalid settings\"}");
                return;
            }

            if (hasEnabled) {
                networkLogger.enable(json["enabled"].as<bool>());
            }

            // "enabled" is deliberately runtime-only: it follows network connectivity.
            Config* stored = _configMgr->getData();
            strncpy(stored->log.host, config.host, LOG_HOST_LEN - 1);
            stored->log.host[LOG_HOST_LEN - 1] = '\0';
            strncpy(stored->log.uri, config.uri, LOG_HOST_LEN - 1);
            stored->log.uri[LOG_HOST_LEN - 1] = '\0';
            stored->log.port = config.port;

            if (!_configMgr->store()) {
                request->send(500, "application/json", "{\"message\": \"failed to store settings\"}");
                return;
            }

            sendLogSettingsState(request, 200);
        }
    );
    postHandler->setMethod(HTTP_POST);
    postHandler->setMaxContentLength(1024);
    _server->addHandler(postHandler);
}

void Handler::setMap12E(EDWB::MAP12E* map12e)
{
    _map12e = map12e;
}

void Handler::setAnenji(EDWB::ANENJI4200* anenji)
{
    _anenji = anenji;
}

void Handler::setControls(EDCommon::Relay::Relay* ventilation, EDCommon::Light::Light* light, EDCommon::Relay::Relay* generator)
{
    _ventilationRelay = ventilation;
    _light = light;
    _generatorSwitch = generator;
}

void Handler::setBms(Faraday::Bms::Client* client)
{
    _bms = client;
}

void Handler::sendModbusSettingsState(AsyncWebServerRequest* request, int status)
{
    Config* config = _configMgr->getData();

    AsyncResponseStream* response = request->beginResponseStream("application/json");
    response->setCode(status);

    std::string payload = EDUtils::buildJson([config](JsonObject entity) {
        entity["modbusSpeed"] = config->modbusSpeed;
        entity["map12eAddress"] = config->map12eAddress;
        entity["anenjiAddress"] = config->anenjiAddress;
    });

    response->write(payload.c_str());
    request->send(response);
}

void Handler::registerModbusSettingsHandlers()
{
    _server->on("/api/settings/modbus", HTTP_GET, [this](AsyncWebServerRequest* request) {
        sendModbusSettingsState(request, 200);
    });

    auto* postHandler = new AsyncCallbackJsonWebHandler(
        "/api/settings/modbus",
        [this](AsyncWebServerRequest* request, JsonVariant& json) {
            if (!json.is<JsonObject>()) {
                request->send(422, "application/json", "{\"message\": \"invalid json\"}");
                return;
            }

            const JsonVariant speedValue = json["modbusSpeed"];
            if (speedValue.isNull()) {
                sendFieldError(request, "modbusSpeed", "required");
                return;
            }

            if (!speedValue.is<unsigned int>()) {
                sendFieldError(request, "modbusSpeed", "invalid value");
                return;
            }

            const uint32_t newSpeed = speedValue.as<uint32_t>();
            switch (newSpeed) {
                case 9600:
                case 19200:
                case 38400:
                case 57600:
                case 115200:
                    break;
                default:
                    sendFieldError(request, "modbusSpeed", "invalid value");
                    return;
            }

            const JsonVariant addressValue = json["map12eAddress"];
            if (addressValue.isNull()) {
                sendFieldError(request, "map12eAddress", "required");
                return;
            }

            if (!addressValue.is<unsigned int>()) {
                sendFieldError(request, "map12eAddress", "invalid value");
                return;
            }

            const uint32_t address = addressValue.as<uint32_t>();
            if (address < 1 || address > 247) {
                sendFieldError(request, "map12eAddress", "invalid value");
                return;
            }

            const JsonVariant anenjiAddressValue = json["anenjiAddress"];
            if (anenjiAddressValue.isNull()) {
                sendFieldError(request, "anenjiAddress", "required");
                return;
            }

            if (!anenjiAddressValue.is<unsigned int>()) {
                sendFieldError(request, "anenjiAddress", "invalid value");
                return;
            }

            const uint32_t anenjiAddress = anenjiAddressValue.as<uint32_t>();
            if (anenjiAddress > 247) {
                sendFieldError(request, "anenjiAddress", "invalid value");
                return;
            }

            Config* config = _configMgr->getData();
            const uint32_t oldSpeed = config->modbusSpeed;

            config->modbusSpeed = newSpeed;
            config->map12eAddress = static_cast<uint8_t>(address);
            // 0 disables the inverter; any other value is its Modbus slave
            // address. Like map12eAddress, it applies after a reboot.
            config->anenjiAddress = static_cast<uint8_t>(anenjiAddress);

            if (!_configMgr->store()) {
                request->send(500, "application/json", "{\"message\": \"failed to store config\"}");
                return;
            }

            // The address change only takes effect on the next boot. A speed
            // change is applied live: write the device register while still
            // talking on the OLD local baud, then switch the local port.
            if (newSpeed != oldSpeed) {
                // Guard covers BOTH the device write and the local UART switch,
                // so the loop task cannot transact in the window where the
                // meter is already at the new baud while Serial2 is not.
                ModbusGuard bus;
                if (!bus.locked) {
                    // Bus busy: skip the device-side changeSpeed (its register
                    // write would race an in-flight transaction) but STILL
                    // switch the local UART to match the persisted config. The
                    // meter keeps the OLD baud until the write is re-applied
                    // (a reboot alone does not re-sync: nothing writes the
                    // speed register at boot), so the device side may need a
                    // later sync.
                    LOGW("modbus", "modbus bus busy, map12e speed change to %u not applied", (unsigned)newSpeed);
                } else if (_modbus == nullptr || !_modbus->changeSpeed(newSpeed)) {
                    LOGW("modbus", "failed to change map12e speed to %u", (unsigned)newSpeed);
                }

                Serial2.begin(newSpeed, SERIAL_8N1, RS485_RX, RS485_TX);
            }

            sendModbusSettingsState(request, 200);
        }
    );
    postHandler->setMethod(HTTP_POST);
    postHandler->setMaxContentLength(1024);
    _server->addHandler(postHandler);
}

void Handler::sendMeterSettingsState(AsyncWebServerRequest* request, int status)
{
    Config* config = _configMgr->getData();

    bool hasMeterEnergy = false;
    float_t meterEnergy = 0.0f;
    if (_map12e != nullptr) {
        // Only the device read is guarded; JSON serialization stays outside.
        // On bus contention the guard is not locked and the GET still answers
        // 200, with meterEnergy/supplierEnergy reported as null.
        ModbusGuard bus;
        if (bus.locked) {
            const auto energy = _map12e->getForwardActiveEnergy(1, EDWB::MAP12E_PHASE_L1);
            if (energy.second) {
                hasMeterEnergy = true;
                meterEnergy = energy.first;
            }
        }
    }

    AsyncResponseStream* response = request->beginResponseStream("application/json");
    response->setCode(status);

    std::string payload = EDUtils::buildJson([config, hasMeterEnergy, meterEnergy](JsonObject entity) {
        entity["ct1Ratio"] = config->map12eCt1Ratio;
        entity["energySyncValue"] = config->energySyncValue;
        entity["energyMeterBase"] = config->energyMeterBase;

        if (hasMeterEnergy) {
            entity["meterEnergy"] = meterEnergy;
            entity["supplierEnergy"] = config->energySyncValue + (meterEnergy - config->energyMeterBase);
        } else {
            entity["meterEnergy"] = nullptr;
            entity["supplierEnergy"] = nullptr;
        }
    });

    response->write(payload.c_str());
    request->send(response);
}

void Handler::registerMeterSettingsHandlers()
{
    _server->on("/api/settings/meter", HTTP_GET, [this](AsyncWebServerRequest* request) {
        sendMeterSettingsState(request, 200);
    });

    auto* postHandler = new AsyncCallbackJsonWebHandler(
        "/api/settings/meter",
        [this](AsyncWebServerRequest* request, JsonVariant& json) {
            if (!json.is<JsonObject>()) {
                request->send(422, "application/json", "{\"message\": \"invalid json\"}");
                return;
            }

            const JsonVariant ratioValue = json["ct1Ratio"];
            const JsonVariant syncValue = json["energySyncValue"];

            const bool hasRatio = !ratioValue.isNull();
            const bool hasSync = !syncValue.isNull();

            if (!hasRatio && !hasSync) {
                request->send(422, "application/json", "{\"message\": \"ct1Ratio or energySyncValue required\"}");
                return;
            }

            if (hasRatio) {
                if (!ratioValue.is<unsigned int>() || ratioValue.as<uint32_t>() > 65535) {
                    sendFieldError(request, "ct1Ratio", "invalid value");
                    return;
                }
            }

            if (hasSync) {
                // is<float>() accepts integers and floats in ArduinoJson.
                if (!syncValue.is<float>() || syncValue.as<float>() < 0.0f) {
                    sendFieldError(request, "energySyncValue", "invalid value");
                    return;
                }
            }

            Config* config = _configMgr->getData();

            // Device operations happen before any store: the meter is the
            // source of truth for the base, so a failed op must abort without
            // persisting a half-applied sync.
            if (hasRatio) {
                const uint16_t ratio = static_cast<uint16_t>(ratioValue.as<uint32_t>());
                if (ratio != config->map12eCt1Ratio) {
                    // Guard scope (a): CT-ratio device write only. A busy bus
                    // (!locked) behaves exactly like an unreachable meter, and
                    // the RAII guard releases the semaphore on the return.
                    ModbusGuard bus;
                    if (!bus.locked
                        || _map12e == nullptr
                        || !_map12e->setCTTransformRatio(1, EDWB::MAP12E_PHASE_L1, ratio)) {
                        request->send(500, "application/json", "{\"message\": \"meter unreachable\"}");
                        return;
                    }
                }
            }

            float_t newBase = config->energyMeterBase;
            if (hasSync) {
                // Guard scope (b): the energy read used for the sync base,
                // separate from the CT-ratio scope above. A busy bus takes the
                // same 500 "meter unreachable" path; the guard releases the
                // semaphore on every return below.
                ModbusGuard bus;
                if (!bus.locked || _map12e == nullptr) {
                    request->send(500, "application/json", "{\"message\": \"meter unreachable\"}");
                    return;
                }

                const auto energy = _map12e->getForwardActiveEnergy(1, EDWB::MAP12E_PHASE_L1);
                if (!energy.second) {
                    request->send(500, "application/json", "{\"message\": \"meter unreachable\"}");
                    return;
                }

                newBase = energy.first;
            }

            if (hasRatio) {
                config->map12eCt1Ratio = static_cast<uint16_t>(ratioValue.as<uint32_t>());
            }

            if (hasSync) {
                config->energySyncValue = syncValue.as<float>();
                config->energyMeterBase = newBase;
            }

            if (!_configMgr->store()) {
                request->send(500, "application/json", "{\"message\": \"failed to store config\"}");
                return;
            }

            sendMeterSettingsState(request, 200);
        }
    );
    postHandler->setMethod(HTTP_POST);
    postHandler->setMaxContentLength(1024);
    _server->addHandler(postHandler);
}

// Response contract: {enabled, mainsVoltage, mainsCurrent, mainsPower,
// outputVoltage, outputCurrent, outputPower, batteryVoltage, batteryCurrent,
// batteryPower, batteryCharging, pvVoltage, pvCurrent, pvPower,
// workMode, outputMode, outputPriority, chargePriority}. Every reading is null
// when the inverter is disabled, the bus guard times out or the probe read
// fails; the four mode fields are text labels (string) or null.
void Handler::sendAnenjiSettingsState(AsyncWebServerRequest* request, int status)
{
    Config* config = _configMgr->getData();
    const bool enabled = config->anenjiAddress > 0 && _anenji != nullptr;

    std::pair<bool, float_t> mainsVoltage = {false, 0.0f};
    std::pair<bool, float_t> mainsCurrent = {false, 0.0f};
    std::pair<bool, float_t> mainsPower = {false, 0.0f};
    std::pair<bool, float_t> outputVoltage = {false, 0.0f};
    std::pair<bool, float_t> outputCurrent = {false, 0.0f};
    std::pair<bool, float_t> outputPower = {false, 0.0f};
    std::pair<bool, float_t> batteryVoltage = {false, 0.0f};
    std::pair<bool, float_t> batteryCurrent = {false, 0.0f};
    std::pair<bool, float_t> batteryPower = {false, 0.0f};
    std::pair<bool, float_t> pvVoltage = {false, 0.0f};
    std::pair<bool, float_t> pvCurrent = {false, 0.0f};
    std::pair<bool, float_t> pvPower = {false, 0.0f};
    std::pair<bool, bool> batteryCharging = {false, false};
    std::pair<bool, uint16_t> workMode = {false, 0};
    std::pair<bool, uint16_t> outputMode = {false, 0};
    std::pair<bool, uint16_t> outputPriority = {false, 0};
    std::pair<bool, uint16_t> chargePriority = {false, 0};

    // Only the device reads are guarded; JSON serialization stays outside.
    // A guard miss or a disabled inverter leaves every reading null.
    if (enabled) {
        ModbusGuard bus;
        if (bus.locked) {
            // Probe with the mains-voltage read first: if the inverter does not
            // answer, skip the remaining reads (each one a ~timeout on a dead
            // bus) and leave every reading null.
            const auto mainsVoltageRead = _anenji->getMainsVoltage();
            if (mainsVoltageRead.second) {
                mainsVoltage = {true, mainsVoltageRead.first};

                const auto mainsPowerRead = _anenji->getMainsPower();
                if (mainsPowerRead.second) {
                    mainsPower = {true, static_cast<float_t>(mainsPowerRead.first)};
                }

                // No mains-current register: derive from power/voltage (PF = 1).
                if (mainsPowerRead.second && mainsVoltageRead.first >= 0.5f) {
                    mainsCurrent = {true, static_cast<float_t>(mainsPowerRead.first) / mainsVoltageRead.first};
                }

                const auto outputVoltageRead = _anenji->getOutputVoltage();
                if (outputVoltageRead.second) {
                    outputVoltage = {true, outputVoltageRead.first};
                }

                const auto outputCurrentRead = _anenji->getOutputCurrent();
                if (outputCurrentRead.second) {
                    outputCurrent = {true, outputCurrentRead.first};
                }

                const auto outputPowerRead = _anenji->getOutputActivePower();
                if (outputPowerRead.second) {
                    outputPower = {true, static_cast<float_t>(outputPowerRead.first)};
                }

                const auto batteryVoltageRead = _anenji->getBatteryVoltage();
                if (batteryVoltageRead.second) {
                    batteryVoltage = {true, batteryVoltageRead.first};
                }

                const auto batteryCurrentRead = _anenji->getBatteryCurrent();
                if (batteryCurrentRead.second) {
                    batteryCurrent = {true, batteryCurrentRead.first};
                }

                const auto batteryPowerRead = _anenji->getBatteryPower();
                if (batteryPowerRead.second) {
                    batteryPower = {true, static_cast<float_t>(batteryPowerRead.first)};
                }

                const auto pvVoltageRead = _anenji->getPvVoltage();
                if (pvVoltageRead.second) {
                    pvVoltage = {true, pvVoltageRead.first};
                }

                const auto pvCurrentRead = _anenji->getPvCurrent();
                if (pvCurrentRead.second) {
                    pvCurrent = {true, pvCurrentRead.first};
                }

                const auto pvPowerRead = _anenji->getPvPower();
                if (pvPowerRead.second) {
                    pvPower = {true, static_cast<float_t>(pvPowerRead.first)};
                }

                const auto batteryChargingRead = _anenji->getBatteryCurrentFiltered();
                if (batteryChargingRead.second) {
                    if (batteryChargingRead.first > 0.0f) {
                        batteryCharging = {true, true};
                    } else if (batteryChargingRead.first < 0.0f) {
                        batteryCharging = {true, false};
                    }
                }

                const auto workModeRead = _anenji->getWorkMode();
                if (workModeRead.second) {
                    workMode = {true, static_cast<uint16_t>(workModeRead.first)};
                }

                const auto outputModeRead = _anenji->getOutputMode();
                if (outputModeRead.second) {
                    outputMode = {true, static_cast<uint16_t>(outputModeRead.first)};
                }

                const auto outputPriorityRead = _anenji->getOutputPriority();
                if (outputPriorityRead.second) {
                    outputPriority = {true, static_cast<uint16_t>(outputPriorityRead.first)};
                }

                const auto chargePriorityRead = _anenji->getBatteryChargePriority();
                if (chargePriorityRead.second) {
                    chargePriority = {true, static_cast<uint16_t>(chargePriorityRead.first)};
                }
            }
        }
    }

    AsyncResponseStream* response = request->beginResponseStream("application/json");
    response->setCode(status);

    std::string payload = EDUtils::buildJson([&](JsonObject entity) {
        entity["enabled"] = enabled;

        auto putFloat = [&entity](const char* key, const std::pair<bool, float_t>& value) {
            if (value.first) {
                entity[key] = value.second;
            } else {
                entity[key] = nullptr;
            }
        };

        putFloat("mainsVoltage", mainsVoltage);
        putFloat("mainsCurrent", mainsCurrent);
        putFloat("mainsPower", mainsPower);
        putFloat("outputVoltage", outputVoltage);
        putFloat("outputCurrent", outputCurrent);
        putFloat("outputPower", outputPower);
        putFloat("batteryVoltage", batteryVoltage);
        putFloat("batteryCurrent", batteryCurrent);
        putFloat("batteryPower", batteryPower);

        if (batteryCharging.first) {
            entity["batteryCharging"] = batteryCharging.second;
        } else {
            entity["batteryCharging"] = nullptr;
        }

        putFloat("pvVoltage", pvVoltage);
        putFloat("pvCurrent", pvCurrent);
        putFloat("pvPower", pvPower);

        auto putMode = [&entity](
                           const char* key,
                           const std::pair<bool, uint16_t>& value,
                           Faraday::AnenjiModeSensor::Kind kind
                       ) {
            if (value.first) {
                entity[key] = Faraday::AnenjiModeSensor::label(kind, value.second);
            } else {
                entity[key] = nullptr;
            }
        };

        putMode("workMode", workMode, Faraday::AnenjiModeSensor::Kind::WorkMode);
        putMode("outputMode", outputMode, Faraday::AnenjiModeSensor::Kind::OutputMode);
        putMode("outputPriority", outputPriority, Faraday::AnenjiModeSensor::Kind::OutputPriority);
        putMode("chargePriority", chargePriority, Faraday::AnenjiModeSensor::Kind::ChargePriority);
    });

    response->write(payload.c_str());
    request->send(response);
}

void Handler::registerAnenjiSettingsHandlers()
{
    _server->on("/api/settings/anenji", HTTP_GET, [this](AsyncWebServerRequest* request) {
        sendAnenjiSettingsState(request, 200);
    });
}

void Handler::sendControlsState(
    AsyncWebServerRequest* request,
    int status,
    std::pair<bool, bool> ventilation,
    std::pair<bool, bool> light,
    std::pair<bool, bool> generator
)
{
    AsyncResponseStream* response = request->beginResponseStream("application/json");
    response->setCode(status);

    std::string payload = EDUtils::buildJson([ventilation, light, generator](JsonObject entity) {
        if (ventilation.first) {
            entity["ventilation"]["enabled"] = ventilation.second;
        } else {
            entity["ventilation"]["enabled"] = nullptr;
        }

        if (light.first) {
            entity["light"]["enabled"] = light.second;
        } else {
            entity["light"]["enabled"] = nullptr;
        }

        if (generator.first) {
            entity["generator"]["enabled"] = generator.second;
        } else {
            entity["generator"]["enabled"] = nullptr;
        }
    });

    response->write(payload.c_str());
    request->send(response);
}

void Handler::registerControlHandlers()
{
    _server->on("/api/controls", HTTP_GET, [this](AsyncWebServerRequest* request) {
        if (_ventilationRelay == nullptr || _light == nullptr || _generatorSwitch == nullptr) {
            request->send(500, "application/json", "{\"message\": \"controls not initialized\"}");
            return;
        }

        // A failed take leaves the readback unavailable; report null rather
        // than a possibly torn value (same convention as the meter readings).
        // The guard is scoped to the reads only, not the JSON serialization.
        std::pair<bool, bool> ventilationState = {false, false};
        std::pair<bool, bool> lightState = {false, false};
        std::pair<bool, bool> generatorState = {false, false};

        {
            ControlGuard bus;
            if (bus.locked) {
                // The second pair member reports read validity; an invalid
                // read is reported as disabled rather than failing the request.
                const auto ventilation = _ventilationRelay->isEnabled();
                const auto light = _light->isEnabled();
                const auto generator = _generatorSwitch->isEnabled();

                ventilationState = {true, ventilation.second && ventilation.first};
                lightState = {true, light.second && light.first};
                generatorState = {true, generator.second && generator.first};
            }
        }

        sendControlsState(request, 200, ventilationState, lightState, generatorState);
    });

    auto* postHandler = new AsyncCallbackJsonWebHandler(
        "/api/controls",
        [this](AsyncWebServerRequest* request, JsonVariant& json) {
            if (!json.is<JsonObject>()) {
                request->send(422, "application/json", "{\"message\": \"invalid json\"}");
                return;
            }

            if (_ventilationRelay == nullptr || _light == nullptr || _generatorSwitch == nullptr) {
                request->send(500, "application/json", "{\"message\": \"controls not initialized\"}");
                return;
            }

            const JsonVariant ventilationValue = json["ventilation"];
            const JsonVariant lightValue = json["light"];
            const JsonVariant generatorValue = json["generator"];

            const bool hasVentilation = !ventilationValue.isNull();
            const bool hasLight = !lightValue.isNull();
            const bool hasGenerator = !generatorValue.isNull();

            if (!hasVentilation && !hasLight && !hasGenerator) {
                sendFieldError(request, "ventilation or light or generator", "required");
                return;
            }

            if (hasVentilation && !ventilationValue.is<bool>()) {
                sendFieldError(request, "ventilation", "invalid value");
                return;
            }

            if (hasLight && !lightValue.is<bool>()) {
                sendFieldError(request, "light", "invalid value");
                return;
            }

            if (hasGenerator && !generatorValue.is<bool>()) {
                sendFieldError(request, "generator", "invalid value");
                return;
            }

            // setState() only enqueues, so command delivery never depends on
            // the guard; only the untouched-field readback can degrade to null.
            bool ventilationEnabled = false;
            bool ventilationEnqueued = true;
            if (hasVentilation) {
                ventilationEnabled = ventilationValue.as<bool>();
                ventilationEnqueued = _ventilationRelay->setState(ventilationEnabled);
            }

            bool lightEnabled = false;
            bool lightEnqueued = true;
            if (hasLight) {
                lightEnabled = lightValue.as<bool>();
                lightEnqueued = _light->setState(lightEnabled);
            }

            bool generatorEnabled = false;
            bool generatorEnqueued = true;
            if (hasGenerator) {
                generatorEnabled = generatorValue.as<bool>();
                generatorEnqueued = _generatorSwitch->setState(generatorEnabled);
            }

            // A full internal queue drops the command silently: report busy
            // instead of echoing a 200 for a command that never landed.
            if (!ventilationEnqueued || !lightEnqueued || !generatorEnqueued) {
                request->send(500, "application/json", "{\"message\": \"controls busy\"}");
                return;
            }

            std::pair<bool, bool> ventilationState = {true, ventilationEnabled};
            std::pair<bool, bool> lightState = {true, lightEnabled};
            std::pair<bool, bool> generatorState = {true, generatorEnabled};

            if (!hasVentilation || !hasLight || !hasGenerator) {
                // One guard instance shared by all readbacks; only acquired
                // when an untouched field actually needs one.
                ControlGuard bus;

                if (!hasVentilation) {
                    ventilationState = bus.locked
                        ? std::make_pair(true, _ventilationRelay->isEnabled().first)
                        : std::make_pair(false, false);
                }

                if (!hasLight) {
                    lightState = bus.locked
                        ? std::make_pair(true, _light->isEnabled().first)
                        : std::make_pair(false, false);
                }

                if (!hasGenerator) {
                    generatorState = bus.locked
                        ? std::make_pair(true, _generatorSwitch->isEnabled().first)
                        : std::make_pair(false, false);
                }
            }

            sendControlsState(request, 200, ventilationState, lightState, generatorState);
        }
    );
    postHandler->setMethod(HTTP_POST);
    postHandler->setMaxContentLength(1024);
    _server->addHandler(postHandler);
}

// Response contract: {enabled, bleUnavailable, mac, cellCount, connected,
// lastUpdateMs, reportedCellCount, status, errors, deviceModel, soc,
// totalVoltage, current, power, capacityRemaining, nominalCapacity, cycles,
// swVersion, mosfetBitmask, protectionBitmask, balancerBitmask,
// minCellVoltage, maxCellVoltage, avgCellVoltage, deltaCellVoltage,
// temperatures, cells, errorCounts}. All fields come from one snapshot copy.
void Handler::sendBmsState(AsyncWebServerRequest* request, int status)
{
    char mac[18] = {0};
    bool hasAddress = false;
    uint8_t configuredCells = 0;
    bool bleUnavailable = false;
    Faraday::Bms::BmsSnapshot snapshot;

    if (_bms != nullptr) {
        hasAddress = _bms->address(mac, sizeof(mac));
        configuredCells = _bms->cellCount();
        bleUnavailable = hasAddress && _bms->bleUnavailable();
        _bms->copySnapshot(snapshot);
    }

    const bool enabled = _bms != nullptr && hasAddress;
    const bool hasBasic = snapshot.hasBasicInfo;
    const bool hasCellStats = hasBasic && snapshot.hasCells && snapshot.cells.count > 0;
    const Faraday::Bms::BmsBasicInfo& basic = snapshot.basicInfo;

    char statusBuf[128] = {0};
    char errorsBuf[128] = {0};
    if (hasBasic) {
        Faraday::Bms::Protocol::formatOperationLabels(basic.mosfetBitmask, statusBuf, sizeof(statusBuf));
        Faraday::Bms::Protocol::formatProtectionLabels(basic.protectionBitmask, errorsBuf, sizeof(errorsBuf));
    }

    AsyncResponseStream* response = request->beginResponseStream("application/json");
    response->setCode(status);

    std::string payload = EDUtils::buildJson([&](JsonObject entity) {
        entity["enabled"] = enabled;
        entity["bleUnavailable"] = bleUnavailable;

        if (hasAddress) {
            entity["mac"] = mac;
        } else {
            entity["mac"] = "";
        }

        entity["cellCount"] = configuredCells;
        entity["connected"] = snapshot.connected;

        if (hasBasic) {
            entity["lastUpdateMs"] = snapshot.lastBasicInfoAtMs;
            entity["reportedCellCount"] = basic.reportedCellCount;
        } else {
            entity["lastUpdateMs"] = nullptr;
            entity["reportedCellCount"] = nullptr;
        }

        if (hasBasic) {
            entity["status"] = statusBuf;
            entity["errors"] = errorsBuf;
        } else {
            entity["status"] = nullptr;
            entity["errors"] = nullptr;
        }

        if (snapshot.hasDeviceModel) {
            entity["deviceModel"] = snapshot.deviceModel;
        } else {
            entity["deviceModel"] = nullptr;
        }

        auto putFloat = [&entity](const char* key, bool valid, float value) {
            if (valid) {
                entity[key] = value;
            } else {
                entity[key] = nullptr;
            }
        };

        putFloat("soc", hasBasic, basic.soc);
        putFloat("totalVoltage", hasBasic, basic.totalVoltage);
        putFloat("current", hasBasic, basic.current);
        putFloat("power", hasBasic, basic.power);
        putFloat("capacityRemaining", hasBasic, basic.capacityRemaining);
        putFloat("nominalCapacity", hasBasic, basic.nominalCapacity);

        if (hasBasic) {
            entity["cycles"] = basic.cycles;
        } else {
            entity["cycles"] = nullptr;
        }

        putFloat("swVersion", hasBasic, basic.swVersion);

        if (hasBasic) {
            entity["mosfetBitmask"] = basic.mosfetBitmask;
            entity["protectionBitmask"] = basic.protectionBitmask;
            entity["balancerBitmask"] = basic.balancerBitmask;
        } else {
            entity["mosfetBitmask"] = nullptr;
            entity["protectionBitmask"] = nullptr;
            entity["balancerBitmask"] = nullptr;
        }

        putFloat("minCellVoltage", hasCellStats, basic.minCellVoltage);
        putFloat("maxCellVoltage", hasCellStats, basic.maxCellVoltage);
        putFloat("avgCellVoltage", hasCellStats, basic.avgCellVoltage);
        putFloat("deltaCellVoltage", hasCellStats, basic.deltaCellVoltage);

        JsonArray temperatures = entity["temperatures"].to<JsonArray>();
        if (hasBasic) {
            const uint8_t count = std::min<uint8_t>(basic.temperatureCount, 6);
            for (uint8_t i = 0; i < count; ++i) {
                temperatures.add(basic.temperatures[i]);
            }
        }

        JsonArray cells = entity["cells"].to<JsonArray>();
        for (uint8_t i = 0; i < configuredCells; ++i) {
            if (snapshot.hasCells && i < snapshot.cells.count) {
                cells.add(snapshot.cells.volts[i]);
            } else {
                cells.add(nullptr);
            }
        }

        if (!snapshot.hasErrorCounts) {
            entity["errorCounts"] = nullptr;
        } else {
            JsonObject counts = entity["errorCounts"].to<JsonObject>();
            counts["shortCircuit"] = snapshot.errorCounts.shortCircuit;
            counts["chargeOvercurrent"] = snapshot.errorCounts.chargeOvercurrent;
            counts["dischargeOvercurrent"] = snapshot.errorCounts.dischargeOvercurrent;
            counts["cellOvervoltage"] = snapshot.errorCounts.cellOvervoltage;
            counts["cellUndervoltage"] = snapshot.errorCounts.cellUndervoltage;
            counts["chargeOvertemperature"] = snapshot.errorCounts.chargeOvertemperature;
            counts["chargeUndertemperature"] = snapshot.errorCounts.chargeUndertemperature;
            counts["dischargeOvertemperature"] = snapshot.errorCounts.dischargeOvertemperature;
            counts["dischargeUndertemperature"] = snapshot.errorCounts.dischargeUndertemperature;
            counts["batteryOvervoltage"] = snapshot.errorCounts.batteryOvervoltage;
            counts["batteryUndervoltage"] = snapshot.errorCounts.batteryUndervoltage;
        }
    });

    response->write(payload.c_str());
    request->send(response);
}

void Handler::registerBmsHandlers()
{
    // Longer paths first: the plain "/api/bms" matcher below is
    // backward-compatible and would otherwise swallow these siblings (same
    // rule as the backup/config pair).
    _server->on("/api/bms/scan/start", HTTP_POST, [this](AsyncWebServerRequest* request) {
        if (_bms == nullptr) {
            request->send(500, "application/json", "{\"message\": \"bms not initialized\"}");
            return;
        }

        if (_bms->isScanning()) {
            request->send(422, "application/json", "{\"message\": \"scan already running\"}");
            return;
        }

        _bms->requestScan();
        request->send(200, "application/json", "{}");
    });

    _server->on("/api/bms/scan/status", HTTP_GET, [this](AsyncWebServerRequest* request) {
        if (_bms == nullptr) {
            request->send(500, "application/json", "{\"message\": \"bms not initialized\"}");
            return;
        }

        AsyncResponseStream* response = request->beginResponseStream("application/json");

        std::string payload = EDUtils::buildJson([this](JsonObject entity) {
            entity["running"] = _bms->isScanning();
            entity["generation"] = _bms->scanGeneration();

            Faraday::Bms::BmsScanResult results[BMS_MAX_SCAN_RESULTS];
            const uint16_t count = _bms->scanResults(results, BMS_MAX_SCAN_RESULTS);
            JsonArray devices = entity["devices"].to<JsonArray>();
            for (uint16_t i = 0; i < count; ++i) {
                JsonObject device = devices.add<JsonObject>();
                device["mac"] = results[i].mac;
                device["name"] = results[i].name;
                device["rssi"] = results[i].rssi;
            }
        });

        response->write(payload.c_str());
        request->send(response);
    });

    auto* postHandler = new AsyncCallbackJsonWebHandler(
        "/api/bms/settings",
        [this](AsyncWebServerRequest* request, JsonVariant& json) {
            if (!json.is<JsonObject>()) {
                request->send(422, "application/json", "{\"message\": \"invalid json\"}");
                return;
            }

            if (_bms == nullptr) {
                request->send(500, "application/json", "{\"message\": \"bms not initialized\"}");
                return;
            }

            const JsonVariant macValue = json["mac"];
            if (macValue.isNull()) {
                sendFieldError(request, "mac", "required");
                return;
            }

            if (!macValue.is<const char*>()) {
                sendFieldError(request, "mac", "invalid value");
                return;
            }

            const JsonVariant cellCountValue = json["cellCount"];
            if (cellCountValue.isNull()) {
                sendFieldError(request, "cellCount", "required");
                return;
            }

            if (!cellCountValue.is<int>()) {
                sendFieldError(request, "cellCount", "invalid value");
                return;
            }

            const int cellCount = cellCountValue.as<int>();
            if (cellCount < 1 || cellCount > BMS_MAX_CELLS) {
                sendFieldError(request, "cellCount", "invalid value");
                return;
            }

            // Empty MAC disables the BMS; anything else must be a full,
            // normalizable "AA:BB:CC:DD:EE:FF" address.
            char normalizedMac[18] = {0};
            const char* macInput = macValue.as<const char*>();
            if (macInput[0] != '\0'
                && !Faraday::Bms::validateMacAddress(macInput, normalizedMac, sizeof(normalizedMac))) {
                sendFieldError(request, "mac", "invalid value");
                return;
            }

            Config* config = _configMgr->getData();
            snprintf(config->bmsMacAddress, sizeof(config->bmsMacAddress), "%s", normalizedMac);
            config->bmsCellCount = static_cast<uint8_t>(cellCount);

            if (!_configMgr->store()) {
                request->send(500, "application/json", "{\"message\": \"failed to store config\"}");
                return;
            }

            // Live-apply so polling follows the new device immediately. MQTT/HA
            // entities stay fixed at boot (the UI shows a reboot hint).
            _bms->setAddress(normalizedMac[0] != '\0' ? normalizedMac : "");
            _bms->setCellCount(static_cast<uint8_t>(cellCount));

            sendBmsState(request, 200);
        }
    );
    postHandler->setMethod(HTTP_POST);
    postHandler->setMaxContentLength(1024);
    _server->addHandler(postHandler);

    _server->on("/api/bms", HTTP_GET, [this](AsyncWebServerRequest* request) {
        if (_bms == nullptr) {
            request->send(500, "application/json", "{\"message\": \"bms not initialized\"}");
            return;
        }

        sendBmsState(request, 200);
    });
}
