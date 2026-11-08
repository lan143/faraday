import type {
  ControlsState,
  DeviceStatus,
  EmptyObject,
  HealthResponse,
  MeterPayload,
  MeterSettings,
  ModbusPayload,
  ModbusSettings,
  MqttPayload,
  ReadyResponse,
  Settings,
} from './types';

/**
 * Client for the Faraday device HTTP API. Same origin: the firmware serves
 * the panel from LittleFS and owns `/api/*` + `/healthcheck/*`.
 */

/** Failure side of every API call. */
export interface ApiFailure {
  ok: false;
  /** HTTP status when a response was received; absent for network failures. */
  status?: number;
  message: string;
}

/** Result of every API call. */
export type ApiResult<T> = { ok: true; data: T } | ApiFailure;

/** Result of a mutating call; the device replies `{}` on success. */
export type ActionResult = ApiResult<EmptyObject>;

const EMPTY_BODY_MESSAGE = 'Device returned an empty response.';
const NETWORK_MESSAGE =
  'Could not reach the device. Check that you are connected to its network and try again.';

const EMPTY_OBJECT: EmptyObject = {};

/**
 * Client-side caps derived from the firmware buffers.
 *
 * `src/config.h` and ed-mqtt's `mqtt_config.h` define fixed char arrays and
 * `handler.cpp` compares lengths against `LEN - 1`; the browser mirrors those
 * caps so an over-long value never reaches the device.
 */
export const LIMITS = {
  mqtt: {
    /** `HOST_LEN` = 64 (mqtt_config.h:7), so 1..63 chars. */
    hostMin: 1,
    hostMax: 63,
    /** `MQTT_LOGIN_LEN` = 32 (mqtt_config.h:8); may be empty. */
    loginMax: 31,
    /** `MQTT_PASSWORD_LEN` = 32 (mqtt_config.h:9); may be empty. */
    passwordMax: 31,
    /** `MQTT_TOPIC_LEN` = 64 (config.h:14); prefix must be non-empty. */
    haDiscoveryPrefixMin: 1,
    haDiscoveryPrefixMax: 63,
    /** `mqttStateTopic` / `mqttCommandTopic` must be 1..63 chars. */
    topicMin: 1,
    topicMax: 63,
  },
  modbus: {
    /** Exactly the speeds `handler.cpp` accepts, in ascending order. */
    speeds: [9600, 19200, 38400, 57600, 115200] as const,
    /** Modbus unit id; `handler.cpp` rejects anything outside 1..247. */
    addressMin: 1,
    addressMax: 247,
  },
  meter: {
    /** `uint16_t` register value; 0 disables the CT ratio. */
    ctRatioMin: 0,
    ctRatioMax: 65535,
    /** Supplier kWh reading must be finite and non-negative. */
    syncMin: 0,
  },
} as const;

function networkFailure(): ApiFailure {
  return { ok: false, message: NETWORK_MESSAGE };
}

function messageFromBody(text: string): string | undefined {
  try {
    const parsed: unknown = JSON.parse(text);
    if (parsed && typeof parsed === 'object' && 'message' in parsed) {
      const value = (parsed as { message?: unknown }).message;
      if (typeof value === 'string' && value) {
        return value;
      }
    }
  } catch {
    // Not JSON; caller falls back to a generic message.
  }
  return undefined;
}

async function failureFromResponse(res: Response): Promise<ApiFailure> {
  let message = `Request failed (HTTP ${res.status}).`;
  try {
    const text = await res.text();
    if (text) {
      message = messageFromBody(text) ?? message;
    }
  } catch {
    // Keep the generic message.
  }
  return { ok: false, status: res.status, message };
}

/** GET a JSON endpoint. `emptyMessage` is used for empty/unparseable 200s. */
async function getJson<T>(
  path: string,
  emptyMessage: string,
): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(path, { headers: { Accept: 'application/json' } });
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let text: string;
  try {
    text = await res.text();
  } catch {
    return { ok: false, status: res.status, message: NETWORK_MESSAGE };
  }

  if (!text.trim()) {
    return { ok: false, status: res.status, message: emptyMessage };
  }

  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: res.status, message: emptyMessage };
  }
}

/** Send a mutating request; a 200 is success even with an empty body. */
async function send(
  path: string,
  init: RequestInit,
): Promise<ActionResult> {
  let res: Response;
  try {
    res = await fetch(path, init);
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  try {
    await res.text();
  } catch {
    // The command was accepted; the body is irrelevant.
  }
  return { ok: true, data: EMPTY_OBJECT };
}

/** POST urlencoded form data (the firmware reads `hasParam(name, true)`). */
function sendForm(path: string, body: URLSearchParams): Promise<ActionResult> {
  return send(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}

/**
 * POST a JSON body and parse the refreshed state the endpoint returns. This
 * mirrors `getJson`: a non-2xx response surfaces the firmware `{message}` and
 * an empty/unparseable 200 uses `emptyMessage`.
 */
async function postJson<T>(
  path: string,
  body: unknown,
  emptyMessage: string,
): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch {
    return networkFailure();
  }

  if (!res.ok) {
    return failureFromResponse(res);
  }

  let text: string;
  try {
    text = await res.text();
  } catch {
    return { ok: false, status: res.status, message: NETWORK_MESSAGE };
  }

  if (!text.trim()) {
    return { ok: false, status: res.status, message: emptyMessage };
  }

  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: res.status, message: emptyMessage };
  }
}

/** GET /api/status */
export function getStatus(): Promise<ApiResult<DeviceStatus>> {
  return getJson<DeviceStatus>('/api/status', EMPTY_BODY_MESSAGE);
}

/** GET /healthcheck/healty (misspelled path and key intentionally). */
export function getHealth(): Promise<ApiResult<HealthResponse>> {
  return getJson<HealthResponse>('/healthcheck/healty', EMPTY_BODY_MESSAGE);
}

/**
 * GET /healthcheck/ready. Returns HTTP 500 with `{ready:false,message}` while
 * the device is not ready; that surfaces here as `ok:false` with the reason.
 */
export function getReady(): Promise<ApiResult<ReadyResponse>> {
  return getJson<ReadyResponse>('/healthcheck/ready', EMPTY_BODY_MESSAGE);
}

/** POST /api/reboot — the device replies `{}` then restarts. */
export function reboot(): Promise<ActionResult> {
  return send('/api/reboot', { method: 'POST' });
}

/** GET /api/settings — MQTT broker + topic configuration. */
export function getSettings(): Promise<ApiResult<Settings>> {
  return getJson<Settings>('/api/settings', EMPTY_BODY_MESSAGE);
}

function requireString(
  value: unknown,
  field: string,
  max: number,
  allowEmpty = false,
): string {
  if (typeof value !== 'string') {
    throw new Error(`${field} is required.`);
  }
  if (!allowEmpty && value.length === 0) {
    throw new Error(`${field} must not be empty.`);
  }
  if (value.length > max) {
    throw new Error(`${field} must be at most ${max} characters.`);
  }
  return value;
}

/**
 * POST /api/settings/mqtt — applies after reboot.
 *
 * Always sends all nine parameters, as prometey does: the firmware reads
 * `stateTopic`, `commandTopic` and `mqttIsHADiscovery` without presence checks
 * (handler.cpp:84-86), so omitting any would crash the device. Invalid input
 * throws client-side instead of being sent.
 */
export function postMqtt(payload: MqttPayload): Promise<ActionResult> {
  const host = requireString(payload.host, 'MQTT host', LIMITS.mqtt.hostMax);
  if (typeof payload.port !== 'number' || !Number.isInteger(payload.port) || payload.port < 1 || payload.port > 65535) {
    throw new Error('MQTT port must be an integer between 1 and 65535.');
  }
  const login = requireString(payload.login, 'MQTT login', LIMITS.mqtt.loginMax, true);
  const password = requireString(payload.password, 'MQTT password', LIMITS.mqtt.passwordMax, true);
  const haDiscoveryPrefix = requireString(payload.haDiscoveryPrefix, 'HA discovery prefix', LIMITS.mqtt.haDiscoveryPrefixMax);
  if (typeof payload.mqttIsHADiscovery !== 'boolean') {
    throw new Error('HA discovery flag must be true or false.');
  }
  const stateTopic = requireString(payload.stateTopic, 'State topic', LIMITS.mqtt.topicMax);
  const commandTopic = requireString(payload.commandTopic, 'Command topic', LIMITS.mqtt.topicMax);
  const statusTopic = requireString(payload.statusTopic, 'Status topic', LIMITS.mqtt.topicMax);

  const body = new URLSearchParams();
  body.set('host', host);
  body.set('port', String(payload.port));
  body.set('login', login);
  body.set('password', password);
  body.set('haDiscoveryPrefix', haDiscoveryPrefix);
  body.set('mqttIsHADiscovery', payload.mqttIsHADiscovery ? 'true' : 'false');
  body.set('stateTopic', stateTopic);
  body.set('commandTopic', commandTopic);
  body.set('statusTopic', statusTopic);
  return sendForm('/api/settings/mqtt', body);
}

/** GET /api/settings/modbus — RS-485 speed and MAP12E address. */
export function getModbusSettings(): Promise<ApiResult<ModbusSettings>> {
  return getJson<ModbusSettings>(
    '/api/settings/modbus',
    EMPTY_BODY_MESSAGE,
  );
}

/**
 * POST /api/settings/modbus — persists both fields and returns the refreshed
 * state. The speed applies live; the address takes effect after a reboot.
 * Invalid input throws client-side instead of being sent.
 */
export function saveModbusSettings(
  payload: ModbusPayload,
): Promise<ApiResult<ModbusSettings>> {
  if (!(LIMITS.modbus.speeds as readonly number[]).includes(payload.modbusSpeed)) {
    throw new Error(
      `Modbus speed must be one of ${LIMITS.modbus.speeds.join(', ')}.`,
    );
  }
  if (
    !Number.isInteger(payload.map12eAddress) ||
    payload.map12eAddress < LIMITS.modbus.addressMin ||
    payload.map12eAddress > LIMITS.modbus.addressMax
  ) {
    throw new Error(
      `MAP12E address must be an integer between ${LIMITS.modbus.addressMin} and ${LIMITS.modbus.addressMax}.`,
    );
  }
  return postJson<ModbusSettings>(
    '/api/settings/modbus',
    {
      modbusSpeed: payload.modbusSpeed,
      map12eAddress: payload.map12eAddress,
    },
    EMPTY_BODY_MESSAGE,
  );
}

/** GET /api/settings/meter — CT ratio, sync value and live meter readings. */
export function getMeterSettings(): Promise<ApiResult<MeterSettings>> {
  return getJson<MeterSettings>('/api/settings/meter', EMPTY_BODY_MESSAGE);
}

/**
 * POST /api/settings/meter — sends only the provided fields and returns the
 * refreshed state. A CT ratio write reaches the meter immediately; a sync
 * stores the entered supplier reading plus the meter counter at that moment.
 * Invalid input throws client-side instead of being sent.
 */
export function saveMeterSettings(
  payload: MeterPayload,
): Promise<ApiResult<MeterSettings>> {
  const body: MeterPayload = {};

  if (payload.ct1Ratio !== undefined) {
    if (
      !Number.isInteger(payload.ct1Ratio) ||
      payload.ct1Ratio < LIMITS.meter.ctRatioMin ||
      payload.ct1Ratio > LIMITS.meter.ctRatioMax
    ) {
      throw new Error(
        `CT ratio must be an integer between ${LIMITS.meter.ctRatioMin} and ${LIMITS.meter.ctRatioMax}.`,
      );
    }
    body.ct1Ratio = payload.ct1Ratio;
  }

  if (payload.energySyncValue !== undefined) {
    if (
      !Number.isFinite(payload.energySyncValue) ||
      payload.energySyncValue < LIMITS.meter.syncMin
    ) {
      throw new Error('Energy sync value must be a number greater than or equal to 0.');
    }
    body.energySyncValue = payload.energySyncValue;
  }

  if (body.ct1Ratio === undefined && body.energySyncValue === undefined) {
    throw new Error('ct1Ratio or energySyncValue required.');
  }

  return postJson<MeterSettings>(
    '/api/settings/meter',
    body,
    EMPTY_BODY_MESSAGE,
  );
}

/** GET /api/controls — ventilation and light relay state. */
export function getControls(): Promise<ApiResult<ControlsState>> {
  return getJson<ControlsState>('/api/controls', EMPTY_BODY_MESSAGE);
}

/**
 * POST /api/controls — sends only the provided fields and returns the
 * refreshed state. The touched field always echoes the requested boolean; the
 * untouched field is a live readback or `null` when the relay bus is busy.
 * Invalid input throws client-side instead of being sent.
 */
export function saveControls(payload: {
  ventilation?: boolean;
  light?: boolean;
}): Promise<ApiResult<ControlsState>> {
  const body: { ventilation?: boolean; light?: boolean } = {};

  if (payload.ventilation !== undefined) {
    if (typeof payload.ventilation !== 'boolean') {
      throw new Error('Ventilation must be true or false.');
    }
    body.ventilation = payload.ventilation;
  }

  if (payload.light !== undefined) {
    if (typeof payload.light !== 'boolean') {
      throw new Error('Light must be true or false.');
    }
    body.light = payload.light;
  }

  if (body.ventilation === undefined && body.light === undefined) {
    throw new Error('ventilation or light required.');
  }

  return postJson<ControlsState>('/api/controls', body, EMPTY_BODY_MESSAGE);
}
