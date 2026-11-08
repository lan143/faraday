#pragma once

#include <backup/backup_core.hpp>
#include <backup/config_backup_handler.hpp>
#include <backup/config_file_handler.hpp>

#include <cstddef>
#include <cstdint>

#include "config.h"
#include "defines.h"
#include "web/reboot_after_response.h"

// Project-specific backup/restore description consumed by the generic
// EDConfig handlers. Faraday persists a single /config.bin for now; domain
// state files will be appended here as those domains land.
namespace BackupSpecs
{
    constexpr EDConfig::BackupFileSpec kBackupFiles[] = {
        {"config.bin", "/config.bin", sizeof(Config), (uint8_t)CURRENT_VERSION, true},
    };

    constexpr size_t kBackupFileCount = sizeof(kBackupFiles) / sizeof(kBackupFiles[0]);

    static_assert(kBackupFileCount <= EDConfig::BACKUP_MAX_FILES, "backup file table exceeds library limit");

    static_assert(sizeof(Config) + sizeof(uint16_t) <= EDConfig::BACKUP_DEFAULT_MAX_ARCHIVE_BYTES, "config.bin exceeds the backup archive cap");

    // Both /api/config and /api/config/backup reply before rebooting so the
    // response reaches the client (see reboot_after_response.h).
    inline void scheduleBackupReboot()
    {
        RebootAfterResponse::schedule(200);
    }

    constexpr EDConfig::BackupHandlerConfig kBackupHandlerConfig = {
        kBackupFiles,
        kBackupFileCount,
        "faraday-config.zip",
        0,
        &scheduleBackupReboot,
    };

    constexpr EDConfig::ConfigFileHandlerConfig kConfigFileHandlerConfig = {
        "/config.bin",
        sizeof(Config),
        (uint8_t)CURRENT_VERSION,
        true,
        &scheduleBackupReboot,
    };
}
