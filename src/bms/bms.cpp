#include "bms.h"

#include <data_mgr.h>
#include <log/log.h>

#include <cstdio>
#include <cstring>
#include <vector>

#include "bms_sensors.h"
#include "config.h"
#include "defines.h"

// Defined in src/main.cpp (file-scope config manager).
extern EDConfig::DataMgr<Config> configMgr;

namespace Faraday
{
    namespace Bms
    {
        namespace
        {
            // Loop-task cache: the BLE task mutates the Client-owned snapshot
            // under its mutex; Bms::update() copies it here, then the sensors
            // read this copy. Single-writer (loop) after the copy, so no races.
            BmsSnapshot snapshotCache;

            Client clientInstance;

            std::vector<Faraday::BmsSensor*> numericSensors;
            std::vector<Faraday::BmsBinarySensor*> binarySensors;
            std::vector<Faraday::BmsTextSensor*> textSensors;

            bool initialized = false;
            bool enabled = false;

            Faraday::BmsSensor* initNumeric(
                EDMQTT::MQTT* mqtt,
                EDHA::DiscoveryMgr* discoveryMgr,
                EDHA::Device* device,
                const std::string& mqttPrefix,
                Faraday::BmsSensor::Quantity quantity,
                uint8_t precision,
                const char* name,
                uint8_t cellIndex = 0
            )
            {
                auto* sensor = new Faraday::BmsSensor(&snapshotCache, quantity, cellIndex);

                if (!sensor->init(precision, BMS_POLL_INTERVAL_MS, {
                        EDCommon::Sensor::withMQTT(mqtt, mqttPrefix, "faraday", name),
                        EDCommon::Sensor::withDiscovery(discoveryMgr, device),
                    })) {
                    LOGE("bms", "failed to init %s sensor", name);
                }

                numericSensors.push_back(sensor);

                return sensor;
            }
        }

        bool validateMacAddress(const char* input, char* out, size_t outSize)
        {
            if (input == nullptr || input[0] == '\0' || outSize < 18) {
                return false;
            }

            unsigned int parts[6] = {0};
            int consumed = 0;
            const int matched = sscanf(
                input,
                "%2x:%2x:%2x:%2x:%2x:%2x%n",
                &parts[0], &parts[1], &parts[2], &parts[3], &parts[4], &parts[5],
                &consumed
            );

            if (matched != 6 || consumed != static_cast<int>(strlen(input))) {
                return false;
            }

            for (uint8_t i = 0; i < 6; ++i) {
                if (parts[i] > 0xFF) {
                    return false;
                }
            }

            snprintf(
                out,
                outSize,
                "%02X:%02X:%02X:%02X:%02X:%02X",
                parts[0], parts[1], parts[2], parts[3], parts[4], parts[5]
            );

            return true;
        }

        void init(EDMQTT::MQTT* mqtt, EDHA::DiscoveryMgr* discoveryMgr, EDHA::Device* device, const std::string& mqttPrefix)
        {
            if (initialized) {
                return;
            }
            initialized = true;

            if (!clientInstance.start()) {
                LOGE("bms", "failed to start BLE client");
                return;
            }

            Config* config = configMgr.getData();
            clientInstance.setCellCount(config->bmsCellCount);

            char mac[18] = {0};
            if (!validateMacAddress(config->bmsMacAddress, mac, sizeof(mac))) {
                clientInstance.setAddress("");
                LOGI("bms", "disabled (no BMS MAC configured)");
                return;
            }

            enabled = true;
            clientInstance.setAddress(mac);
            LOGI("bms", "enabled: MAC %s, %u cell(s)", mac, (unsigned)config->bmsCellCount);

            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::StateOfCharge, 0, "BMS state of charge");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::TotalVoltage, 2, "BMS total voltage");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::Current, 2, "BMS current");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::Power, 1, "BMS power");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::CapacityRemaining, 2, "BMS capacity remaining");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::NominalCapacity, 2, "BMS nominal capacity");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::ChargingCycles, 0, "BMS charging cycles");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::MinCellVoltage, 3, "BMS min cell voltage");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::MaxCellVoltage, 3, "BMS max cell voltage");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::AvgCellVoltage, 3, "BMS avg cell voltage");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::DeltaCellVoltage, 3, "BMS delta cell voltage");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::Temperature1, 1, "BMS temperature 1");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::Temperature2, 1, "BMS temperature 2");
            initNumeric(mqtt, discoveryMgr, device, mqttPrefix, Faraday::BmsSensor::Quantity::Temperature3, 1, "BMS temperature 3");

            const uint8_t cellCount = clientInstance.cellCount();
            for (uint8_t i = 1; i <= cellCount; ++i) {
                char name[32] = {0};
                snprintf(name, sizeof(name), "BMS cell %u voltage", (unsigned)i);
                initNumeric(
                    mqtt, discoveryMgr, device, mqttPrefix,
                    Faraday::BmsSensor::Quantity::CellVoltage, 3, name, i
                );
            }

            auto addBinary = [&](Faraday::BmsBinarySensor::Kind kind) {
                auto* sensor = new Faraday::BmsBinarySensor(&snapshotCache, kind);
                if (!sensor->init(mqtt, mqttPrefix, discoveryMgr, device)) {
                    LOGE("bms", "failed to init binary sensor");
                }
                binarySensors.push_back(sensor);
            };

            addBinary(Faraday::BmsBinarySensor::Kind::Charging);
            addBinary(Faraday::BmsBinarySensor::Kind::Discharging);
            addBinary(Faraday::BmsBinarySensor::Kind::Balancing);
            addBinary(Faraday::BmsBinarySensor::Kind::Fault);

            auto addText = [&](Faraday::BmsTextSensor::Kind kind) {
                auto* sensor = new Faraday::BmsTextSensor(&snapshotCache, kind);
                if (!sensor->init(mqtt, mqttPrefix, discoveryMgr, device)) {
                    LOGE("bms", "failed to init text sensor");
                }
                textSensors.push_back(sensor);
            };

            addText(Faraday::BmsTextSensor::Kind::Status);
            addText(Faraday::BmsTextSensor::Kind::Errors);
            addText(Faraday::BmsTextSensor::Kind::DeviceModel);
        }

        void update()
        {
            if (!initialized) {
                return;
            }

            clientInstance.copySnapshot(snapshotCache);

            if (!enabled) {
                return;
            }

            for (auto* sensor : numericSensors) {
                sensor->update();
            }

            for (auto* sensor : binarySensors) {
                sensor->update();
            }

            for (auto* sensor : textSensors) {
                sensor->update();
            }
        }

        Client* client()
        {
            return &clientInstance;
        }
    }
}
