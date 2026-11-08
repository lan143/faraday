#pragma once

#ifdef ESP32
    #include <AsyncTCP.h>
#elif defined(ESP8266)
    #include <ESPAsyncTCP.h>
#endif

#include <LittleFS.h>
#include <ESPAsyncWebServer.h>
#include <backup/config_backup_handler.hpp>
#include <backup/config_file_handler.hpp>
#include <data_mgr.h>
#include <healthcheck.h>
#include <network/network_api.h>

#include "config.h"
#include "web/backup_specs.h"

class Handler {
public:
    Handler(
        EDConfig::DataMgr<Config>* configMgr,
        EDNetwork::NetworkApi* networkApi,
        EDHealthCheck::HealthCheck* healthCheck
    ) : _configMgr(configMgr), _networkApi(networkApi),
        _healthCheck(healthCheck),
        _configFileHandler(BackupSpecs::kConfigFileHandlerConfig),
        _configBackupHandler(BackupSpecs::kBackupHandlerConfig) {
        _server = new AsyncWebServer(80);
    }

    void init();

private:
    void registerLogSettingsHandlers();

    AsyncWebServer* _server = nullptr;
    EDConfig::DataMgr<Config>* _configMgr = nullptr;
    EDNetwork::NetworkApi* _networkApi = nullptr;
    EDHealthCheck::HealthCheck* _healthCheck = nullptr;
    EDConfig::ConfigFileHandler _configFileHandler;
    EDConfig::ConfigBackupHandler _configBackupHandler;
};
