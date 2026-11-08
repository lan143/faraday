# AGENTS.md — Faraday

Operating manual for AI coding agents. Read this before editing. User-facing setup lives in
`README.md` (Russian); command-output hygiene in `RTK.md`.

## Project

Faraday is the **base controller skeleton** for a DIY ESP32 + LAN8720 board, modeled on
`prometey` and the same `ed-*` library family. It is intentionally not a finished controller
yet: it boots, mounts LittleFS, persists a raw `Config` in `/config.bin`, brings up Ethernet
(LAN8720) with Wi-Fi/AP fallback, connects to MQTT, creates one Home Assistant discovery
device, serves a Preact panel from LittleFS, exposes healthchecks and OTA, probes two PCF8574
expanders, and emits one boot beep.

There is **no domain logic yet** for sensors, relays/inputs, GSM, RF433, LED strips, RS485,
analog inputs or the buzzer beyond the boot beep. Those pins and objects are reserved for the
next waves; do not describe them as working features. Target hardware is a generic 4 MB
ESP32 + LAN8720 dev-board class; `src/defines.h` declares model `ESP32-LAN8720`, with board
revision **TBD**. PlatformIO board profile is `esp32dev`.

## Build & Deploy

PlatformIO for firmware and LittleFS; the root `Makefile` orchestrates OTA deployment. There
are **no unit tests and no test command** — compilation is the primary local gate, and
`npm run build` (TypeScript check + Vite) is the frontend gate.

- Compile: `pio run -e faraday`
- Flash over USB: `pio run -e faraday -t upload`
- Upload web UI to LittleFS: `pio run -e faraday -t uploadfs` (contents of `data/`)
- Serial monitor: `pio device monitor` (115200 8N1; run it plainly, not through `rtk`)
- OTA firmware: `pio run -e faraday_ota -t upload` (`upload_protocol = espota`)
- OTA filesystem: `pio run -e faraday_ota -t uploadfsota` (used by `make ui`)

OTA target and auth come from the **untracked** project-root `/.env` (copy `.env.example`):
`FARADAY_OTA_IP` and `FARADAY_OTA_AUTH`. `scripts/ota_env.py` injects them into
`env:faraday_ota` as `UPLOAD_PORT` / `UPLOAD_FLAGS` and compiles `FARADAY_OTA_AUTH` into the
firmware, so the ArduinoOTA password always matches the upload password. Never print, copy or
commit the auth value. `src/defines.h` has a dev-only fallback so plain builds compile
without `.env`; any real build/upload target requires both keys.

`make deploy` is the default target and runs the full seven-step pipeline:

1. flash firmware over OTA (`espota`)
2. wait for the device to boot (`WAIT_INITIAL` sleep + `/api/status` poll)
3. back up the device via `GET /api/config/backup` into `build/deploy/`
4. warn if `data/` exceeds the size gate, then flash the LittleFS UI over OTA
5. wait for the device to boot after the UI upload
6. restore the just-downloaded backup via `POST /api/config/backup`
7. wait for the reboot and verify `/api/status` contains `freeHeap`

Standalone targets: `make firmware` / `firmware-ota`, `make ui` / `ui-ota`,
`make backup` / `backup-only`, `make restore` (`ZIP=<path>`; defaults to
`build/deploy/latest.zip`), `make restore-only` (requires `ZIP=`), `make status`,
`make wait-for-boot`, `make help`. All except `help` require `.env`. `make ui` does **not**
back up or restore by itself; only `deploy` does. `HOST`, `PIO`, `WAIT_INITIAL`,
`WAIT_TIMEOUT`, `POLL_INTERVAL`, `BACKUP_DIR`, `BACKUP_ZIP` and `ZIP` are overridable.

Partition layout (`partitions.csv`): two app slots `0x1D0000` = 1,900,544 B (~1.81 MiB) each
at `0x10000` / `0x1E0000`, and the LittleFS `spiffs` data slot at `0x3B0000` with size
`0x50000` = 327,680 B (320 KiB). The current scaffold firmware is 1,130,240 B
(~1.08 MiB / ~1.13 MB); `data/` is ~140 KiB (`du -sk data`). `make` warns when `data/`
exceeds 262,144 B (80% of the 327,680 B slot) but still attempts the upload; the device
reports the real failure.

The custom partition table is already in the repo. Switching a device to it requires
**exactly one USB flash**; OTA cannot migrate a partition layout. That first flash (and any
later partition-table change) invalidates LittleFS, so `/config.bin` is lost and, without an
Ethernet link, the device falls back after ~15 s to AP `Faraday_<mac>` until configured.
Subsequent OTA updates are normal.

## Layout

```
src/
├── main.cpp                 Composition root: globals, setup()/loop(), wiring
├── defines.h                GPIO pins, serial speeds, identity, FW version define
├── config.h                 Config struct persisted raw to /config.bin; CURRENT_VERSION
└── web/
    ├── handler.h/.cpp       AsyncWebServer :80; static UI, settings/status/log routes
    ├── backup_specs.h       BackupFileSpec table + /api/config handler configs
    └── reboot_after_response.h  Deferred reboot after the HTTP response is flushed
frontend/                    Preact + TypeScript + Vite SPA sources; npm run build -> data/
data/                        Built web UI served from LittleFS (index.html + assets/)
scripts/
├── ota_env.py               Injects .env OTA IP/auth into env:faraday_ota
└── platformio_version.py    Injects git-derived FARADAY_FW_VERSION at build time
partitions.csv               Custom 4 MB table: dual OTA app slots + 320 KiB LittleFS
platformio.ini               env:faraday (USB) and env:faraday_ota (espota)
Makefile                     OTA deploy orchestration (deploy/backup/restore/status)
.env.example                 Template for FARADAY_OTA_IP/FARADAY_OTA_AUTH (never commit .env)
```

`data/` is build output from `frontend/` — edit the frontend source, not the bundle.
`frontend/package.json` pulls the network/config/log web components from the sibling
`ed-network`, `ed-config` and `ed-utils` packages via `file:../../…/frontend` dependencies.

## Architecture

- Single-threaded cooperative Arduino loop. Globals are constructed at file scope in
  `src/main.cpp`: `configMgr` (`EDConfig::DataMgr<Config>` + `StorageLittleFS("/config.bin")`),
  `networkMgr`, `networkApi`, `mqtt`, `healthCheck`, `discoveryMgr`, two `PCF8574` objects
  (`0x24` relay, `0x22` input) and `Handler`.
- `setup()` order: random seed → `Serial` (115200) → verbose esp_log → LittleFS mount
  (early return on failure) → config defaults → `configMgr.load()` → network logger init →
  `Serial2` (RS485 placeholder) → `Serial1` (GSM placeholder) → `Wire` at 100 kHz → PCF8574
  probes → `networkMgr.init(..., hasEth=true, ...)` → ArduinoOTA password/begin → MQTT init →
  network connect callback (logger + MQTT connect/disconnect) → healthcheck registers `mqtt`
  → network settings callback → `handler.init()` → HA discovery init + one `addDevice()` →
  `inited = true` → one 2700 Hz / 150 ms boot beep.
- `loop()` order: `RebootAfterResponse::update()` first, then `networkMgr.loop()`,
  `discoveryMgr.loop()`, `ArduinoOTA.handle()`, `healthCheck.loop()`,
  `networkLogger.update()`. When `inited` is false only the deferred-reboot check runs.
  **Never block the loop**: no `delay()`, no long synchronous I/O; use
  `esp_timer_get_time()` for intervals.
- `ed-*` roles (all fetched under `.pio/libdeps/faraday/`; read them before guessing APIs):
  - `ed-config` — `EDConfig::DataMgr<T>` + `StorageLittleFS<T>` (`/config.bin` = raw
    `sizeof(Config)` + little-endian CRC16 trailer), plus `ConfigFileHandler` and
    `ConfigBackupHandler` for `/api/config` and `/api/config/backup`.
  - `ed-network` — `NetworkMgr` (Ethernet + Wi-Fi STA/AP + fallback AP) and `NetworkApi`
    (`/api/network/settings`, `/api/network/status`, `/api/wifi/list`).
  - `ed-mqtt` — `EDMQTT::MQTT` (AsyncMqttClient, reconnect/stuck reset, `Ready`) and
    `EDMQTT::Consumer` for topic subscriptions. Faraday currently has no consumers.
  - `ed-utils` — `EDUtils::LogConfig`/`NetworkLogger`, `formatString`, `getMacAddress`,
    `getChipID`, `buildJson`, `LOGx` macros.
  - `ed-ha` — `EDHA::DiscoveryMgr` + `Device`; one device is created, but **no entities are
    registered yet**, so nothing is published to HA discovery until a domain adds entities.
  - `ed-healthcheck` — `Ready` interface + `HealthCheck`; only `mqtt` is registered.
  - `ESPAsyncWebServer` — port 80, no authentication.
- Config flow: `Config` (`src/config.h`, `CURRENT_VERSION = 1`) holds network, MQTT,
  HA-discovery flag/prefix, command/state topics and log settings. The MQTT portion is
  exposed at `GET /api/settings` and written by `POST /api/settings/mqtt`, which mutates the
  in-RAM `Config` and calls `configMgr.store()`; the whole struct is persisted raw to
  `/config.bin` by `EDConfig::DataMgr<Config>`/`StorageLittleFS` (CRC16 trailer). Defaults
  are installed in
  `setup()`: AP SSID `Faraday_<MAC>`, MQTT topics `faraday/<chip>/state` and
  `faraday/<chip>/set`, discovery prefix `homeassistant`, log host `192.168.1.2:5555/_bulk`.
  `load()` falls back to defaults and stores when the CRC/size is invalid. Changes are
  persisted immediately by their handlers; MQTT changes take effect after a reboot, while
  network and log settings apply live. There is no migration layer yet — a layout change
  requires bumping `CURRENT_VERSION` and adding one (or restore will reject old backups).
- Backup specs currently contain only `config.bin`; append future domain state files to
  `BackupSpecs::kBackupFiles` (and bump the archive cap only with a reason — the library
  default is 16 KiB).
- Network: `hasEth = true`, LAN8720 at PHY address 0, MDC 23, MDIO 18, no power pin,
  50 MHz clock out on GPIO 17. `NetworkMgr::loop()` checks connectivity every 500 ms and
  enters fallback AP after 30 failed checks (~15 s): default `isAPMode = true`, AP SSID
  `Faraday_<MAC>`, no AP password by default (standard ESP32 AP IP `192.168.4.1`). Network
  settings are applied after a ~300 ms defer so the HTTP response is flushed first.
- MQTT/HA: `mqtt.init()` no-ops with an empty host. On network connect the logger is enabled
  and MQTT is connected; on disconnect MQTT is disconnected. `DiscoveryMgr::loop()` sends
  discovery after ~10 s and retries until the send function succeeds (unless disabled).
- Logging: `LOGD/LOGI/LOGW/LOGE(tag, fmt, …)` from ed-utils; short tags (`"setup"`, `"main"`,
  `"network"`, …). `NetworkLogger` keeps two 16 KiB buffers, flushes the previous buffer every
  10 s while network is connected, and POSTs `text/plain` with `X-SYSTEM`/`X-INSTANCE`
  headers to the configured host/URI. The default log endpoint is a placeholder.

## HTTP API

ESPAsyncWebServer on port 80, **no authentication** (LAN-only device). Static files are
served from LittleFS root at `/` with `index.html`; `/config.bin` is also exposed as a static
file in addition to the `/api/config` download route. JSON responses use `application/json`.
Mutating config handlers reply `200 {}` on success, `422 {"message": …}` on validation error
and `500 {"message": …}` on storage failure unless noted.

| Route | Method | Notes |
|---|---|---|
| `/` | GET | LittleFS static UI, default `index.html` |
| `/config.bin` | GET | Raw persisted config (contains Wi-Fi/MQTT secrets) |
| `/api/settings` | GET | MQTT section: `mqttHost`, `mqttPort`, `mqttLogin`, `mqttPassword` (plaintext), `mqttIsHADiscovery`, `mqttHADiscoveryPrefix`, `mqttCommandTopic`, `mqttStateTopic` |
| `/api/settings/mqtt` | POST | Urlencoded. Requires `host`, `port`, `login`, `password`, `haDiscoveryPrefix` via `hasParam`; `stateTopic`, `commandTopic`, `mqttIsHADiscovery` are read **without** presence checks — omitting them crashes the device. Lengths ≤63/≤31/≤31/≤63/≤63. Persists immediately; reboot to apply. UI also enforces port 1–65535; firmware parses base-10 and casts to `uint16_t` |
| `/api/status` | GET | `{freeHeap, uptime (s), lastResetReason, fwVersion}` |
| `/api/reboot` | POST | Replies `{}` then schedules a restart after a 200 ms grace period |
| `/api/config` | GET | Raw `/config.bin` (`application/octet-stream`); 404 JSON if absent |
| `/api/config` | POST | Raw body (no multipart) exactly `sizeof(Config)+2`; validates version byte 0 == `CURRENT_VERSION` and CRC16 trailer; atomically replaces the file, replies `{}` then reboots |
| `/api/config/backup` | GET | STORE zip of `/config.bin`, attachment name `faraday-config.zip`, ≤16 KiB; 404 JSON when no config exists |
| `/api/config/backup` | POST | Raw zip body ≤16 KiB (no multipart), strict STORE-only parse, whitelisted members, size/version/CRC16 validation, all-or-nothing commit, replies `{}` then reboots |
| `/api/network/settings` | GET | ed-network: `isAPMode`, `wifiAPSSID`, `wifiAPHasPassword`, `wifiSSID`, `hasWifiPassword`, `hasWifiAPPassword`; plaintext passwords are never returned |
| `/api/network/settings` | POST | ed-network: JSON or urlencoded, ≤2048 B; patch keys (`wifiSSID`/`wifiAPSSID` ≤32, `wifiPassword`/`wifiAPPassword` ≤64, `wifiAPPassword` ≥8 when `wifiAPHasPassword`, `isAPMode`, `wifiAPHasPassword`); `wifiSSID` required in client mode, AP SSID required in AP mode; 200 with refreshed settings, applied live after the response; errors use 400/500 with `{"error": …}` |
| `/api/network/status` | GET | `{mode: "ethernet"\|"wifi"\|"wifi_ap", connected, wifiConnected, ethernetConnected, fallbackAP, …}` plus `ssid/rssi/ip/mac`, `ap{ssid,ip,stations}` or `eth{ip,mac,linkUp,speed,duplex}` |
| `/api/wifi/list` | GET | `{networks:[{ssid,rssi,channel,encrypted}]}`; 500 `{"error":"scan failed"}` |
| `/api/log/settings` | GET | `{host, uri, port, enabled}` |
| `/api/log/settings` | POST | JSON (max 1024 B): `host`/`uri` required and <64 chars, `port` 1–65535, optional bool `enabled`; host/uri/port persist, `enabled` is runtime-only and follows connectivity; 200 returns the state |
| `/healthcheck/healty` | GET | Always 200 `{"healty":true}` (the typo is the ed-healthcheck API) |
| `/healthcheck/ready` | GET | 200 `{"ready":true,"message":…,"warning":…,"warningMessage":…}` or 500 `ready:false`; only the MQTT service is registered, so an unconfigured/disconnected broker shows not ready |

Route registration order matters: `/api/config/backup` is registered before `/api/config`
because the shorter matcher is backward-compatible and would otherwise swallow it. Reboots
are deferred through `RebootAfterResponse` so the response reaches the client; do not call
`ESP.restart()` directly from a handler.

## Validation convention

- Firmware: `pio run -e faraday` must pass; the build uses `-Wshadow` and
  `CORE_DEBUG_LEVEL=5` (`platformio.ini`), so keep it warning-free. There is no lint/format
  config, no test framework and no CI.
- Frontend: `cd frontend && npm run build` (`tsc --noEmit && vite build`) must pass; it writes
  into `data/` with `emptyOutDir: true`.
- Hardware-dependent and **not verifiable locally**: OTA/espota, partition-table migration,
  LittleFS wear/space, LAN8720 PHY/clock, fallback AP timing, I2C expander presence, serial
  pin mux, buzzer/LED boot strapping, RF433/ETH clock interaction, and long-uptime timing.
  Say plainly what was not verified in the final report.
- After documentation or config changes, re-check pins against `src/defines.h`, routes
  against `src/web/handler.cpp` plus the `ed-*` route registrations, and all size numbers
  against `partitions.csv` and the build artifacts.

## Gotchas

- **Partition change = one USB flash + LittleFS wipe.** OTA cannot rewrite the partition
  table. The first USB flash (or any later table change) invalidates `/config.bin`; the
  device boots as `Faraday_<mac>` until reconfigured.
- `pio run -e faraday -t uploadfs` (and `pio run -e faraday_ota -t uploadfsota`) **erase the
  whole LittleFS** (`/config.bin` included). Back up first via `make backup` or
  `GET /api/config/backup`.
- In `platformio.ini`, `build_flags =` in an extending environment **replaces** the parent
  list rather than appending. `env:faraday_ota` intentionally does not redefine it; if you
  add flags there, copy the whole list or the parent flags disappear.
- **GPIO14 is a shared connector**: `SENSOR_BUS_PIN`, `DS18B20_PIN`, `DHT_PIN` and
  `LED_STRIP2_PIN` all alias it. Connect **one** device at a time (DS18B20 / DHT11 / DHT21 /
  LED strip #2); there is no multiplexer.
- **GPIO12 (`STATUS_LED_PIN`, WS2812 RGBW) and GPIO2 (`BUZZER_PIN`) are boot-strapping
  pins.** A LED strip or buzzer load present at boot can prevent the ESP32 from starting;
  verify the external circuit before enabling either. The only current buzzer use is the
  150 ms boot beep.
- `RF433_RX_PIN` is GPIO16, adjacent to the Ethernet 50 MHz clock output on GPIO17
  (`ETH_CLOCK_GPIO17_OUT`). Verify the schematic/PCB before using RF433 and Ethernet
  together; the RF433 domain is not implemented.
- `RS485_SPEED` (19200) and `GSM_SPEED` (115200) are placeholder bauds; `Serial2` on
  GPIO32/33 and `Serial1` on GPIO13/15 are initialized but no protocol runs. Do not treat
  them as a working RS485/GSM implementation.
- `cd frontend && npm run build` uses Vite `emptyOutDir: true` and **rewrites `data/`**,
  deleting untracked fixtures. Re-run `-t uploadfs` (or `make ui`/`make deploy`) to get the
  new bundle onto the device.
- The repo currently has **no commits**, so both `scripts/platformio_version.py` and the Vite
  config resolve the version to `unknown`; the panel footer shows `FW unknown` / `UI unknown`.
  After the first commit they show `<hash>` or `<tag>-<hash>[-dirty]`.
- The firmware exposes `/config.bin` both statically and via `/api/config`, and
  `/api/settings` returns the MQTT password in plaintext. Backups contain the same secrets.
  Treat all of them as sensitive; never commit `.env`, `build/deploy/` or backups.
- `/api/settings/mqtt` dereferences `stateTopic`, `commandTopic` and `mqttIsHADiscovery`
  without checking they were sent. Always send all eight fields (the panel does).
- `/api/config` and `/api/config/backup` only accept raw bodies (no multipart), and restore
  rejects archives whose `config.bin` version byte or CRC does not match the running
  `CURRENT_VERSION`. A restore reboots the device.
- `healthcheck/ready` is not ready until the MQTT service has passed at least one check; with
  no broker configured it stays 500 (early checks report
  `service success count less min sucess count`, later `mqtt is not connected`).
  `/healthcheck/healty` is the liveness endpoint and is always 200.
- PCF8574 probe failures at `0x24`/`0x22` are logged as warnings by design when no expanders
  are attached; there is no relay/input domain logic yet.
- `env:faraday_ota` without a command-line target may build with the dev fallback OTA
  password and falls back to `esptool`; any actual upload target requires `.env` and fails
  early if either key is missing. Never put real credentials in the repo.
- The default log endpoint (`192.168.1.2:5555/_bulk`) is a placeholder; change it in the Log
  tab. Logging is enabled only while the network is connected and flushes every 10 s.
- Library APIs change: read the checked-out sources under `.pio/libdeps/faraday/<lib>/src`
  instead of guessing. `data/` is generated; do not edit it by hand.

## Definition of Done

- `pio run -e faraday` succeeds with no new warnings; for UI changes
  `cd frontend && npm run build` also succeeds.
- Pins match `src/defines.h`; endpoints and response shapes match `src/web/handler.cpp` and
  the `ed-*` registration files; sizes match `partitions.csv` and the build artifacts.
- No secrets in the repo, logs, docs or commits; `.env` stays untracked.
- Config layout changes bump `CURRENT_VERSION` and add migration/backup compatibility.
- Hardware-dependent behavior is called out as unverified; no unit tests exist to run.
