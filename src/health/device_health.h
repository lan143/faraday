#pragma once

#include <cstdint>
#include <string>

#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>

#include <healthcheck.h>

namespace EDWB
{
    class MAP12E;
    class ANENJI4200;
}

namespace Faraday
{
    namespace Bms
    {
        class Client;
    }

    namespace Health
    {
        // Aggregated device-health level for the status LED. Error dominates
        // Warning; devices without a service are skipped by the caller.
        enum class HealthLevel : uint8_t
        {
            Ok = 0,
            Warning = 1,
            Error = 2,
        };

        // The adapter starts not-ready until the first probe completes; after
        // that three consecutive failed probes mark the device unreachable and
        // a single successful probe recovers it.
        constexpr uint32_t kProbeIntervalMs = 5000;
        constexpr uint8_t kProbeFailThreshold = 3;

        // Snapshot older than this is reported as a BMS warning (poll interval
        // is 10 s, so one missed cycle plus margin is still tolerated).
        constexpr uint32_t kBmsStaleMs = 35000;

        // WB-MAP12E reachability. The pinned ed-wb driver has no status/error
        // register for this meter, so only transaction success is observable.
        class MeterHealth : public EDHealthCheck::Ready
        {
        public:
            MeterHealth(SemaphoreHandle_t bus, EDWB::MAP12E* const* meterSlot);

            EDHealthCheck::ReadyResult ready() override;

            HealthLevel level() const { return _ready ? HealthLevel::Ok : HealthLevel::Error; }

        private:
            void probe();

            SemaphoreHandle_t _bus;
            EDWB::MAP12E* const* _slot;

            bool _hasProbed = false;
            uint32_t _lastProbeMs = 0;
            uint8_t _consecutiveFails = 0;
            bool _ready = false;
            bool _unreachable = false;
            std::string _message = "wb-map12e not probed yet";
        };

        // ANENJI 4200 reachability plus the device fault code, Fault work mode
        // and the raw warning code (register 104, reported as a health warning
        // on HTTP 200). Masked warning / warning-mask registers (108/314) remain
        // excluded; a fault always dominates over a warning.
        class InverterHealth : public EDHealthCheck::Ready
        {
        public:
            InverterHealth(SemaphoreHandle_t bus, EDWB::ANENJI4200* const* inverterSlot);

            EDHealthCheck::ReadyResult ready() override;

            HealthLevel level() const
            {
                return !_ready ? HealthLevel::Error
                    : (_warning ? HealthLevel::Warning : HealthLevel::Ok);
            }

        private:
            void probe();

            SemaphoreHandle_t _bus;
            EDWB::ANENJI4200* const* _slot;

            bool _hasProbed = false;
            uint32_t _lastProbeMs = 0;
            uint8_t _consecutiveFails = 0;
            bool _ready = false;
            bool _unreachable = false;
            bool _deviceFault = false;
            bool _warning = false;
            bool _warningLogged = false;
            std::string _message = "anenji not probed yet";
        };

        // JBD BMS link/staleness warnings, live protection-bitmask faults and
        // latched error-counter warnings. Uses only the Client's mutex-guarded
        // accessors; never touches a bus.
        class BmsHealth : public EDHealthCheck::Ready
        {
        public:
            BmsHealth() = default;

            EDHealthCheck::ReadyResult ready() override;

            HealthLevel level() const { return _level; }

        private:
            // Not-yet-connected (or never probed) is a warning, not an error.
            HealthLevel _level = HealthLevel::Warning;
            bool _faultLogged = false;
            bool _warningLogged = false;
        };
    }
}
