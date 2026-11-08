#pragma once

#include <ETH.h>

#define SERIAL_SPEED 115200

// Analog inputs (reserved for future sensor domain; no code uses them yet).
#define ANALOG_A1 36
#define ANALOG_A2 39
#define ANALOG_A3 34
#define ANALOG_A4 35

// I2C bus (PCF8574 expanders; no domain logic attached yet).
#define IIC_SDA 4
#define IIC_SCL 5
#define RELAY_IIC_ADDRESS 0x24   // PCF8574 output expander (relays)
#define INPUT_IIC_ADDRESS 0x22   // PCF8574 input expander

// Shared sensor/LED connector (one device at a time: DS18B20 / DHT11 / DHT21 / LED strip #2)
#define SENSOR_BUS_PIN 14
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

// RS485 (Serial2). Speed is a placeholder until the RS485 domain lands.
#define RS485_RX 32
#define RS485_TX 33
#define RS485_SPEED 19200

// GSM module (Serial1). Baud is a placeholder until the GSM domain lands.
#define GSM_RX 13
#define GSM_TX 15
#define GSM_SPEED 115200

// Buzzer
#define BUZZER_PIN 2

// WS2812B RGBW status LED strip #1 (reserved; no LED domain yet)
#define STATUS_LED_PIN 12

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
