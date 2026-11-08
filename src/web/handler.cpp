#include <ArduinoJSON.h>
#include <AsyncJson.h>
#include <FS.h>
#include <esp_system.h>
#include <ExtStrings.h>
#include <Json.h>
#include <log/log.h>
#include <wirenboard.h>
#include <cstring>
#include <string.h>
#include "defines.h"
#include "handler.h"
#include "web/reboot_after_response.h"

// Defined in src/main.cpp: binary semaphore serializing the shared Modbus bus
// between the loop task and this (AsyncTCP) task. Arduino.h (pulled in by
// ESPAsyncWebServer.h via handler.h) provides the FreeRTOS types.
extern SemaphoreHandle_t modbusBus;

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

        strcpy(config->mqtt.host, host->value().c_str());
        config->mqtt.port = (uint16_t)mqttPort;
        strcpy(config->mqtt.login, login->value().c_str());
        strcpy(config->mqtt.password, password->value().c_str());
        strcpy(config->mqttHADiscoveryPrefix, haDiscoveryPrefix->value().c_str());
        strcpy(config->mqttStateTopic, stateTopic->value().c_str());
        strcpy(config->mqttCommandTopic, commandTopic->value().c_str());

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

void Handler::sendModbusSettingsState(AsyncWebServerRequest* request, int status)
{
    Config* config = _configMgr->getData();

    AsyncResponseStream* response = request->beginResponseStream("application/json");
    response->setCode(status);

    std::string payload = EDUtils::buildJson([config](JsonObject entity) {
        entity["modbusSpeed"] = config->modbusSpeed;
        entity["map12eAddress"] = config->map12eAddress;
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

            Config* config = _configMgr->getData();
            const uint32_t oldSpeed = config->modbusSpeed;

            config->modbusSpeed = newSpeed;
            config->map12eAddress = static_cast<uint8_t>(address);

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
