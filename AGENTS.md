# AGENTS.md — Faraday

Operating manual for AI coding agents. Read this before editing. User-facing setup lives in
`README.md` (Russian); command-output hygiene in `RTK.md`.

## Project

Faraday is the **base controller skeleton** for a DIY ESP32 + LAN8720 board, modeled on
`prometey` and the same `ed-*` library family. It is intentionally not a finished controller
yet: it boots, mounts LittleFS, persists a raw `Config` in `/config.bin`, brings up Ethernet
(LAN8720) with Wi-Fi/AP fallback, connects to MQTT, creates one Home Assistant discovery
device, serves a Preact panel from LittleFS, exposes healthchecks and OTA, drives the
single-pixel status LED as a health indicator (green = ok, yellow = warning, red = error),
probes two PCF8574 expanders, reads a WB-MAP12E energy meter over Modbus RTU on RS-485, reads
a JBD BMS over BLE, and emits one boot beep.

Five domains now exist: a **WB-MAP12E single-phase (channel 1 / L1)** energy meter exposing
voltage, current, active power, reactive power, frequency and a software-offset supplier
energy counter, plus CT-ratio and supplier-sync settings; **relay control** — light and
ventilation on the KC868-A8S relay bank through the PCF8574 output expander at `0x24`; a
**manual mains/generator changeover switch** driving board relays K2+K5 through the same
expander (one HA switch, `faraday/<chip>/generator/state|set`; ON = generator, both relays
energized); and optional **Anenji 4200 hybrid inverter telemetry** over the same RS-485 bus
(12 numeric sensors + one battery-charging binary_sensor + four text-state mode/priority
sensors — work mode, output mode, output priority, charge priority — read-only, no inverter
control, Modbus slave address in config, disabled by default with `anenjiAddress = 0`); and
**JBD BMS telemetry over BLE** (14 aggregate numeric sensors, one voltage sensor per
configured cell, four binary sensors — charging/discharging/balancing/fault — and three
text-state sensors — status/errors/device model). The BMS MAC is entered manually or picked
from a built-in BLE scan, and a configurable 1–20 cell count makes a 12S pack on a
20S-capable BMS publish only the real cells. The only BMS write is the operator-triggered
factory/EEPROM-mode counter clear (reg `0x00` enter, reg `0x01` exit-with-clear; the sequence
is hardware-verified on `SP22S003AP21S50A` (FW 7.6)); commands may require the JBD app-key
handshake, and there are no
MOSFET/balancer writes. There is **no automatic** network↔generator switching yet — `src/automation/` is where that
logic will go.
There is still **no domain logic** for inputs (expander `0x22`), GSM, RF433, LED strips,
analog inputs, RS-485 devices other than the WB-MAP12E and the Anenji 4200, or the buzzer
beyond the boot beep. Those pins and objects are reserved for the next waves; do not describe
them as working features. Target hardware is a generic 4 MB ESP32 + LAN8720 dev-board class;
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

`lib_deps` also includes `h2zero/NimBLE-Arduino@==1.4.3` for the BMS BLE domain and
`adafruit/Adafruit NeoPixel@==1.12.3` for the single-pixel status LED (`STATUS_LED_PIN`
GPIO12, GRBW type); the `lib_ignore` rule above is unchanged.

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
`0x50000` = 327,680 B (320 KiB). The current firmware is 1,495,120 B
(~1.43 MiB / ~1.50 MB, 78.7% of an app slot); `data/` is ~164 KiB (`du -sk data`). `make` warns when `data/`
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
├── bms/
│   ├── bms_types.h          Plain snapshot structs shared by the BLE task, codec and sensors
│   ├── bms_protocol.h/.cpp  Pure JBD codec: frames, CRC, split-frame assembler, label formatting
│   ├── bms_client.h/.cpp    NimBLE client + dedicated "bms" task, snapshot mutex and BLE scan
│   ├── bms_sensors.h/.cpp   Faraday numeric/binary/text HA sensor classes over the snapshot
│   └── bms.h/.cpp           Facade like automation.cpp: client singleton + sensor wiring
├── health/
│   ├── device_health.h/.cpp Three ed-healthcheck Ready adapters: self-throttled Modbus probes for the WB-MAP12E and Anenji 4200, BMS snapshot warnings/faults
│   └── status_led.h/.cpp    Single-pixel health LED: green ok / yellow warning / red error, painted only on change
├── automation/
│   └── automation.h/.cpp    Mains/generator changeover: two MQTT-less PCF8574P backing relays + Relay-derived facade owning topics/discovery; future switching logic
├── sensor/
│   ├── wb_map12e_reactive_power.h  Local Faraday::WBMAP12EReactivePower (not yet in ed-common)
│   ├── anenji_sensor.h      Faraday::AnenjiSensor: 12 read-only Anenji 4200 telemetry quantities on EDCommon::Sensor
│   ├── anenji_charging_state.h/.cpp  Faraday::BatteryChargingState: HA binary_sensor from register 232 sign
│   └── anenji_mode_sensor.h/.cpp  Faraday::AnenjiModeSensor: four plain text-state HA sensors (work/output mode, output/charge priority) + single-source `label()`
└── web/
    ├── handler.h/.cpp       AsyncWebServer :80; static UI, settings/status/log/modbus/meter/anenji/bms/controls routes
    ├── backup_specs.h       BackupFileSpec table + /api/config handler configs
    └── reboot_after_response.h  Deferred reboot after the HTTP response is flushed
frontend/                    Preact + TypeScript + Vite SPA sources (tabs incl. Modbus/Meter/Anenji); npm run build -> data/
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
the Modbus, Meter, Anenji and BMS tabs (`frontend/src/pages/Modbus.tsx`, `Meter.tsx`,
`Anenji.tsx`, `Bms.tsx`) are local pages.

## Architecture

- Single-threaded cooperative Arduino loop. Globals are constructed at file scope in
  `src/main.cpp`: `configMgr` (`EDConfig::DataMgr<Config>` + `StorageLittleFS("/config.bin")`),
  `networkMgr`, `networkApi`, `mqtt`, `modbus` (`EDWB::WirenBoard` on `Serial2`), `healthCheck`,
  `discoveryMgr`, `map12e` (`EDWB::MAP12E*`), six `EDCommon::Sensor::Sensor*` supplier
  pointers (`supplierEnergy`, `…Voltage`, `…Current`, `…Power`, `…ReactivePower`,
  `…Frequency`), `anenji` (`EDWB::ANENJI4200*`) + twelve `Faraday::AnenjiSensor*` telemetry
  pointers + `Faraday::BatteryChargingState anenjiCharging` + four `Faraday::AnenjiModeSensor`
  objects (`anenjiWorkModeSensor`, `anenjiOutputModeSensor`, `anenjiOutputPrioritySensor`,
  `anenjiChargePrioritySensor`), two `PCF8574`
  objects (`0x24` relay, `0x22` input), two `EDCommon::Relay::PCF8574P` objects
  (`ventilationRelay`, `lightRelay`, both over `relayExp`),
  `EDCommon::Light::Relay light` (wraps `lightRelay`), the `controlBus` semaphore,
  `Handler`, `Faraday::Health::StatusLed statusLed`, and the optional health adapters
  (`meterHealth`, `inverterHealth`, `bmsHealth`; see `src/health/`). The mains/generator changeover objects (two `EDCommon::Relay::PCF8574P` backing
  relays over `relayExp` and a `Relay`-derived `GeneratorChangeover` facade) live at file
  scope in `src/automation/automation.cpp`, which `extern`s `relayExp` — not in `main.cpp`.
  The BMS objects (NimBLE client, dedicated task state, snapshot cache and sensor vectors) live
  at file scope in `src/bms/bms.cpp`, again not in `main.cpp`; `main.cpp` only calls
  `Faraday::Bms::init()` / `Faraday::Bms::update()` and `handler.setBms()`.
- `setup()` order: random seed → `modbusBus` + `controlBus` FreeRTOS binary semaphores
  (create + give each, so both guards boot unlocked) → `Serial` (115200) → runtime esp_log level
  set to INFO (see the NetworkLogger gotcha) →
  LittleFS mount
  (early return on failure) → config defaults → `configMgr.load()` → network logger init →
  `Serial2.begin(config->modbusSpeed, …)` (RS-485) + `modbus.init(15)` → `Serial1` (GSM
  placeholder) → `Wire` at 100 kHz → PCF8574 probes (relay probe result stored in the
  `relayExpPresent` flag) → `networkMgr.init(..., hasEth=true, ...)`
  → ArduinoOTA password/begin → MQTT init → network connect callback (logger + MQTT
  connect/disconnect) → healthcheck registers `mqtt`, `MeterHealth`, optional `InverterHealth`
  and `BmsHealth` (in that order, all before `handler.init()` starts the web server because
  the ed-healthcheck service list is not locked; disabled-at-boot devices get no service;
  adapters hold device-pointer slots and resolve them lazily because `map12e`/`anenji`/the
  BMS client are assigned later in `setup()`) → network settings callback →
  `handler.init()` → HA discovery init + one `addDevice()` → `modbus.addMAP12E(config
  address)` + `handler.setMap12E()` → `anenji = config->anenjiAddress > 0 ?
  modbus.addANENJI4200(addr) : nullptr` (`LOGI` enabled/disabled) + `handler.setAnenji()` →
  CT-ratio reconciliation (read the device ratio, write
  the stored one back only if it differs; `LOGW` when the meter is unreachable) → six sensor
  objects (`WBMAP12EEnergy` ch 1/L1, precision 2, 60 s, with the `energySyncValue`/
  `energyMeterBase` pointers; `WBMAP12EVoltage` prec 1, 10 s; `WBMAP12ECurrent` prec 2, 10 s;
  `WBMAP12EActivePower` prec 0, 10 s; local `Faraday::WBMAP12EReactivePower` prec 0, 10 s;
  `WBMAP12EFrequency` prec 2, 10 s), each with MQTT +
  discovery options → when `anenji != nullptr`: twelve `Faraday::AnenjiSensor` objects
  (precision 1 for V/A, 0 for W, intervals staggered `10000 + i*800` ms → 10 000–18 800 ms
  to cap per-pass bus bursts when the inverter is absent, MQTT + discovery, names
  "Mains/Output/Battery/PV voltage/current/power") → `anenjiCharging.setDevice()` +
  `init()` (binary_sensor; disabled together with the sensors when `anenjiAddress == 0`, so
  nothing is created or wired) → four `AnenjiModeSensor` `setDevice()` + `init(..., index
  0..3)` calls (plain text-state HA sensors; first read staggered `800 * index` ms) →
  `Faraday::Bms::init(&mqtt, &discoveryMgr, device, mqttPrefix)` +
  `handler.setBms(Faraday::Bms::client())` (starts the `"bms"` task; with an empty BMS MAC it
  creates no sensors and the BLE stack stays dormant) → a `controlBus`-guarded block that
  runs only when `relayExpPresent`
  (probe result stored in a flag; when absent the block and the following
  `handler.setControls()` are skipped with a `LOGW`, so the handler pointers stay nullptr)
  (`xSemaphoreTake(controlBus, portMAX_DELAY)` — **never skipped** once entered, because
  skipping it would leave ventilation/light/generator on uninitialized channels while the API is
  still wired to them) initializing
  `ventilationRelay` (MQTT + discovery) → `lightRelay` (channel only, no options) →
  `light` (MQTT + discovery) → `Faraday::Automation::init(&mqtt, &discoveryMgr, device,
  mqttPrefix)` (the two backing changeover relays first with empty options, then the facade
  with `withMQTT(..., "Generator")` + `withDiscovery`, which auto-subscribes
  `faraday/<chip>/generator/set` and registers one HA switch on the same device), then
  `handler.setControls(&ventilationRelay, &light, Faraday::Automation::changeover())` →
  `inited = true` → `statusLed.begin()` → one 2700 Hz / 150 ms boot beep.
- `loop()` order: `RebootAfterResponse::update()` first, then `networkMgr.loop()`,
  `discoveryMgr.loop()`, `ArduinoOTA.handle()`, `healthCheck.loop()`,
  `statusLed.update(mqtt.isConnected(), meterHealth, inverterHealth, bmsHealth)` (reads the
  adapters' cached `level()` getters only and paints only on change/first), `modbus.loop()`,
  the six null-guarded supplier `update()` calls plus the twelve null-guarded Anenji float
  sensor updates, `anenjiCharging.update()` and the four `anenji != nullptr`-guarded
  `AnenjiModeSensor::update()` calls (all 23 inside the `modbusBus` block; each object gates
  its own Modbus read internally — floats staggered 10 000–18 800 ms, charging 10 s, work
  mode 10 s, the three setting modes 30 s, mode first reads staggered `800 * index` ms), a
  `controlBus`-guarded `ventilationRelay.update()` + `light.update()` +
  `Faraday::Automation::update()` block **outside**
  the `modbusBus` block, run only when `mqtt.isConnected()` and `relayExpPresent` (the probe
  result stored in a flag — the relay/light/generator objects stay uninitialized when the
  expander is absent, so the block is skipped entirely; otherwise 200 ms take, skipped on
  contention and retried next iteration; commands queue from HTTP `setState` while the broker
  is down and drain on reconnect;
  `Light::Relay::update()` also pumps the backing relay — never call `lightRelay.update()`
  directly; `Automation::update()` pumps the changeover facade and then both backing relays
  in the same pass), `Faraday::Bms::update(mqttUp)` (copies the mutex-guarded BLE snapshot
  into a loop-task cache and pumps the BMS sensor objects only when the BLE link is
  connected and MQTT is ready; no RS-485 or I2C access), then the
  electricity-status evaluation/publish
  (outside the `modbusBus` block — `getValue()` is not bus access), then
  `networkLogger.update()`. When `inited`
  is false only the deferred-reboot check runs. Modbus bus access is serialized between the
  loop task and the web handlers (AsyncTCP task) by a FreeRTOS binary semaphore
  `modbusBus` (created and initially given as one of the first `setup()` actions): `loop()`
  wraps `modbus.loop()` + the six supplier and seventeen inverter `update()` calls in a
  `xSemaphoreTake(modbusBus, 200 ms)` /
  `xSemaphoreGive` pair (the sensor updates are additionally gated on `mqtt.isConnected()` so
  an offline broker cannot produce a failed-publish log storm) and skips the whole
  bus-touching block on contention (sensors retry
  at their next interval), and the meter/modbus/anenji handlers in `src/web/handler.cpp` take the
  same semaphore through the RAII `ModbusGuard` (also 200 ms bounded).
  **Never block the loop**: no `delay()`, no long synchronous I/O; use
  `esp_timer_get_time()` for intervals. Relay/light `setState()` is queue-only and never
  needs the bus, so it is safe to call from the AsyncTCP task.
- BMS/BLE threading: every NimBLE call runs only in the dedicated `"bms"` FreeRTOS task
  created by `Client::start()`; the loop task and AsyncTCP handlers only take the client's
  mutex-guarded snapshot/metadata (small plain-data copies, so no 200 ms bus-style guard is
  needed). BLE init is lazy — the stack starts on the first scan request or the first
  non-empty MAC, never at idle boot. Failed connections retry with a 5 s → 60 s exponential
  backoff. On connect the task performs the JBD app-key handshake on the same 0xFF02
  characteristic (`FF AA` dialect; app key `000000`, password default `123123`, published
  root-password constant). The app-key step has a 3 s response window; a pack that ignores the
  dialect is remembered as unsupported for that address (no retry until the address changes or
  a reboot). The following password/root steps keep a 10 s per-step timeout, and a failure
  only marks the auth state, never blocking telemetry. A connected session reads
  0x03 → 0x04 → 0xAA every 10 s and
  reads model 0x05 once per connection; three consecutive cycles without a valid frame
  disconnect and retry. The session additionally executes at most one pending
  failed-event-counter clear right after the 0xAA read (a pending clear also wakes the poll
  wait early). The clear enters factory mode (`DD 5A 00 02 56 78 FF 30 77`), waits ~200 ms,
  then writes the exit-with-clear frame (`DD 5A 01 02 28 28 FF AD 77`); no 0x03/0x04/0xAA
  read is issued mid-sequence and the normal poll resumes afterwards. Response statuses are
  surfaced (`0x80` when the pack is not in factory mode), and counters are optimistically
  zeroed on acked/sent while the next 0xAA read restores the device truth within ≤10 s. A scan
  disconnects the BMS, runs ~10 s, and keeps up to 20 results in RAM. BLE init is additionally
  gated on `BMS_MIN_FREE_HEAP_FOR_BLE` (now 60000) so the Wi-Fi fallback can never be
  OOM-killed by the BMS domain (deferred BLE, logged, retried with the reconnect backoff);
  the floor was lowered from 120000 because the app never reaches that much free heap after
  `setup()` (~75 KB measured on hardware), and the real BLE-up heap delta is logged
  ("BLE up, heap X->Y"). `platformio.ini` also pins
  `-D CONFIG_ASYNC_TCP_STACK_SIZE=8192` (16→8 KiB) to reclaim heap for BLE.
- `ed-*` roles (all fetched under `.pio/libdeps/faraday/`; read them before guessing APIs):
  - `ed-config` — `EDConfig::DataMgr<T>` + `StorageLittleFS<T>` (`/config.bin` = raw
    `sizeof(Config)` + little-endian CRC16 trailer), plus `ConfigFileHandler` and
    `ConfigBackupHandler` for `/api/config` and `/api/config/backup`.
  - `ed-network` — `NetworkMgr` (Ethernet + Wi-Fi STA/AP + fallback AP) and `NetworkApi`
    (`/api/network/settings`, `/api/network/status`, `/api/wifi/list`).
  - `ed-mqtt` — `EDMQTT::MQTT` (AsyncMqttClient, reconnect/stuck reset, `Ready`) and
    `EDMQTT::Consumer` for topic subscriptions. Faraday has no app-level consumers; the
    relay/light/generator classes create their own internal command consumers during `init()`
    (auto-subscribed to their `.../set` topics).
  - `ed-utils` — `EDUtils::LogConfig`/`NetworkLogger`, `formatString`, `getMacAddress`,
    `getChipID`, `buildJson`, `LOGx` macros.
  - `ed-ha` — `EDHA::DiscoveryMgr` + `Device`; one device is created, and entities of five
    kinds register on it: the WB-MAP12E, Anenji and BMS numeric sensors (unit/device
    class/state class), the four Anenji mode sensors and three BMS text sensors as plain
    text-state `sensor`s (state topic + `{{ value }}` value template — no unit/device
    class/state class, `EDHA::Sensor` emits those only when set), the ventilation and
    generator **switches**, the light **light**, and the battery-charging/BMS
    **binary_sensors**.
  - `ed-healthcheck` — `Ready` interface + `HealthCheck`. Registered services, in order:
    `mqtt` always, then `MeterHealth`, `InverterHealth` (only when `anenji != nullptr` at
    boot) and `BmsHealth` (only when a BMS MAC is configured at boot). The device adapters
    live in `src/health/`.
  - `ed-wb` — `EDWB::WirenBoard` (Modbus RTU client over `Stream`) + device drivers; Faraday
    uses `MAP12E` (`getVoltage`/`getCurrent`/`getActivePower`/`getReactivePower`/
    `getFrequency`/`getForwardActiveEnergy`, `getCTTransformRatio`/`setCTTransformRatio`),
    channel 1 / L1, and `ANENJI4200` (read-only `getMainsVoltage`/`getMainsPower`/
    `getOutputVoltage`/`getOutputCurrent`/`getOutputActivePower`/`getBatteryVoltage`/
    `getBatteryCurrent`/`getBatteryPower`/`getPvVoltage`/`getPvCurrent`/`getPvPower`/
    `getBatteryCurrentFiltered` — registers 202/204/210/211/213/215/216/217/219/220/223/232,
    no mains-current register).
  - `ed-common` — `EDCommon::Sensor::Sensor` base (precision, update interval, MQTT publish,
    HA discovery incl. `state_class`) and header-only `WBMAP12E*` subclasses plus the local
    header-only `Faraday::` subclasses `WBMAP12EReactivePower` and `AnenjiSensor`. The energy
    sensor emulates a resettable counter with `energySyncValue` + (device − `energyMeterBase`).
    Also `EDCommon::Relay::PCF8574P` (channel + shared PCF8574 driver; active-low ON = `LOW`
    is hardcoded in it) and `EDCommon::Light::Relay` (light facade over a backing relay):
    their `init()` auto-subscribes the MQTT command topic and registers the HA switch/light
    entity when given MQTT/discovery options.
  - `NimBLE-Arduino` — BLE stack used only by `src/bms/` (JBD client, characteristic
    notifications, scan); no BLE calls run outside the `"bms"` task.
  - `ESPAsyncWebServer` — port 80, no authentication.
- Config flow: `Config` (`src/config.h`, `CURRENT_VERSION = 5`) holds network, MQTT,
  HA-discovery flag/prefix, command/state/status topics, log settings, the
  Modbus/WB-MAP12E/Anenji fields (`modbusSpeed` default 9600, `map12eAddress` default 1,
  `map12eCt1Ratio` default 0, `anenjiAddress` default 0 = inverter disabled,
  `energySyncValue`, `energyMeterBase`) and the BMS fields (`bmsMacAddress`, default `""` =
  disabled, and `bmsCellCount`, default 12, valid 1..20). The MQTT portion is exposed at `GET /api/settings` and
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
  baud, then local `Serial2.begin`), the MAP12E and Anenji addresses apply after a reboot,
  and meter CT-ratio/sync writes hit the device before being stored. BMS MAC/cell count apply
  live to BLE polling after `POST /api/bms/settings`, but BMS MQTT/HA entities (including the
  number of cell entities) are created only at boot, so a reboot is required for discovery
  changes. There is **no migration layer**: a layout change requires bumping
  `CURRENT_VERSION`, so a pre-v5 `/config.bin` fails the CRC/size check and is silently
  replaced by defaults, and pre-v5 backups are rejected on restore.
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
  The generator changeover uses `faraday/<chip>/generator/state|set`: commands are plain
  `on`/`off` (non-retained; `on` = generator mode with both changeover relays energized,
  `off` = mains with both de-energized), state is published as non-retained JSON
  `{"enabled":"on"|"off"}` with a 60 s heartbeat, and the facade registers one HA **switch**
  ("Generator") on the same device. The two backing changeover relays are initialized with
  empty options, so they own no topics and register nothing; the boot default is mains because
  `relayExp.begin()` leaves the bank all-OFF and the facade seeds its state from that
  hardware readback. The twelve Anenji sensors publish retained plain values with a 60 s
  heartbeat on
  `faraday/<chip>/{mains_voltage,mains_current,mains_power,output_voltage,output_current,
  output_power,battery_voltage,battery_current,battery_power,pv_voltage,pv_current,
  pv_power}/state` and register as `measurement`-state-class numeric sensors on the same
  device; the derived `mains_current` (mains power / voltage, PF = 1 — no register exists)
  publishes like any normal sensor. `BatteryChargingState` registers one HA
  **binary_sensor** "Battery charging" (`device_class battery_charging`, `unique_id
  battery_charging_faraday_<chipID>`) and publishes retained `ON`/`OFF` on
  `faraday/<chip>/battery_charging/state`: `ON` = filtered battery current (register 232,
  + charging / − discharging) > 0, `< 0` → `OFF`, 0/failed holds the last state; published on
  change with a 60 s heartbeat, failed publishes stay pending and are retried, and nothing is
  published before the first non-zero valid read. Four `AnenjiModeSensor` objects publish
  retained human-readable label strings on
  `faraday/<chip>/{work_mode,output_mode,output_priority,charge_priority}/state` and
  register plain text-state HA sensors on the same device; labels come from the single-source
  `Faraday::AnenjiModeSensor::label` — WorkMode 0..6 → `Power on`/`Standby`/`Mains`/
  `Off grid`/`Bypass`/`Charging`/`Fault`, OutputMode 0..4 → `Single`/`Parallel`/
  `Three-phase L1/L2/L3`, OutputPriority 0..3 → `Mains-PV-Battery`/
  `PV-Mains-Battery (inverter)`/`PV-Battery-Mains`/`PV-Mains-Battery (mains)`, ChargePriority
  0..3 → `Mains preferred`/`PV preferred`/`PV equal mains`/`PV only`, unmapped → `Unknown`;
  published on change with a 60 s retained heartbeat, a failed read holds the last label,
  failed publishes stay pending and are retried, and nothing is published before the first
  valid read. Work mode (register 201) is polled every 10 s, the three setting registers
  (output mode 300, output priority 301, charge priority 331) every 30 s. When a BMS MAC is
  configured at boot, the BMS domain registers 14 numeric `measurement`-class sensors on
  `faraday/<chip>/bms_{state_of_charge,total_voltage,current,power,capacity_remaining,
  nominal_capacity,charging_cycles,min_cell_voltage,max_cell_voltage,avg_cell_voltage,
  delta_cell_voltage,temperature_1,temperature_2,temperature_3}/state` (Ah counters and the
  cycle count are plain `measurement`; voltage precision 2–3, current 2, power 1), one
  `faraday/<chip>/bms_cell_<n>_voltage/state` per configured cell (precision 3, only 1..
  `bmsCellCount`), four retained `ON`/`OFF` binary_sensors `bms_charging` / `bms_discharging`
  / `bms_balancing` / `bms_fault` (publish on change + 60 s heartbeat, silent before the first
  valid frame, hold the last value on a failed read), and three plain text-state sensors
  `bms_status` / `bms_errors` / `bms_device_model` (same publish conventions). With an empty
  MAC the domain creates zero BMS topics and entities. `bms_fault` reports any non-zero
  error counter as ON, while `BmsHealth` treats only the live protection bitmask as a hard
  fault and reports the latched counters as a warning; JBD keeps those counters as
  historical event records.
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
and `500 {"message": …}` on storage failure unless noted; the Modbus, meter, BMS-settings
and controls handlers are the exception — they reply `200` with the refreshed state. Those
endpoints (like `/api/log/settings`) take JSON bodies; `/api/settings/mqtt` is urlencoded and
the config/backup routes take raw bodies.

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
| `/api/settings/modbus` | GET | JSON `{modbusSpeed, map12eAddress, anenjiAddress}` (RS-485 speed, MAP12E unit id, ANENJI 4200 address; 0 = inverter disabled) |
| `/api/settings/modbus` | POST | JSON (max 1024 B), all three fields required: `modbusSpeed` one of 9600/19200/38400/57600/115200, `map12eAddress` 1–247, `anenjiAddress` 0–247 (0 = disabled); speed applies live (device register write on the old baud, then `Serial2.begin`), both addresses take effect only after a reboot; a `modbusBus` guard timeout logs `modbus bus busy` and skips only the device write while `Serial2` still switches; 422 `{"message":"<field>: required\|invalid value"}` (incl. `anenjiAddress: required\|invalid value`), 500 store failure; 200 returns the refreshed state |
| `/api/settings/meter` | GET | JSON `{ct1Ratio, energySyncValue, energyMeterBase, meterEnergy, supplierEnergy}`; the two live readings are `null` while the meter is unreachable or the bus guard times out (still 200) |
| `/api/settings/meter` | POST | JSON (max 1024 B), at least one of `ct1Ratio` (0–65535) / `energySyncValue` (≥0); device CT write and/or energy read happen **before** store, so 500 `{"message":"meter unreachable"}` aborts without persisting (a bus-guard timeout takes the same path); 422 field errors; 200 returns the refreshed state |
| `/api/settings/anenji` | GET | Always 200 `{enabled, mainsVoltage, mainsCurrent, mainsPower, outputVoltage, outputCurrent, outputPower, batteryVoltage, batteryCurrent, batteryPower, batteryCharging, pvVoltage, pvCurrent, pvPower, workMode, outputMode, outputPriority, chargePriority}`; every reading is `null` when the inverter is disabled (`anenjiAddress == 0` or `setAnenji()` never wired), the 200 ms `modbusBus` guard times out, or the fast-fail probe fails (a failed first `getMainsVoltage` read skips the remaining 15 reads); on the reachable path each field is `null` iff its own read failed; `batteryCharging` is `bool\|null` from the register 232 sign (0/failed → `null`); the four mode fields are `string\|null` labels from `AnenjiModeSensor::label` (`"Unknown"` for unmapped enum values) with the same null semantics as the other readings; read-only — no POST on this route |
| `/api/bms` | GET | Always 200 when wired: `{enabled, bleUnavailable, mac, cellCount, connected, lastUpdateMs, reportedCellCount, status, errors, deviceModel, soc, totalVoltage, current, power, capacityRemaining, nominalCapacity, cycles, swVersion, mosfetBitmask, protectionBitmask, balancerBitmask, temperatures, cells, errorCounts, clearGeneration, clearPending, clearResult, authState}`; `mac` is `""` when unset; every reading is `null` until the first valid JBD frame; `cells` has exactly `cellCount` entries; `errorCounts` is `null` or 11 integer keys; `clearResult` stays `null` until a clear completes, then `"sent"` (no ack within the timeout), `"acked"` or `"failed"`; `clearPending` is `true` while the BLE task is executing the clear command; `authState` is `"not-authenticated"`, `"authenticating"`, `"authenticated"` or `"failed"`; 500 `{"message":"bms not initialized"}` before `handler.setBms()` wiring |
| `/api/bms/settings` | POST | JSON (max 1024 B), both `mac` (empty disables; otherwise normalized `AA:BB:CC:DD:EE:FF`) and `cellCount` (1..20) required; 422 `{"message":"<field>: required\|invalid value"}`, 500 `{"message":"failed to store config"\|"bms not initialized"}`, 200 returns the full refreshed BMS state; MAC/cell count apply live to BLE polling, MQTT/HA discovery changes need a reboot |
| `/api/bms/scan/start` | POST | Starts the ~10 s BLE scan; 200 `{}`, 422 `{"message":"scan already running"}`, 500 `{"message":"bms not initialized"}`; disconnects the BMS while scanning |
| `/api/bms/scan/status` | GET | 200 `{running, generation, devices:[{mac,name,rssi}]}`; results persist after the scan ends (RAM-only, max 20); 500 `{"message":"bms not initialized"}` |
| `/api/bms/clear_errors` | POST | Runs the one-shot factory/EEPROM-mode counter clear (hardware-verified on `SP22S003AP21S50A`, FW 7.6): enter `DD 5A 00 02 56 78 FF 30 77`, wait ~200 ms, exit-with-clear `DD 5A 01 02 28 28 FF AD 77`; no telemetry reads interleave, non-zero statuses (e.g. `0x80`) are logged, optimistic counters zero until the next 0xAA read; 200 `{}`, 422 `{"message":"scan is running"\|"bms is not connected"\|"clear already running"}`, 500 `{"message":"bms not initialized"}`; no config store, no reboot |
| `/api/controls` | GET | JSON `{"ventilation":{"enabled":bool\|null},"light":{"enabled":bool\|null},"generator":{"enabled":bool\|null}}`; a field is `null` when the live readback is unavailable because the 200 ms `controlBus` guard timed out (meter-null convention, still 200); 500 `{"message":"controls not initialized"}` before `handler.setControls()` wiring |
| `/api/controls` | POST | JSON (max 1024 B), at least one of `ventilation`/`light`/`generator` (booleans): none → 422 `{"message":"ventilation or light or generator: required"}`, non-bool → 422 `{"message":"<field>: invalid value"}`; `setState()` only enqueues (never needs the bus), 200 echoes the requested values for touched fields while untouched fields are a readback or `null` on guard timeout; `500 {"message":"controls busy"}` if a command enqueue fails (full internal queue — rare); no config store, no reboot |
| `/healthcheck/healty` | GET | Always 200 `{"healty":true}` (the typo is the ed-healthcheck API) |
| `/healthcheck/ready` | GET | 200 `{"ready":true,"message":…,"warning":…,"warningMessage":…}` or 500 `ready:false`. Services in order: `mqtt`, then meter, inverter (only when enabled at boot) and BMS (only when a MAC is configured at boot). MQTT not connected, meter/inverter unreachable (`wb-map12e is not responding` / `anenji is not responding`) or a device fault (Anenji fault code / work mode Fault, BMS live protection bitmask) => `ready:false`/500 (generic `service success count less min sucess count` until the 4th consecutive failing check). BMS BLE unavailable/disconnected/stale, BMS latched error counters (`bms error counters (latched): …`) and an active Anenji warning (`anenji warning code 0x...`, register 104) => `warning:true` with `warningMessage` (`bms: BLE stack unavailable`, `bms is not connected`, `bms data is stale`, `bms error counters (latched): …`, `anenji warning code 0x00000010`; `bms is not available` is the defensive null-client case) but still 200. `warningMessage` shows the LAST warning service in registration order (BMS comes after inverter), so a concurrent BMS warning hides the Anenji warning text |

Route registration order matters: `/api/config/backup` is registered before `/api/config`
because the shorter matcher is backward-compatible and would otherwise swallow it. Likewise
`/api/settings/modbus`, `/api/settings/meter` and `/api/settings/anenji` are registered before
the plain `/api/settings` matcher, and `/api/bms/scan/start`, `/api/bms/scan/status`,
`/api/bms/settings` and `/api/bms/clear_errors` before the plain `/api/bms` matcher
(`registerBmsHandlers()` sits between
the controls and `networkApi` registration). `/api/controls` is a distinct prefix with no
matcher-order interaction with `/api/settings`, so it has no ordering constraint. Reboots are deferred
through `RebootAfterResponse` so the response
reaches the client; do not call `ESP.restart()` directly from a handler.

## Validation convention

- Firmware: `pio run -e faraday` must pass; the build uses `-Wshadow` and
  `CORE_DEBUG_LEVEL=3` (`platformio.ini`), so keep it warning-free. Exactly two warnings are
  accepted: the pre-existing `ETH_CLK_MODE` redefinition and one internal `-Wshadow` from
  pinned `adafruit/Adafruit NeoPixel@==1.12.3` (`Adafruit_NeoPixel::rainbow()` parameter
  `brightness` shadows a class member, unchanged upstream through 1.15.0 so upgrading does not
  help) — project code must stay warning-free and `-Wshadow` must not be weakened to hide
  library warnings. A full clean rebuild additionally emits pre-existing third-party noise
  (e.g. `CONFIG_HEAP_POISONING_LIGHT` redefinition from our own build flag across every
  library TU, ESPAsyncWebServer `-Wshadow`, ArduinoJson deprecations) — it is library code,
  not a project regression. There is no lint/format
  config, no test framework and no CI. BLE/Wi-Fi coexistence and the NimBLE RAM footprint are
  hardware-verified only on a real board.
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
- USB `pio run -e faraday -t upload` writes only app slot A @ 0x10000 — with the custom table
  (no factory partition) a device that last received firmware via OTA keeps booting slot B, so
  the USB-flashed image may never run. Symptom: successful verified USB upload + old
  behavior/old line numbers in serial logs. Fix: OTA upload (targets the inactive slot) or
  `esptool write_flash 0x1e0000 .pio/build/faraday/firmware.bin` for both slots.
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
  pins.** The single on-board status pixel is now actively driven (health green/yellow/red),
  so an external LED-strip load present at boot can prevent the ESP32 from starting; verify
  the external circuit. The only current buzzer use is the 150 ms boot beep.
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
  worst-case single-iteration stall when the meter is absent ~135 ms); with an
  enabled-but-absent inverter the staggered 10 000–18 800 ms sensor intervals plus the four
  extra gated mode reads (work mode every 10 s, the three settings every 30 s, first reads
  staggered 800 ms * index) normally add at most 1–2 extra ~15 ms reads per guarded pass, and
  `GET /api/settings/anenji` fast-fails with a single probe read when the device is absent.
  Within the never-block-the-loop rule this is the accepted cost — the bus is serialized by
  the `modbusBus` semaphore rather than made asynchronous.
- `POST /api/settings/modbus` writes the new speed to the bus (ed-wb broadcasts the speed
  register to Modbus address 0) **before** switching the local `Serial2` baud; both addresses
  take effect only after a reboot. The endpoint stores config first, so a failed device
  write logs a warning but is not rolled back. If the bus guard times out (`modbus bus busy`
  warning) the device-side write is skipped but `Serial2` still switches to the persisted
  speed; nothing rewrites the meter's speed register at boot, so the device side stays at the
  old baud until the speed write is re-applied.
- `CURRENT_VERSION` is 5 with **no migration layer**: a pre-v5 `/config.bin` fails the
  CRC/size check and is silently replaced by defaults, and pre-v5 (v4) backups are rejected
  on restore (member size check, with the version byte as a second guard).
- v5 rejects v4 backups by design: an upgrade effectively resets the config — a pre-v5
  `/config.bin` fails the CRC/size check and falls back to defaults, and restoring a v4
  backup is refused; re-enter all settings (including the BMS MAC/cell count) after upgrading.
- `anenjiAddress` defaults to 0 (inverter disabled): enabling requires saving a non-zero
  address (1–247) on the Modbus tab **and a reboot**; while disabled no bus device, MQTT
  topics or HA entities exist, loop updates never touch the RS-485 device, and
  `GET /api/settings/anenji` answers `enabled:false` with every reading `null`.
- The Anenji mains current has **no register**: it is derived as mains power / mains voltage
  (PF = 1) and is invalid when the voltage read fails or the voltage is < 0.5 V — an
  estimate, not a measurement.
- Register 232 sign convention (+ charging / − discharging), the register scaling and the
  charging binary_sensor behavior are **hardware-unverified** (datasheet-level claims from
  the ed-wb driver).
- The Anenji tab's `Not charging` also means idle: `batteryCharging:false` only reports a
  non-positive filtered battery current (register 232), not a confirmed discharge.
- The mode/priority label mapping and enum values follow the ed-wb header
  (`ANENJIWorkMode`/`ANENJIOutputMode`/`ANENJIOutputPriority`/`ANENJIBatteryChargePriority`)
  and are **hardware-unverified**: an unknown register value renders as `Unknown` and never
  crashes; the four HA mode sensors are plain text-state `sensor`s (no numeric history, no
  `state_class`).
- The Anenji mode/priority fields are **read-only**: Faraday never writes the inverter's
  setting registers (ed-wb's `setOutputMode`/`setOutputPriority`/`setBatteryChargePriority`
  are not wired) — change priorities on the inverter panel. This Anenji feature adds no
  `Config` field of its own; the current `CURRENT_VERSION` is 5 because of the BMS fields.
- After a config reset the Modbus defaults are already usable (meter address 1, inverter
  disabled at 0), so no address edit is required for the meter — but a previously enabled
  inverter must be re-enabled (`anenjiAddress` set + reboot) after a `/config.bin` wipe.
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
- `healthcheck/ready` is not ready until every registered service has passed at least one
  check; with no broker configured it stays 500 (early checks report
  `service success count less min sucess count`, later `mqtt is not connected`).
  `/healthcheck/healty` is the liveness endpoint and is always 200. Service order is `mqtt`,
  meter, inverter, BMS; meter/inverter unreachability and device faults are hard failures
  (500), BMS link/staleness is only a warning (200).
- The pinned ed-healthcheck aggregation reports the `message` of the **last failing service
  in registration order**, and while a failing service's fails count is ≤ 3 the JSON carries
  the library generic `service success count less min sucess count` message — only its 4th
  consecutive failing check (~2 s after the verdict flips) surfaces the service's own message.
  A meter or inverter absent at boot then reports `wb-map12e not probed yet` /
  `anenji not probed yet` until the 3rd failed probe (~10.5 s) switches it to
  `wb-map12e is not responding` / `anenji is not responding`.
- The WB-MAP12E driver in pinned ed-wb exposes no status/error register, so meter health only
  checks reachability: a single `getVoltage` L1 probe every 5 s, and three consecutive failed
  probes (including a driver-failed sentinel read) publish `wb-map12e is not responding`.
  An Anenji `getFaultCode()` / `getWorkMode()` / `getWarningCode()` probe runs on the same 5 s
  cadence; a non-zero fault code or `FaultMode` yields `anenji fault code 0x........`
  (+ `, work mode = Fault`) and dominates. Register 104 (raw warning code) is a health warning
  input — `anenji warning code 0x........` on HTTP 200, never 500; the masked warning code and
  warning mask (registers 108/314) remain unused.
- When an active Anenji warning and a BMS warning are both present, `/healthcheck/ready`
  reports the BMS text because `warningMessage` comes from the last warning service in
  registration order (BMS is registered after the inverter).
- BMS health reads only the mutex-guarded client snapshot, never a bus: `bms: BLE stack
  unavailable`, `bms is not connected`, `bms data is stale` (>35 s without basic info) and
  non-zero latched error counters (`bms error counters (latched): name=count, …`) are warnings
  (200); only a non-zero live protection bitmask is a hard failure with `bms fault: <labels>`.
  The latched counters are historical event records — the old community clear opcode was not
  the protocol command on the tested pack; the factory-mode sequence is hardware-verified there
  (counters cleared, both steps 0x00), so the warning is the honest status until the operator
  runs the clear.
- The meter/inverter health probes take `modbusBus` with a bounded 200 ms wait and skip
  silently on contention (the cached verdict holds until the next successful probe). The BMS
  MAC and Anenji address apply live to polling but do **not** add or remove health services —
  registration happens before those values are assigned, so only a reboot can change the
  service set.
- The status LED mirrors the same adapter verdict caches as `/healthcheck/ready` through the
  lock-free `level()` getters and never calls `ready()` (`mqtt.ready()` has `tick()` side
  effects; adapter probes self-throttle). MQTT disconnected or any Error-level adapter =>
  RED; any Warning-level adapter (BMS link/staleness or latched counters, Anenji warning
  code) => YELLOW; else
  GREEN. Adapters that were never registered (disabled `anenjiAddress` / empty BMS MAC) are
  `nullptr` and contribute Ok. `show()` runs only when the level changes or on first paint.
  The pixel is driven through `Adafruit_NeoPixel`'s ESP32 RMT backend — a single-pixel
  `show()` costs tens of µs and only runs on level change; RMT + BLE (NimBLE) coexistence and
  the RGBW byte order (`NEO_GRBW`) are hardware-unverified.
- PCF8574 probe failures at `0x24`/`0x22` are logged as warnings by design when no expanders
  are attached; with `0x24` missing the relay domain is disabled at boot — ventilation/light
  and generator init and handler wiring are skipped, no MQTT subscriptions or HA entities are
  registered, and `/api/controls` replies 500 `{"message":"controls not initialized"}` (because
  a failed PCF8574 read returns 0, which the active-low driver would report as ON), while the
  input expander `0x22` still has no domain logic attached.
- Relays are **ALL OFF after every boot/reboot**: `relayExp.begin()` writes `0xFF` to the
  bank before any other write, and relay state is intentionally not persisted (no relay
  `Config` fields — `CURRENT_VERSION` is 5 because of the BMS fields, and 4 was only because
  of `anenjiAddress`) — there is no startup-state persistence by design.
- The reverse-order mapping K3 → channel 5 (ventilation) / K4 → channel 4 (light) is
  **hardware-verified** (forward mapping 2/3 was observed firing relays K6/K5; the PCF8574
  drives the bank reversed: board relay K_n = channel 8−n, remaining channels inferred from
  that formula, not individually verified); K2 → channel 6 and K5 → channel 3 (generator
  changeover) follow the same formula but are **not yet individually hardware-verified**. The
  active-low ON = `LOW` polarity is confirmed working (relay fires) and stays hardcoded in
  `EDCommon::Relay::PCF8574P`; the channel
  numbers live only in `src/defines.h` (`VENTILATION_RELAY_CHANNEL`, `LIGHT_RELAY_CHANNEL`,
  `CHANGEOVER_RELAY_K2_CHANNEL`, `CHANGEOVER_RELAY_K5_CHANNEL`) — change them there only.
- Generator mode is a **manual** switch only: it is not reflected in `ElectricityStatus`
  (`ON_GENERATOR` stays reserved) and no automatic network↔generator switching exists yet;
  that logic belongs in `src/automation/`.
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
- **BLE shares the 2.4 GHz radio with Wi-Fi on the classic ESP32.** The Ethernet/LAN8720 path
  is theoretically unaffected, but Wi-Fi + BLE coexistence and the NimBLE RAM footprint are
  **hardware-unverified**. Enabling the BMS requires setting `bmsMacAddress` on the BMS tab (or
  scan → Select) and a **reboot** for MQTT/HA entities; BLE polling itself follows immediately.
  `bmsCellCount` defaults to 12 so a 12S pack on a 20S-capable BMS publishes only the real
  cells.
- BLE + late Wi-Fi STA fallback exceeded the heap on the real board (wifi create task NO_MEM →
  abort loop) — the BMS task now defers BLE init below the heap floor. The floor was lowered
  from 120000 to 60000 because the app never reaches the old value after `setup()` (~75 KB
  measured on hardware); the real BLE-up heap delta is logged ("BLE up, heap X->Y"): hardware
  validation passed (init measured 83200->26168 B, ~48 KB free while connected and
  polling; scan takes the full ~10 s and finds devices, direct-MAC connect and 10 s
  telemetry polling verified over UART). If BLE + Wi-Fi fallback coexistence
  still exceeds the heap on link flaps, raise this floor or reclaim more (the NetworkLogger
  2×16 KiB reserve in pinned ed-utils 0.2.0 is the largest fixed consumer). Ethernet link
  flapping that triggers the Wi-Fi fallback is a hardware/bench issue to resolve separately
  (observed: link up/down cycling a few seconds after BLE activity). With BLE deferred (or
  disconnected) the BMS sensors stay silent — `Bms::update()` pumps them only while
  `snapshotCache.connected` is true, so there is no MQTT/HA churn and no failed-read logging
  until a connection exists.
- **Pinned ed-utils NetworkLogger appends every esp_log line into a 16 KB
  `std::string` even when disabled**; during offline storms the capacity-crossing realloc
  aborts (`bad_alloc`→`std::terminate`) on small heaps. The app therefore gates sensor pumps
  on `mqtt.isConnected()` (loop + `Bms::update`), keeps `CORE_DEBUG_LEVEL=3`, and sets the
  runtime esp_log level to INFO (`esp_log_level_set("*", ESP_LOG_INFO)` in `setup()`) because
  ed-utils `LOGD`/`LOGV` bypass the compile-time gate via `esp_log_write` — a boot abort was
  reproduced at ~24 s uptime when a full MQTT publish-payload dump (ed-mqtt `mqtt.cpp:108`)
  appended past the 16 KiB reserved capacity and the ~32 KiB realloc threw `bad_alloc`;
  relay/light/generator pumps likewise; the proper fix belongs upstream in ed-utils (bound
  append by remaining capacity).
- A BLE scan **disconnects the BMS** while it runs (~10 s). Scan results are RAM-only, keep up
  to 20 devices, and persist after the scan finishes; a new scan replaces them.
- The BMS is **read-only except the operator-triggered factory-mode counter clear**: Faraday
  never writes MOSFET/balancer commands. JBD packs answer reads without auth but may ignore
  COMMANDS until the app-key handshake completes. The clear is the syssi/esphome-jbd-bms
  factory/EEPROM sequence: register `0x00` ← `0x5678` (`DD 5A 00 02 56 78 FF 30 77`) enters
  factory mode, register `0x01` ← `0x2828` (`DD 5A 01 02 28 28 FF AD 77`) exits, clears the
  failed-event counters and writes the pack config to EEPROM — stable power is required and no
  other register may be written in factory mode. The sequence (enter → ~200 ms →
  exit-with-clear) is **hardware-verified on `SP22S003AP21S50A` (FW 7.6)**: it cleared the
  latched counters, both steps answering status 0x00. Only these two `0x5A` frames may
  ever be emitted; the MOS/balancer/capacity registers `0xE0`/`0xE1`/`0xE2` stay forbidden.
  The normal 0x03/0x04/0xAA poll must not interleave while the pack is in factory mode (0x03
  can answer zeros). If the sequence is interrupted after a successful enter, the firmware
  retries the exit frame once at the start of the next BLE session (never the enter frame), and
  an all-zero basic-info frame (`totalVoltage <= 0` and `soc == 0`) is rejected instead of
  published because a factory-mode `0x03` answers zeros.
  The old community opcode `DD E1 01 00 FF FF 77` was not the protocol command on the
  tested pack `SP22S003AP21S50A` (JBD SP series, FW 7.6) and never had a chance to work — the
  factory-mode `0x5A` sequence above is what works there; that pack also never answers the
  `FF AA` app-key dialect (it needs no authentication, so `authState` stays `failed`, which is
  harmless, and the handshake is skipped for that address). Error-status
  frames used to be dropped by the assembler; they are now surfaced with the real status, so a
  pack outside factory mode reports `0x80`. The counters latch as historical event records; no
  documented native clear command exists and we deliberately do not blind-write unknown
  registers (protection-threshold risk). The arm-time counters remain visible through
  `GET /api/bms` (`errorCounts`). **Never** emit the write-register form `DD 5A E1 ...`: that
  is MOSFET control (proven by syssi PulseView captures) and would switch charge/discharge.
  `balancerBitmask` bit i = cell i+1 (cells 17–32 come from payload bytes 14–15) and the JBD
  current/capacity scale (0.1 vs 0.01 depending on MOSFET-bit7) are ported from
  esphome-jbd-bms and **hardware-unverified**.
- BMS support grew the firmware by roughly 297 KB with NimBLE-Arduino; the app slot still has
  ~405 KB of headroom at 1,495,120 B used (78.7%). OTA and USB flashing are unaffected.
- A v5 upgrade resets `/config.bin` (pre-v5 fails CRC/size) and rejects v4 backups — re-enter
  the BMS MAC/cell count after upgrading.
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
