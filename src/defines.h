#pragma once

#include <ETH.h>

#define SERIAL_SPEED 115200

// Analog inputs (reserved for future sensor domain; no code uses them yet).
#define ANALOG_A1 36
#define ANALOG_A2 39
#define ANALOG_A3 34
#define ANALOG_A4 35

// I2C bus (PCF8574 expanders). The output expander drives the relay bank
// (ventilation/light/entrance light/generator); the input expander carries the
// door contact and the basement wall switch.
#define IIC_SDA 4
#define IIC_SCL 5
#define RELAY_IIC_ADDRESS 0x24   // PCF8574 output expander (relays)
#define INPUT_IIC_ADDRESS 0x22   // PCF8574 input expander (door contact, wall switch)

// The PCF8574 @ RELAY_IIC_ADDRESS drives the KC868-A8S relay bank in REVERSE
// board order — board relay K_n = channel (8 - n); formula verified on hardware
// for K3→5 (ventilation) and K4→4 (light) after the original forward assumption
// (2/3) was observed firing K6/K5; change channel numbers here only.
#define VENTILATION_RELAY_CHANNEL 5 // board relay K3
#define LIGHT_RELAY_CHANNEL 4       // board relay K4
#define ENTRANCE_LIGHT_RELAY_CHANNEL 2 // board relay K6 — reverse formula 8-6 (formula hardware-verified for K3/K4 only; K6 not individually verified)
#define CHANGEOVER_RELAY_K2_CHANNEL 6 // board relay K2 (mains/generator changeover, shared with K5)
#define CHANGEOVER_RELAY_K5_CHANNEL 3 // board relay K5 (mains/generator changeover, shared with K2)

// Digital inputs sit on the PCF8574 @ INPUT_IIC_ADDRESS. The forward DI_n ->
// channel mapping (DI1 -> 0, DI2 -> 1) is hardware-verified for the door: the
// contact reacts on channel 0. Polarity is per-device (BinarySensor reverse):
// the door reed wiring reads ACTIVE-HIGH — reverse=true was verified to report
// the state inverted (closed door read as open), so DOOR_CONTACT_REVERSE is
// false. The basement wall switch keeps the assumed active-low polarity
// (DI_CONTACT_REVERSE); flip it to false if the light follows the switch
// position inverted. If DI2 ever looks dead or swapped with another input,
// try channel 6 (reverse-order mapping like the output bank).
#define DOOR_SENSOR_INPUT_CHANNEL 0      // DI1
#define BASEMENT_SWITCH_INPUT_CHANNEL 1  // DI2
#define DOOR_CONTACT_REVERSE false
#define DI_CONTACT_REVERSE true
#define DOOR_SENSOR_POLL_INTERVAL_MS 200
#define DOOR_SENSOR_DEBOUNCE_MS 50
// Sampling cadence of the latching basement wall switch. Must match the
// Light::withWallSwitch poll interval: the light's poll gate owns the sensor
// sampling (the sensor is inited with update interval 0).
#define BASEMENT_SWITCH_POLL_INTERVAL_MS 30
#define BASEMENT_SWITCH_DEBOUNCE_MS 50

// Shared sensor/LED connector (one device at a time: DS18B20 / DHT11 / DHT21 / LED strip #2).
// The basement DHT11 climate sensor is the device currently occupying it.
#define SENSOR_BUS_PIN 14
#define BASEMENT_DHT_UPDATE_INTERVAL_MS 10000
#define DS18B20_PIN SENSOR_BUS_PIN
#define DHT_PIN SENSOR_BUS_PIN
#define LED_STRIP2_PIN SENSOR_BUS_PIN

// RF 433 MHz receiver data out
#define RF433_RX_PIN 16

// Ethernet LAN8720
#define ETH_ADDR 0
#define ETH_POWER_PIN -1
#define ETH_MDC_PIN 23
#define ETH_MDIO_PIN 18
#define ETH_TYPE ETH_PHY_LAN8720
#define ETH_CLK_MODE ETH_CLOCK_GPIO17_OUT

// RS485 (Serial2). Speed is config-driven (Config::modbusSpeed).
#define RS485_RX 32
#define RS485_TX 33

// GSM module (Serial1). Baud is a placeholder until the GSM domain lands.
#define GSM_RX 13
#define GSM_TX 15
#define GSM_SPEED 115200

// JBD BMS over Bluetooth (telemetry; the only write is the operator-triggered
// failed-event-counter clear).
#define BMS_MAX_CELLS 20
#define BMS_DEFAULT_CELLS 12
#define BMS_POLL_INTERVAL_MS 10000
#define BMS_RESPONSE_TIMEOUT_MS 2500
// First app-key response wait. Packs that do not speak the FF AA dialect are
// detected here and remembered as unsupported for that address.
#define BMS_AUTH_APPKEY_TIMEOUT_MS 3000
// One later password/root handshake step (request -> response).
#define BMS_AUTH_STEP_TIMEOUT_MS 10000
#define BMS_RECONNECT_MIN_MS 5000
#define BMS_RECONNECT_MAX_MS 60000
// NimBLE 1.4.x scan start() takes the duration in SECONDS, not milliseconds.
#define BMS_SCAN_DURATION_S 10
// Task-side hard deadline for the scan wait (milliseconds). Kept in ms so the
// waitAbort() math stays uniform with the other BMS timers.
#define BMS_SCAN_DURATION_MS 10000
#define BMS_MAX_SCAN_RESULTS 20
#define BMS_TASK_STACK 8192
// Floor for the late Wi-Fi STA fallback driver plus app buffers. 120000 was
// unreachable on the real app (measured ~75 KB free after setup()); NimBLE init
// consumes less generic heap than the old gate assumed (classic-BT release +
// static BTDM reservation inside the library), so 60000 leaves ~15 KB margin at
// the boot attempt. The real BLE-up delta is measured on hardware by the
// existing "BLE up, heap" log in src/bms/bms_client.cpp.
#define BMS_MIN_FREE_HEAP_FOR_BLE 60000
// Automatic BLE init additionally waits until the network (Ethernet/station) has
// been continuously connected for this window AND uptime is past the second
// value. The board's LAN8720 link flaps during the first ~17 s after boot and
// ed-network then brings up the Wi-Fi fallback AP; starting NimBLE (~60 KB heap,
// leaving ~16 KB free) inside that window aborts the device (wifi create task
// NO_MEM -> lwip tcp_receive assert). A manual scan still initializes BLE on
// demand as before.
#define BMS_BLE_NET_STABLE_MS 15000
#define BMS_BLE_MIN_UPTIME_MS 15000

// Buzzer
#define BUZZER_PIN 2

// WS2812B RGBW single-pixel board status LED, driven by
// Faraday::Health::StatusLed as a health indicator.
#define STATUS_LED_PIN 12
#define STATUS_LED_COUNT 1
#define STATUS_LED_BRIGHTNESS 80

#ifndef CONTROLLER_NAME
#define CONTROLLER_NAME "Faraday"
#endif

// scripts/ota_env.py injects FARADAY_OTA_AUTH from the untracked .env for the
// faraday_ota env. Keep the dev-only fallback when building without .env so
// plain builds compile. Never use this fallback on a real network.
#ifndef FARADAY_OTA_AUTH
#define FARADAY_OTA_AUTH "faraday-dev-ota"
#endif

const char deviceName[] = CONTROLLER_NAME;
const char deviceModel[] = "ESP32-LAN8720"; // TBD board revision
const char deviceManufacturer[] = "DIY";
const char deviceHWVersion[] = "1.0.0";

#ifndef FARADAY_FW_VERSION
#define FARADAY_FW_VERSION "unknown"
#endif

const char deviceFWVersion[] = FARADAY_FW_VERSION;
