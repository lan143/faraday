# AGENTS.md — Faraday

Operating manual for AI coding agents. Read this before editing. User-facing setup lives in
`README.md` (Russian); command-output hygiene in `RTK.md`.

## Project

Faraday is the **base controller skeleton** for a DIY ESP32 + LAN8720 board, modeled on
`prometey` and the same `ed-*` library family. It is intentionally not a finished controller
yet: it boots, mounts LittleFS, persists a raw `Config` in `/config.bin`, brings up Ethernet
(LAN8720) with Wi-Fi/AP fallback, connects to MQTT, creates one Home Assistant discovery
device, serves a Preact panel from LittleFS, exposes healthchecks and OTA, probes two PCF8574
expanders, reads a WB-MAP12E energy meter over Modbus RTU on RS-485, and emits one boot beep.

Two domains now exist: a **WB-MAP12E single-phase (channel 1 / L1)** energy meter exposing
voltage, current, active power, reactive power, frequency and a software-offset supplier
energy counter, plus CT-ratio and supplier-sync settings; and **relay control** — light and
ventilation on the KC868-A8S relay bank through the PCF8574 output expander at `0x24`.
There is still **no domain logic** for inputs (expander `0x22`), GSM, RF433, LED strips,
analog inputs, RS-485 devices other than the WB-MAP12E, or the buzzer beyond the boot beep.
Those pins and objects are reserved for the next waves; do not describe them as working
features. Target hardware is a generic 4 MB ESP32 + LAN8720 dev-board class;
`src/defines.h` declares model `ESP32-LAN8720`, with board revision **TBD**. PlatformIO board
profile is `esp32dev`.

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

The env also sets
`lib_ignore = ESPAsyncTCP, RPAsyncTCP`: those ESP8266/Raspberry Pi TCP stacks leak in
transitively through library manifests, and a clean dependency resolve breaks unless they are
excluded (`AsyncTCP` is the ESP32 stack). Keep both entries when editing `lib_deps`.

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
`0x50000` = 327,680 B (320 KiB). The current firmware is 1,175,472 B
(~1.12 MiB / ~1.18 MB); `data/` is ~148 KiB (`du -sk data`). `make` warns when `data/`
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
    ├── handler.h/.cpp       AsyncWebServer :80; static UI, settings/status/log/modbus/meter/controls routes
    ├── backup_specs.h       BackupFileSpec table + /api/config handler configs
    └── reboot_after_response.h  Deferred reboot after the HTTP response is flushed
frontend/                    Preact + TypeScript + Vite SPA sources (tabs incl. Modbus/Meter); npm run build -> data/
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
`ed-network`, `ed-config` and `ed-utils` packages via `file:../../…/frontend` dependencies;
the Modbus and Meter tabs (`frontend/src/pages/Modbus.tsx`, `Meter.tsx`) are local pages.

## Architecture

- Single-threaded cooperative Arduino loop. Globals are constructed at file scope in
  `src/main.cpp`: `configMgr` (`EDConfig::DataMgr<Config>` + `StorageLittleFS("/config.bin")`),
  `networkMgr`, `networkApi`, `mqtt`, `modbus` (`EDWB::WirenBoard` on `Serial2`), `healthCheck`,
  `discoveryMgr`, `map12e` (`EDWB::MAP12E*`), six `EDCommon::Sensor::Sensor*` supplier
  pointers (`supplierEnergy`, `…Voltage`, `…Current`, `…Power`, `…ReactivePower`,
  `…Frequency`), two `PCF8574`
  objects (`0x24` relay, `0x22` input), two `EDCommon::Relay::PCF8574P` objects
  (`ventilationRelay`, `lightRelay`, both over `relayExp`),
  `EDCommon::Light::Relay light` (wraps `lightRelay`), the `controlBus` semaphore and
  `Handler`.
- `setup()` order: random seed → `modbusBus` + `controlBus` FreeRTOS binary semaphores
  (create + give each, so both guards boot unlocked) → `Serial` (115200) → verbose esp_log →
  LittleFS mount
  (early return on failure) → config defaults → `configMgr.load()` → network logger init →
  `Serial2.begin(config->modbusSpeed, …)` (RS-485) + `modbus.init(15)` → `Serial1` (GSM
  placeholder) → `Wire` at 100 kHz → PCF8574 probes (relay probe result stored in the
  `relayExpPresent` flag) → `networkMgr.init(..., hasEth=true, ...)`
  → ArduinoOTA password/begin → MQTT init → network connect callback (logger + MQTT
  connect/disconnect) → healthcheck registers `mqtt` → network settings callback →
  `handler.init()` → HA discovery init + one `addDevice()` → `modbus.addMAP12E(config
  address)` + `handler.setMap12E()` → CT-ratio reconciliation (read the device ratio, write
  the stored one back only if it differs; `LOGW` when the meter is unreachable) → six sensor
  objects (`WBMAP12EEnergy` ch 1/L1, precision 2, 60 s, with the `energySyncValue`/
  `energyMeterBase` pointers; `WBMAP12EVoltage` prec 1, 10 s; `WBMAP12ECurrent` prec 2, 10 s;
  `WBMAP12EActivePower` prec 0, 10 s; local `Faraday::WBMAP12EReactivePower` prec 0, 10 s;
  `WBMAP12EFrequency` prec 2, 10 s), each with MQTT +
  discovery options → a `controlBus`-guarded block that runs only when `relayExpPresent`
  (probe result stored in a flag; when absent the block and the following
  `handler.setControls()` are skipped with a `LOGW`, so the handler pointers stay nullptr)
  (`xSemaphoreTake(controlBus, portMAX_DELAY)` — **never skipped** once entered, because
  skipping it would leave ventilation/light on uninitialized channels while the API is
  still wired to them) initializing
  `ventilationRelay` (MQTT + discovery) → `lightRelay` (channel only, no options) →
  `light` (MQTT + discovery), then `handler.setControls(&ventilationRelay, &light)` →
  `inited = true` → one 2700 Hz / 150 ms boot beep.
- `loop()` order: `RebootAfterResponse::update()` first, then `networkMgr.loop()`,
  `discoveryMgr.loop()`, `ArduinoOTA.handle()`, `healthCheck.loop()`, `modbus.loop()`,
  the six null-guarded sensor `update()` calls (inside the `modbusBus` block), a
  `controlBus`-guarded `ventilationRelay.update()` + `light.update()` block **outside**
  the `modbusBus` block, run only when `relayExpPresent` (the probe result stored in a
  flag — the relay/light objects stay uninitialized when the expander is absent, so the
  block is skipped entirely; otherwise 200 ms take, skipped on contention and retried next
  iteration;
  `Light::Relay::update()` also pumps the backing relay — never call `lightRelay.update()`
  directly), the electricity-status evaluation/publish
  (outside the `modbusBus` block — `getValue()` is not bus access), then
  `networkLogger.update()`. When `inited`
  is false only the deferred-reboot check runs. Modbus bus access is serialized between the
  loop task and the web handlers (AsyncTCP task) by a FreeRTOS binary semaphore
  `modbusBus` (created and initially given as one of the first `setup()` actions): `loop()`
  wraps `modbus.loop()` + the six `update()` calls in a `xSemaphoreTake(modbusBus, 200 ms)` /
  `xSemaphoreGive` pair and skips the whole bus-touching block on contention (sensors retry
  at their next interval), and the meter/modbus handlers in `src/web/handler.cpp` take the
  same semaphore through the RAII `ModbusGuard` (also 200 ms bounded).
  **Never block the loop**: no `delay()`, no long synchronous I/O; use
  `esp_timer_get_time()` for intervals. Relay/light `setState()` is queue-only and never
  needs the bus, so it is safe to call from the AsyncTCP task.
- `ed-*` roles (all fetched under `.pio/libdeps/faraday/`; read them before guessing APIs):
  - `ed-config` — `EDConfig::DataMgr<T>` + `StorageLittleFS<T>` (`/config.bin` = raw
    `sizeof(Config)` + little-endian CRC16 trailer), plus `ConfigFileHandler` and
    `ConfigBackupHandler` for `/api/config` and `/api/config/backup`.
  - `ed-network` — `NetworkMgr` (Ethernet + Wi-Fi STA/AP + fallback AP) and `NetworkApi`
    (`/api/network/settings`, `/api/network/status`, `/api/wifi/list`).
  - `ed-mqtt` — `EDMQTT::MQTT` (AsyncMqttClient, reconnect/stuck reset, `Ready`) and
    `EDMQTT::Consumer` for topic subscriptions. Faraday has no app-level consumers; the
    relay/light classes create their own internal command consumers during `init()`
    (auto-subscribed to their `.../set` topics).
  - `ed-utils` — `EDUtils::LogConfig`/`NetworkLogger`, `formatString`, `getMacAddress`,
    `getChipID`, `buildJson`, `LOGx` macros.
  - `ed-ha` — `EDHA::DiscoveryMgr` + `Device`; one device is created, and entities of three
    kinds register on it: the six WB-MAP12E sensors (unit/device class/state class), the
    ventilation **switch** and the light **light**.
  - `ed-healthcheck` — `Ready` interface + `HealthCheck`; only `mqtt` is registered.
  - `ed-wb` — `EDWB::WirenBoard` (Modbus RTU client over `Stream`) + device drivers; Faraday
    uses `MAP12E` (`getVoltage`/`getCurrent`/`getActivePower`/`getReactivePower`/
    `getFrequency`/`getForwardActiveEnergy`, `getCTTransformRatio`/`setCTTransformRatio`),
    channel 1 / L1.
  - `ed-common` — `EDCommon::Sensor::Sensor` base (precision, update interval, MQTT publish,
    HA discovery incl. `state_class`) and header-only `WBMAP12E*` subclasses. The energy
    sensor emulates a resettable counter with `energySyncValue` + (device − `energyMeterBase`).
    Also `EDCommon::Relay::PCF8574P` (channel + shared PCF8574 driver; active-low ON = `LOW`
    is hardcoded in it) and `EDCommon::Light::Relay` (light facade over a backing relay):
    their `init()` auto-subscribes the MQTT command topic and registers the HA switch/light
    entity when given MQTT/discovery options.
  - `ESPAsyncWebServer` — port 80, no authentication.
- Config flow: `Config` (`src/config.h`, `CURRENT_VERSION = 3`) holds network, MQTT,
  HA-discovery flag/prefix, command/state/status topics, log settings, and the Modbus/WB-MAP12E
  fields (`modbusSpeed` default 9600, `map12eAddress` default 1, `map12eCt1Ratio` default 0,
  `energySyncValue`, `energyMeterBase`). The MQTT portion is exposed at `GET /api/settings` and
  written by `POST /api/settings/mqtt`, which mutates the in-RAM `Config` and calls
  `configMgr.store()`; the Modbus and meter sections have their own JSON endpoints. The whole
  struct is persisted raw to `/config.bin` by `EDConfig::DataMgr<Config>`/`StorageLittleFS`
  (CRC16 trailer). Defaults are installed in
  `setup()`: AP SSID `Faraday_<MAC>`, MQTT topics `faraday/<chip>/state` and
  `faraday/<chip>/set`, electricity status topic `faraday/<chip>/status`, discovery prefix
  `homeassistant`, log host `192.168.1.2:5555/_bulk`.
  `load()` falls back to defaults and stores when the CRC/size is invalid. Changes are
  persisted immediately by their handlers; MQTT changes take effect after a reboot, network
  and log settings apply live, Modbus speed applies live (device register write on the old
  baud, then local `Serial2.begin`), the MAP12E address applies after a reboot, and meter
  CT-ratio/sync writes hit the device before being stored. There is **no migration layer**:
  a layout change requires bumping `CURRENT_VERSION`, so a v2 `/config.bin` fails the
  CRC/size check and is silently replaced by defaults, and v2 backups are rejected on restore.
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
  discovery after ~10 s and retries until the send function succeeds (unless disabled). The
  six sensor objects publish retained plain values on
  `faraday/<chip>/supplier_energy*/state` (`supplier_energy`, `…_voltage`, `…_current`,
  `…_power`, `…_reactive_power`, `…_frequency`) and register discovery entities on the single
  device: `measurement` state class for voltage/current/power/reactive power/frequency and
  `total_increasing` for the supplier energy counter. Ventilation and light use
  `faraday/<chip>/ventilation/state|set` and `faraday/<chip>/light/state|set`: commands are
  plain `on`/`off` (non-retained, auto-subscribed inside `init()`), state is published as
  non-retained JSON `{"enabled":"on"}` with a 60 s heartbeat, and each registers an entity on
  the same device — an HA **switch** for ventilation, an HA **light** for light. The backing
  `lightRelay` is initialized with no options, so it owns no topics and registers nothing.
- Electricity status: an `ElectricityStatus` enum (`OK`, `ON_BATTERY`; `ON_GENERATOR`/`FAIL`
  reserved for future generator/inverter logic and never entered) is derived from the L1
  voltage sensor with hysteresis — `OK` → `ON_BATTERY` at ≤0 V, `ON_BATTERY` → `OK` at >100 V,
  the 0–100 V band holds the current state. The retained plain-text payload (`OK`/`ON_BATTERY`)
  is published to `config->mqttStatusTopic` (default `faraday/<chipID>/status`) on the first
  valid meter reading and on every state change; a failed publish stays pending and is
  retried once MQTT reconnects. Nothing is published before the first valid reading.
- Logging: `LOGD/LOGI/LOGW/LOGE(tag, fmt, …)` from ed-utils; short tags (`"setup"`, `"main"`,
  `"network"`, …). `NetworkLogger` keeps two 16 KiB buffers, flushes the previous buffer every
  10 s while network is connected, and POSTs `text/plain` with `X-SYSTEM`/`X-INSTANCE`
  headers to the configured host/URI. The default log endpoint is a placeholder.

## HTTP API

ESPAsyncWebServer on port 80, **no authentication** (LAN-only device). Static files are
served from LittleFS root at `/` with `index.html`; `/config.bin` is also exposed as a static
file in addition to the `/api/config` download route. JSON responses use `application/json`.
Mutating config handlers reply `200 {}` on success, `422 {"message": …}` on validation error
and `500 {"message": …}` on storage failure unless noted; the Modbus, meter and controls
handlers are the exception — they reply `200` with the refreshed state. Those three endpoints
(like `/api/log/settings`) take JSON bodies; `/api/settings/mqtt` is urlencoded and the
config/backup routes take raw bodies.

| Route | Method | Notes |
|---|---|---|
| `/` | GET | LittleFS static UI, default `index.html` |
| `/config.bin` | GET | Raw persisted config (contains Wi-Fi/MQTT secrets) |
| `/api/settings` | GET | MQTT section: `mqttHost`, `mqttPort`, `mqttLogin`, `mqttPassword` (plaintext), `mqttIsHADiscovery`, `mqttHADiscoveryPrefix`, `mqttCommandTopic`, `mqttStateTopic`, `mqttStatusTopic` |
| `/api/settings/mqtt` | POST | Urlencoded. Requires `host`, `port`, `login`, `password`, `haDiscoveryPrefix` via `hasParam`; `stateTopic`, `commandTopic`, `mqttIsHADiscovery` are read **without** presence checks — omitting them crashes the device. `statusTopic` is optional (omitting it leaves the stored value unchanged). Lengths ≤63/≤31/≤31/≤63/≤63/≤63/≤63. Persists immediately; reboot to apply. UI also enforces port 1–65535; firmware parses base-10 and casts to `uint16_t` |
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
| `/api/settings/modbus` | GET | JSON `{modbusSpeed, map12eAddress}` (RS-485 speed, MAP12E unit id) |
| `/api/settings/modbus` | POST | JSON (max 1024 B), both fields required: `modbusSpeed` one of 9600/19200/38400/57600/115200, `map12eAddress` 1–247; speed applies live (device register write on the old baud, then `Serial2.begin`), address after reboot; a `modbusBus` guard timeout logs `modbus bus busy` and skips only the device write while `Serial2` still switches; 422 `{"message":"<field>: required\|invalid value"}`, 500 store failure; 200 returns the refreshed state |
| `/api/settings/meter` | GET | JSON `{ct1Ratio, energySyncValue, energyMeterBase, meterEnergy, supplierEnergy}`; the two live readings are `null` while the meter is unreachable or the bus guard times out (still 200) |
| `/api/settings/meter` | POST | JSON (max 1024 B), at least one of `ct1Ratio` (0–65535) / `energySyncValue` (≥0); device CT write and/or energy read happen **before** store, so 500 `{"message":"meter unreachable"}` aborts without persisting (a bus-guard timeout takes the same path); 422 field errors; 200 returns the refreshed state |
| `/api/controls` | GET | JSON `{"ventilation":{"enabled":bool\|null},"light":{"enabled":bool\|null}}`; a field is `null` when the live readback is unavailable because the 200 ms `controlBus` guard timed out (meter-null convention, still 200); 500 `{"message":"controls not initialized"}` before `handler.setControls()` wiring |
| `/api/controls` | POST | JSON (max 1024 B), at least one of `ventilation`/`light` (booleans): neither → 422 `{"message":"ventilation or light: required"}`, non-bool → 422 `{"message":"<field>: invalid value"}`; `setState()` only enqueues (never needs the bus), 200 echoes the requested values for touched fields while the untouched field is a readback or `null` on guard timeout; `500 {"message":"controls busy"}` if a command enqueue fails (full internal queue — rare); no config store, no reboot |
| `/healthcheck/healty` | GET | Always 200 `{"healty":true}` (the typo is the ed-healthcheck API) |
| `/healthcheck/ready` | GET | 200 `{"ready":true,"message":…,"warning":…,"warningMessage":…}` or 500 `ready:false`; only the MQTT service is registered, so an unconfigured/disconnected broker shows not ready |

Route registration order matters: `/api/config/backup` is registered before `/api/config`
because the shorter matcher is backward-compatible and would otherwise swallow it. Likewise
`/api/settings/modbus` and `/api/settings/meter` are registered before the plain
`/api/settings` matcher. `/api/controls` is a distinct prefix with no matcher-order
interaction with `/api/settings`, so it has no ordering constraint. Reboots are deferred
through `RebootAfterResponse` so the response
reaches the client; do not call `ESP.restart()` directly from a handler.

## Validation convention

- Firmware: `pio run -e faraday` must pass; the build uses `-Wshadow` and
  `CORE_DEBUG_LEVEL=5` (`platformio.ini`), so keep it warning-free. There is no lint/format
  config, no test framework and no CI.
- Frontend: `cd frontend && npm run build` (`tsc --noEmit && vite build`) must pass; it writes
  into `data/` with `emptyOutDir: true`.
- Hardware-dependent and **not verifiable locally**: OTA/espota, partition-table migration,
  LittleFS wear/space, LAN8720 PHY/clock, fallback AP timing, I2C expander presence, serial
  pin mux, buzzer/LED boot strapping, RF433/ETH clock interaction, the RS-485 bus /
  auto-direction transceiver assumption, WB-MAP12E reachability/CT scaling, and long-uptime
  timing. Say plainly what was not verified in the final report.
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
- `RS485_SPEED` no longer exists; `Serial2` on GPIO32/33 runs Modbus RTU at the configured
  `modbusSpeed` (9600…115200). There is **no DE/RE direction pin** in `src/defines.h` — the
  code assumes an auto-direction RS-485 transceiver; verify the hardware before relying on it.
  `Serial1` on GPIO13/15 and `GSM_SPEED` (115200) are still placeholders — no GSM protocol
  runs. Do not treat GSM as implemented.
- WB-MAP12E energy counters are **read-only and can never be reset** by Modbus. The supplier
  total is emulated: `energySyncValue + (deviceEnergy − energyMeterBase)`. A UI "sync" stores
  the entered supplier reading and the device counter at that moment — do not "fix" a wrong
  counter by looking for a reset register.
- Changing the CT ratio changes how the meter scales current/power/energy, so it invalidates
  the energy history used by the sync offset; re-sync the supplier energy after a ratio change.
- The boot CT-ratio reconciliation overwrites a meter-side ratio that differs from the stored
  config value (e.g. after a config reset a hand-set meter ratio becomes 0) — set the ratio
  via the Meter tab so it is persisted in config and reconciled back to the meter.
- Modbus reads run synchronously in the loop task (bounded ~15 ms per transaction timeout,
  worst-case single-iteration stall when the meter is absent ~135 ms); within the
  never-block-the-loop rule this is the accepted cost — the bus is serialized by the
  `modbusBus` semaphore rather than made asynchronous.
- `POST /api/settings/modbus` writes the new speed to the bus (ed-wb broadcasts the speed
  register to Modbus address 0) **before** switching the local `Serial2` baud; the address
  change only takes effect after a reboot. The endpoint stores config first, so a failed device
  write logs a warning but is not rolled back. If the bus guard times out (`modbus bus busy`
  warning) the device-side write is skipped but `Serial2` still switches to the persisted
  speed; nothing rewrites the meter's speed register at boot, so the device side stays at the
  old baud until the speed write is re-applied.
- `CURRENT_VERSION` is 3 with **no migration layer**: an old v2 `/config.bin` fails the
  CRC/size check and is silently replaced by defaults, and v2 backups are rejected on restore
  (member size check, with the version byte as a second guard).
- `ed-wb` and `ed-common` are git-pinned (`ed-wb#dfa808b1…`, `ed-common#0.6.0`); the WB-MAP12E
  support and the sensor family ship in those releases; `lib_ignore = ESPAsyncTCP, RPAsyncTCP`
  must stay or a clean resolve pulls the wrong TCP stacks.
- `cd frontend && npm run build` uses Vite `emptyOutDir: true` and **rewrites `data/`**,
  deleting untracked fixtures. Re-run `-t uploadfs` (or `make ui`/`make deploy`) to get the
  new bundle onto the device.
- Both `scripts/platformio_version.py` and the Vite config derive the version from git; with
  only the initial commit and a dirty tree they resolve to `<hash>-dirty`. Before the first
  commit they resolved to `unknown`, and the panel footer showed `FW unknown` / `UI unknown`.
- The firmware exposes `/config.bin` both statically and via `/api/config`, and
  `/api/settings` returns the MQTT password in plaintext. Backups contain the same secrets.
  Treat all of them as sensitive; never commit `.env`, `build/deploy/` or backups.
- `/api/settings/mqtt` dereferences `stateTopic`, `commandTopic` and `mqttIsHADiscovery`
  without checking they were sent. Always send all nine fields (the panel does; the firmware
  treats `statusTopic` as optional, but the panel always sends it).
- `/api/config` and `/api/config/backup` only accept raw bodies (no multipart), and restore
  rejects archives whose `config.bin` version byte or CRC does not match the running
  `CURRENT_VERSION`. A restore reboots the device.
- `healthcheck/ready` is not ready until the MQTT service has passed at least one check; with
  no broker configured it stays 500 (early checks report
  `service success count less min sucess count`, later `mqtt is not connected`).
  `/healthcheck/healty` is the liveness endpoint and is always 200.
- PCF8574 probe failures at `0x24`/`0x22` are logged as warnings by design when no expanders
  are attached; with `0x24` missing the relay domain is disabled at boot — relay/light init
  and handler wiring are skipped, no MQTT subscriptions or HA entities are registered, and
  `/api/controls` replies 500 `{"message":"controls not initialized"}` (because a failed
  PCF8574 read returns 0, which the active-low driver would report as ON), while the input
  expander `0x22` still has no domain logic attached.
- Relays are **ALL OFF after every boot/reboot**: `relayExp.begin()` writes `0xFF` to the
  bank before any other write, and relay state is intentionally not persisted (no `Config`
  fields added, `CURRENT_VERSION` stays 3) — there is no startup-state persistence by design.
- The K3 → channel 2 (ventilation) / K4 → channel 3 (light) mapping and the active-low
  ON = `LOW` follow the KC868-A8S assumption and are **hardware-unverified**; the channel
  numbers live only in `src/defines.h` (`VENTILATION_RELAY_CHANNEL`, `LIGHT_RELAY_CHANNEL`) —
  change them there only (the active-low polarity is hardcoded in `EDCommon::Relay::PCF8574P`).
- I2C expander access is serialized by `controlBus` (200 ms bounded) between the loop task and
  the web handlers: a contended `GET`/`POST /api/controls` readback returns `null` values, not
  an error (the `POST` command itself still applies — `setState()` only enqueues).
- `lightRelay` is initialized deliberately with **no MQTT/discovery options** so it does not
  register a duplicate HA switch next to the light entity; only the `light` facade owns the
  topics.
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
