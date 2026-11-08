/**
 * Response shapes for the Faraday device HTTP API.
 *
 * These mirror the firmware contracts in `src/web/handler.cpp`. Only fields the
 * firmware actually emits are declared; consumers must tolerate a missing
 * optional value (e.g. `fwVersion` on pre-version firmware).
 */

/** GET /api/status */
export interface DeviceStatus {
  freeHeap: number;
  uptime: number;
  lastResetReason: string;
  /** Git-derived firmware stamp; absent from pre-version firmware. */
  fwVersion?: string;
}

/**
 * GET /api/settings — the MQTT section of `Config` plus the three stored
 * topics. `handler.cpp` serializes these exact camelCase keys.
 */
export interface Settings {
  mqttHost: string;
  mqttPort: number;
  mqttLogin: string;
  mqttPassword: string;
  mqttIsHADiscovery: boolean;
  mqttHADiscoveryPrefix: string;
  mqttCommandTopic: string;
  mqttStateTopic: string;
}

/**
 * POST /api/settings/mqtt body (urlencoded). All eight parameters are always
 * sent: the firmware reads `stateTopic`, `commandTopic` and `mqttIsHADiscovery`
 * without presence checks and would crash if any were absent.
 */
export interface MqttPayload {
  host: string;
  port: number;
  login: string;
  password: string;
  haDiscoveryPrefix: string;
  mqttIsHADiscovery: boolean;
  stateTopic: string;
  commandTopic: string;
}

/** GET /api/settings/modbus — persisted RS-485 speed and MAP12E address. */
export interface ModbusSettings {
  modbusSpeed: number;
  map12eAddress: number;
}

/** POST /api/settings/modbus body (JSON). Both fields are required. */
export interface ModbusPayload {
  modbusSpeed: number;
  map12eAddress: number;
}

/**
 * GET /api/settings/meter — persisted CT ratio/sync value plus the live
 * readings. `meterEnergy`/`supplierEnergy` are `null` while the meter is
 * unreachable.
 */
export interface MeterSettings {
  ct1Ratio: number;
  energySyncValue: number;
  energyMeterBase: number;
  meterEnergy: number | null;
  supplierEnergy: number | null;
}

/** POST /api/settings/meter body (JSON); at least one field is required. */
export interface MeterPayload {
  ct1Ratio?: number;
  energySyncValue?: number;
}

/** GET /healthcheck/healty (misspelled intentionally by the firmware lib). */
export interface HealthResponse {
  healty: boolean;
}

/** GET /healthcheck/ready */
export interface ReadyResponse {
  ready: boolean;
  message: string;
}

/** Successful response data for mutating endpoints (the device replies `{}`). */
export type EmptyObject = Record<string, never>;
