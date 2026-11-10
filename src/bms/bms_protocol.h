#pragma once

#include <cstddef>
#include <cstdint>

#include "bms_types.h"

// JBD-BMS-over-Bluetooth protocol codec. Pure functions / plain state only:
// this translation unit must never include a BLE (or Arduino task) header so it
// stays independently testable and safe to call from any context.

namespace Faraday
{
    namespace Bms
    {
        namespace Protocol
        {
            // Command/data frame constants (ported from syssi/esphome-jbd-bms).
            constexpr uint8_t JBD_PKT_START = 0xDD;
            constexpr uint8_t JBD_PKT_END = 0x77;
            constexpr uint8_t JBD_CMD_READ = 0xA5;
            // The MOSFET-control/write-register dialect is deliberately out of
            // scope: never build a frame with this opcode.
            constexpr uint8_t JBD_CMD_WRITE = 0x5A;
            // Community-captured clear opcode (DD E1 01 00 crc crc 77): clears
            // the latched failed-event counters read via 0xAA. Hardware-
            // unverified; this is the only command opcode the firmware emits.
            constexpr uint8_t JBD_CMD_CLEAR_ERRORS = 0xE1;

            // Read addresses.
            constexpr uint8_t JBD_ADDR_BASIC_INFO = 0x03;
            constexpr uint8_t JBD_ADDR_CELL_INFO = 0x04;
            constexpr uint8_t JBD_ADDR_HW_VERSION = 0x05;
            constexpr uint8_t JBD_ADDR_ERROR_COUNTS = 0xAA;

            // Target address of the counter-clear command.
            constexpr uint8_t JBD_ADDR_CLEAR_ERRORS = 0x01;

            // 16-bit value that makes the sum of `data[0..len)` plus it zero.
            uint16_t checksum(const uint8_t* data, uint16_t len);

            // Builds a 7-byte command frame (DD cmd addr 00 crc crc 77) into
            // `out` and returns the frame length (always 7). CRC covers
            // addr + len (frame bytes 2..3).
            uint16_t buildCommandFrame(uint8_t command, uint8_t address, uint8_t* out);

            // Builds a 7-byte read request; identical to
            // buildCommandFrame(JBD_CMD_READ, addr, out).
            uint16_t buildReadFrame(uint8_t addr, uint8_t* out);

            // Reassembles split BLE notification payloads into complete response
            // frames and validates them (status == 0, trailing 0x77, CRC).
            class FrameAssembler
            {
            public:
                // Feed one BLE notification. A notification starting with
                // 0xDD 0x?? 0x00 is treated as a fresh frame start and clears
                // any partially assembled bytes.
                void onNotification(const uint8_t* data, uint16_t len);

                // True when a validated frame is waiting in takeFrame().
                bool hasFrame() const { return _hasFrame; }

                // Returns the validated frame. `data` points into the internal
                // buffer and stays valid until the next onNotification()/reset().
                // Returns false when no frame is pending.
                bool takeFrame(uint8_t& function, uint8_t& status, const uint8_t*& data, uint16_t& len);

                void reset();

            private:
                bool tryComplete();

                uint8_t _buf[128] = {0};
                uint16_t _len = 0;
                bool _hasFrame = false;
                uint8_t _function = 0;
                uint8_t _status = 0;
                uint16_t _dataLen = 0;
            };

            // Parse a basic-info payload (function 0x03). Cell min/max/avg/delta
            // fields are left untouched; they are filled from parseCells().
            bool parseBasicInfo(const uint8_t* data, uint16_t len, BmsBasicInfo& out);

            // Parse a cell-info payload (function 0x04). Only
            // min(configuredCount, len/2, 20) pairs are stored. When `stats` is
            // non-null it receives the min/max/avg/delta computed over exactly
            // the configured cells (the BMS may report more cells than the
            // battery has).
            bool parseCells(
                const uint8_t* data,
                uint16_t len,
                uint8_t configuredCount,
                BmsCells& out,
                BmsBasicInfo* stats = nullptr
            );

            // Parse an error-count payload (function 0xAA).
            bool parseErrorCounts(const uint8_t* data, uint16_t len, BmsErrorCounts& out);

            // Parse a hardware-version payload (function 0x05): NUL-terminated
            // ASCII model string.
            bool parseDeviceModel(const uint8_t* data, uint16_t len, char* out, size_t outSize);

            // Decode a protection/error bitmask into "; "-joined labels.
            void formatProtectionLabels(uint16_t bitmask, char* out, size_t outSize);

            // Decode the MOSFET/operation bitmask into "; "-joined labels.
            void formatOperationLabels(uint8_t mosfetBitmask, char* out, size_t outSize);
        }
    }
}
