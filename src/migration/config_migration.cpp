#include <LittleFS.h>

#include "config_migration.h"
#include "log/log.h"

uint16_t migrationCrc16(const uint8_t* data, size_t len)
{
    uint16_t crc = 0xffff;
    const uint16_t poly = 0xa001;

    for (size_t i = 0; i < len; i++) {
        crc ^= data[i];
        for (uint8_t j = 0; j < 8; j++) {
            crc >>= 1;
            if (crc & 0x01) {
                crc ^= poly;
            }
        }
    }

    return crc;
}

bool readLegacyConfigV5(ConfigV5* out)
{
    File file = LittleFS.open("/config.bin", FILE_READ);
    if (!file) {
        LOGW("migration", "legacy config v5 not found");
        return false;
    }

    // Exact size only: a v6 file (or any other layout) must be left alone for
    // configMgr.load() to handle. Today's CRC-only load() would otherwise
    // silently reset it, but the legacy reader must never claim it.
    if (file.size() != sizeof(ConfigV5) + sizeof(uint16_t)) {
        LOGW("migration", "legacy config v5 size mismatch, skipping");
        file.close();
        return false;
    }

    if (file.read(reinterpret_cast<uint8_t*>(out), sizeof(ConfigV5)) != sizeof(ConfigV5)) {
        LOGW("migration", "failed to read legacy config v5");
        file.close();
        return false;
    }

    uint16_t storedCrc = 0;
    if (file.read(reinterpret_cast<uint8_t*>(&storedCrc), sizeof(uint16_t)) != sizeof(uint16_t)) {
        LOGW("migration", "failed to read legacy config v5 checksum");
        file.close();
        return false;
    }

    file.close();

    if (migrationCrc16(reinterpret_cast<const uint8_t*>(out), sizeof(ConfigV5)) != storedCrc) {
        LOGW("migration", "migration crc mismatch, skipping");
        return false;
    }

    if (out->version > 5) {
        LOGW("migration", "legacy config version %u is newer than v5, skipping", (unsigned)out->version);
        return false;
    }

    return true;
}

void applyLegacyConfigV5(Config* target, const ConfigV5& src)
{
    target->network = src.network;
    target->mqtt = src.mqtt;
    target->mqttIsHADiscovery = src.mqttIsHADiscovery;
    memcpy(target->mqttHADiscoveryPrefix, src.mqttHADiscoveryPrefix, MQTT_TOPIC_LEN);
    memcpy(target->mqttCommandTopic, src.mqttCommandTopic, MQTT_TOPIC_LEN);
    memcpy(target->mqttStateTopic, src.mqttStateTopic, MQTT_TOPIC_LEN);
    memcpy(target->mqttStatusTopic, src.mqttStatusTopic, MQTT_TOPIC_LEN);

    target->log = src.log;

    target->modbusSpeed = src.modbusSpeed;
    target->map12eAddress = src.map12eAddress;
    target->map12eCt1Ratio = src.map12eCt1Ratio;
    target->anenjiAddress = src.anenjiAddress;
    target->energySyncValue = src.energySyncValue;
    target->energyMeterBase = src.energyMeterBase;

    memcpy(target->bmsMacAddress, src.bmsMacAddress, sizeof(src.bmsMacAddress));
    target->bmsCellCount = src.bmsCellCount;

    // Fields introduced in v6: never present in a v5 file, so use their
    // defaults. target->version stays CURRENT_VERSION (6) — do not touch it.
    target->presenceAddress = 0;
    target->presenceLuxThreshold = 100.0f;

    LOGI("migration", "legacy config v5 detected, migrating");
}
