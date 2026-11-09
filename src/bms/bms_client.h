#pragma once

#include <cstddef>
#include <cstdint>

#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>

#include "bms_types.h"

// BLE client for a JBD BMS. All NimBLE calls live in bms_client.cpp and, at
// runtime, only inside the dedicated "bms" FreeRTOS task created by start().
// Loop-task / AsyncTCP callers only touch the mutex-guarded snapshot, metadata
// and scan results, so they never block the Arduino loop on BLE.

namespace Faraday
{
    namespace Bms
    {
        struct BmsScanResult
        {
            char mac[18] = {0};
            char name[28] = {0};
            int rssi = 0;
        };

        class Client
        {
        public:
            Client();

            // Creates the mutex, RX queue and the BLE task. BLE itself is not
            // initialized here: the task does that lazily on first use.
            bool start();

            // Guarded configuration/state accessors (safe from any task).
            void setCellCount(uint8_t count);
            uint8_t cellCount() const;

            // `macOrNull` empty/NULL disables polling. The task is woken so a
            // change takes effect immediately.
            void setAddress(const char* macOrNull);
            bool address(char* out, size_t n) const;

            bool isConnected() const;
            // True once the BLE stack failed to initialize permanently.
            bool bleUnavailable() const;
            bool hasSnapshot() const;
            uint32_t lastBasicInfoAtMs() const;
            void copySnapshot(BmsSnapshot& out) const;

            // Asynchronous scan request. While running, isScanning() is true and
            // scanGeneration() advances once the scan has completed (or aborted).
            void requestScan();
            bool isScanning() const;
            uint16_t scanResults(BmsScanResult* out, uint16_t max) const;
            uint32_t scanGeneration() const;

            // Recursive-safe mutex used to guard snapshot/metadata. Bounded
            // discipline mirrors the other project semaphores: callers must not
            // hold it across slow work.
            void lock() const;
            void unlock() const;

            bool started() const { return _impl != nullptr; }

        private:
            struct Impl;

            static void taskEntry(void* arg);
            void run();

            Impl* _impl = nullptr;
            mutable SemaphoreHandle_t _mutex = nullptr;
        };

        // RAII guard mirroring the project's ModbusGuard/ControlGuard style.
        class LockGuard
        {
        public:
            explicit LockGuard(const Client& client) : _client(client) { _client.lock(); }
            ~LockGuard() { _client.unlock(); }

            LockGuard(const LockGuard&) = delete;
            LockGuard& operator=(const LockGuard&) = delete;

        private:
            const Client& _client;
        };
    }
}
