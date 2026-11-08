#pragma once

#ifdef ESP32
    #include <AsyncTCP.h>
#elif defined(ESP8266)
    #include <ESPAsyncTCP.h>
#endif

#include <LittleFS.h>
#include <ESPAsyncWebServer.h>
#include <utility>
#include <backup/config_backup_handler.hpp>
#include <backup/config_file_handler.hpp>
#include <data_mgr.h>
#include <healthcheck.h>
#include <network/network_api.h>

#include "config.h"
#include "web/backup_specs.h"

namespace EDWB
{
    class WirenBoard;
    class MAP12E;
}

namespace EDCommon
{
    namespace Relay
    {
        class Relay;
    }

    namespace Light
    {
        class Light;
    }
}

class Handler {
public:
    Handler(
        EDConfig::DataMgr<Config>* configMgr,
        EDNetwork::NetworkApi* networkApi,
        EDHealthCheck::HealthCheck* healthCheck,
        EDWB::WirenBoard* modbus
    ) : _configMgr(configMgr), _networkApi(networkApi),
        _healthCheck(healthCheck), _modbus(modbus),
        _configFileHandler(BackupSpecs::kConfigFileHandlerConfig),
        _configBackupHandler(BackupSpecs::kBackupHandlerConfig) {
        _server = new AsyncWebServer(80);
    }

    void init();
    void setMap12E(EDWB::MAP12E* map12e);
    void setControls(EDCommon::Relay::Relay* ventilation, EDCommon::Light::Light* light);

private:
    void registerLogSettingsHandlers();
    void registerModbusSettingsHandlers();
    void registerMeterSettingsHandlers();
    void registerControlHandlers();
    void sendModbusSettingsState(AsyncWebServerRequest* request, int status);
    void sendMeterSettingsState(AsyncWebServerRequest* request, int status);
    // Each pair is <hasValue, value>; a missing value is serialized as null
    // (used when the shared relay bus cannot be locked for a readback).
    void sendControlsState(
        AsyncWebServerRequest* request,
        int status,
        std::pair<bool, bool> ventilation,
        std::pair<bool, bool> light
    );

    AsyncWebServer* _server = nullptr;
    EDConfig::DataMgr<Config>* _configMgr = nullptr;
    EDNetwork::NetworkApi* _networkApi = nullptr;
    EDHealthCheck::HealthCheck* _healthCheck = nullptr;
    EDWB::WirenBoard* _modbus = nullptr;
    EDWB::MAP12E* _map12e = nullptr;
    EDCommon::Relay::Relay* _ventilationRelay = nullptr;
    EDCommon::Light::Light* _light = nullptr;
    EDConfig::ConfigFileHandler _configFileHandler;
    EDConfig::ConfigBackupHandler _configBackupHandler;
};
