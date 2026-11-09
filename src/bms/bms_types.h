#pragma once

#include <cstdint>

// Plain-data snapshot types shared between the BLE task, the protocol codec and
// the publishing sensors. No heap members, no Arduino/BLE dependencies: the
// whole struct can be copied as-is.

namespace Faraday
{
    namespace Bms
    {
        // JBD basic-info frame (function 0x03) plus the cell-derived statistics.
        struct BmsBasicInfo
        {
            float totalVoltage = 0.0f;       // V
            float current = 0.0f;            // A (negative = discharging)
            float power = 0.0f;              // W (totalVoltage * current)
            float capacityRemaining = 0.0f;  // Ah
            float nominalCapacity = 0.0f;    // Ah
            float soc = 0.0f;                // %
            float swVersion = 0.0f;          // major.minor (e.g. 1.2)
            float minCellVoltage = 0.0f;     // V (from the configured cell count)
            float maxCellVoltage = 0.0f;     // V
            float avgCellVoltage = 0.0f;     // V
            float deltaCellVoltage = 0.0f;   // V (max - min)
            uint32_t cycles = 0;
            uint16_t protectionBitmask = 0;  // error/protection bitmask
            uint32_t balancerBitmask = 0;    // cells 1-16 (low word) / 17-32 (high word)
            uint8_t mosfetBitmask = 0;       // operation status
            uint8_t reportedCellCount = 0;   // cell count reported by the device
            uint8_t temperatureCount = 0;    // valid entries in temperatures[]
            float temperatures[6] = {0};     // deg C
        };

        // Cell voltages (function 0x04), capped to BMS_MAX_CELLS.
        struct BmsCells
        {
            float volts[20] = {0};  // V
            uint8_t count = 0;      // number of valid entries in volts[]
        };

        // Error counters (function 0xAA), 11 big-endian u16 values.
        struct BmsErrorCounts
        {
            uint16_t shortCircuit = 0;
            uint16_t chargeOvercurrent = 0;
            uint16_t dischargeOvercurrent = 0;
            uint16_t cellOvervoltage = 0;
            uint16_t cellUndervoltage = 0;
            uint16_t chargeOvertemperature = 0;
            uint16_t chargeUndertemperature = 0;
            uint16_t dischargeOvertemperature = 0;
            uint16_t dischargeUndertemperature = 0;
            uint16_t batteryOvervoltage = 0;
            uint16_t batteryUndervoltage = 0;
        };

        // Full latency-tolerant snapshot. The BLE task mutates it under the
        // Client mutex; the sensors read it through copySnapshot().
        struct BmsSnapshot
        {
            bool connected = false;
            bool hasBasicInfo = false;
            BmsBasicInfo basicInfo;
            bool hasCells = false;
            BmsCells cells;
            bool hasErrorCounts = false;
            BmsErrorCounts errorCounts;
            bool hasDeviceModel = false;
            char deviceModel[32] = {0};
            uint32_t lastBasicInfoAtMs = 0;
        };
    }
}
