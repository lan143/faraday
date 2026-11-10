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
            // 0x5A write-register dialect. Faraday emits it ONLY for the two
            // factory/EEPROM-mode frames below; every other register (notably
            // the MOSFET/balancer/capacity 0xE0/0xE1/0xE2 range) is forbidden.
            constexpr uint8_t JBD_CMD_WRITE = 0x5A;

            // Read addresses.
            constexpr uint8_t JBD_ADDR_BASIC_INFO = 0x03;
            constexpr uint8_t JBD_ADDR_CELL_INFO = 0x04;
            constexpr uint8_t JBD_ADDR_HW_VERSION = 0x05;
            constexpr uint8_t JBD_ADDR_ERROR_COUNTS = 0xAA;

            // Factory/EEPROM-mode sequence from syssi/esphome-jbd-bms:
            // register 0x00 enters factory mode; register 0x01 exits it, clears
            // the failed-event counters and writes the pack config to EEPROM.
            // Hardware-unverified on Faraday; no other 0x5A frame may be built.
            constexpr uint8_t JBD_ADDR_FACTORY_ENTER = 0x00;
            constexpr uint8_t JBD_ADDR_FACTORY_EXIT = 0x01;
            constexpr uint8_t JBD_FACTORY_ENTER_DATA[2] = {0x56, 0x78};
            constexpr uint8_t JBD_FACTORY_EXIT_CLEAR_DATA[2] = {0x28, 0x28};

            // App-key authentication dialect (ported from syssi/esphome-jbd-bms).
            // Frames use [0xFF][0xAA][cmd][len][data...][chk8] on the same
            // 0xFF02 characteristic; chk8 is the 8-bit sum of cmd+len+data.
            constexpr uint8_t JBD_AUTH_START_0 = 0xFF;
            constexpr uint8_t JBD_AUTH_START_1 = 0xAA;
            constexpr uint8_t JBD_AUTH_CMD_APP_KEY = 0x15;
            constexpr uint8_t JBD_AUTH_CMD_GET_RANDOM = 0x17;
            constexpr uint8_t JBD_AUTH_CMD_PASSWORD = 0x18;
            constexpr uint8_t JBD_AUTH_CMD_ROOT_PASSWORD = 0x1D;

            // Published protocol constant (not a secret), same reference.
            constexpr uint8_t JBD_ROOT_PASSWORD[15] = {
                0x4A, 0x42, 0x44, 0x62, 0x74,
                0x70, 0x77, 0x64, 0x21, 0x40,
                0x23, 0x32, 0x30, 0x32, 0x33,
            };

            // 16-bit value that makes the sum of `data[0..len)` plus it zero.
            uint16_t checksum(const uint8_t* data, uint16_t len);

            // 8-bit sum used by the auth dialect (cmd + len + data, mod 256).
            uint8_t authChecksum(const uint8_t* data, uint16_t len);

            // Builds a 7-byte command frame (DD cmd addr 00 crc crc 77) into
            // `out` and returns the frame length (always 7). CRC covers
            // addr + len (frame bytes 2..3).
            uint16_t buildCommandFrame(uint8_t command, uint8_t address, uint8_t* out);

            // Builds a 7-byte read request; identical to
            // buildCommandFrame(JBD_CMD_READ, addr, out).
            uint16_t buildReadFrame(uint8_t addr, uint8_t* out);

            // Builds a DD 5A addr len data... crc crc 77 frame and returns its
            // length (7 + dataLen). CRC covers addr + len + data.
            uint8_t buildWriteFrame(uint8_t address, const uint8_t* data, uint8_t dataLen, uint8_t* out);

            // Auth-dialect builders; `out` must hold at least 20 bytes.
            // App key payload is the reference's ASCII "000000".
            uint16_t buildAppKeyFrame(uint8_t* out);
            uint16_t buildRandomRequestFrame(uint8_t* out);
            // `password` is the 6-byte user password (default ASCII "123123").
            uint16_t buildUserPasswordFrame(
                const uint8_t mac[6],
                const uint8_t password[6],
                uint8_t randomByte,
                uint8_t* out
            );
            uint16_t buildRootPasswordFrame(const uint8_t mac[6], uint8_t randomByte, uint8_t* out);

            // Reassembles split BLE notification payloads into complete response
            // frames and validates them (trailing 0x77, CRC, length). The status
            // byte is exposed as-is; the strict accessor filters it.
            class FrameAssembler
            {
            public:
                // Feed one BLE notification. A notification starting with
                // 0xDD 0x?? 0x00 is treated as a fresh frame start and clears
                // any partially assembled bytes.
                void onNotification(const uint8_t* data, uint16_t len);

                // True when a validated frame (any status) is waiting.
                bool hasFrame() const { return _hasFrame; }

                // True when a partial frame is buffered and no complete frame
                // is pending, so the next notification must be routed here
                // even if it starts with FF AA (split DD response whose
                // continuation happens to carry the auth prefix).
                bool hasPartial() const { return _len > 0 && !_hasFrame; }

                // Strict accessor used by the telemetry reads: returns the
                // validated frame only when status == 0x00. A pending non-zero
                // status frame is discarded exactly as before, and false is
                // returned. `data` stays valid until the next onNotification()/
                // reset().
                bool takeFrame(uint8_t& function, uint8_t& status, const uint8_t*& data, uint16_t& len);

                // Error-tolerant accessor: returns any validated frame,
                // including non-zero status, so command diagnostics can log it.
                bool takeFrameAllowError(
                    uint8_t& function,
                    uint8_t& status,
                    const uint8_t*& data,
                    uint16_t& len
                );

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

            // Reassembles the FF AA auth dialect (no 0x77 terminator). Resyncs
            // on the FF AA prefix, drops corrupt/oversize frames and never
            // exposes more than one validated payload.
            class AuthAssembler
            {
            public:
                void onNotification(const uint8_t* data, uint16_t len);

                bool hasFrame() const { return _hasFrame; }

                // True when a prefix/partial frame is buffered, so the next
                // notification must be routed here even if it does not start
                // with FF AA (split auth frame).
                bool hasPartial() const { return _len > 0 && !_hasFrame; }

                // `data` points into the internal frame buffer and stays valid
                // until the next onNotification()/reset().
                bool takeFrame(uint8_t& command, const uint8_t*& data, uint8_t& dataLen);

                void reset();

            private:
                static constexpr uint16_t kBufferSize = 32;

                bool tryComplete();

                uint8_t _buf[kBufferSize] = {0};
                uint16_t _len = 0;
                bool _hasFrame = false;
                uint8_t _command = 0;
                uint8_t _data[kBufferSize] = {0};
                uint8_t _dataLen = 0;
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
