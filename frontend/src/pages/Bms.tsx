import { Fragment } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import {
  getBmsScanStatus,
  getBmsState,
  LIMITS,
  postBmsClearErrors,
  postBmsScanStart,
  postBmsSettings,
} from '../api/client';
import type { BmsErrorCounts, BmsScanStatus, BmsState } from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

/**
 * BMS tab: JBD battery telemetry over BLE plus the MAC/cell-count settings, a
 * BLE scan picker and the operator-triggered failed-event counter clear.
 * `GET /api/bms` returns `null` for every reading until the first valid frame.
 * Polling (snapshot, scan status and clear completion) is local to the page.
 */

const EM_DASH = '\u2014';
const STATE_REFRESH_MS = 10_000;
const SCAN_POLL_MS = 1_500;
const SCAN_POLL_CAP_MS = 30_000;
const CLEAR_POLL_MS = 1_500;
const CLEAR_POLL_CAP_MS = 25_000;

const ERROR_COUNTERS: ReadonlyArray<{
  key: keyof BmsErrorCounts;
  label: string;
}> = [
  { key: 'shortCircuit', label: 'Short circuit' },
  { key: 'chargeOvercurrent', label: 'Charge overcurrent' },
  { key: 'dischargeOvercurrent', label: 'Discharge overcurrent' },
  { key: 'cellOvervoltage', label: 'Cell overvoltage' },
  { key: 'cellUndervoltage', label: 'Cell undervoltage' },
  { key: 'chargeOvertemperature', label: 'Charge overtemperature' },
  { key: 'chargeUndertemperature', label: 'Charge undertemperature' },
  { key: 'dischargeOvertemperature', label: 'Discharge overtemperature' },
  { key: 'dischargeUndertemperature', label: 'Discharge undertemperature' },
  { key: 'batteryOvervoltage', label: 'Battery overvoltage' },
  { key: 'batteryUndervoltage', label: 'Battery undervoltage' },
];

function formatNumber(value: number | null, decimals: number): string {
  if (value === null || !Number.isFinite(value)) {
    return EM_DASH;
  }
  return value.toFixed(decimals);
}

function formatText(value: string | null): string {
  if (value === null || value === undefined || value === '') {
    return EM_DASH;
  }
  return value;
}

function formatBool(value: boolean): string {
  return value ? 'Yes' : 'No';
}

function formatFlags(value: boolean | null): string {
  if (value === null) {
    return EM_DASH;
  }
  return value ? 'On' : 'Off';
}

function formatUptimeMs(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return EM_DASH;
  }
  return `${(value / 1000).toFixed(1)} s`;
}

function formatAuthState(state: BmsState['authState']): string {
  switch (state) {
    case 'authenticated':
      return 'authenticated';
    case 'authenticating':
      return 'authenticating\u2026';
    case 'failed':
      return 'failed';
    default:
      return 'not-authenticated';
  }
}

function clearResultNotice(result: BmsState['clearResult']): string {
  switch (result) {
    case 'acked':
      return 'BMS acknowledged the clear command; counters re-read within ~10 s.';
    case 'sent':
      return 'Command sent (no acknowledgement); counters re-read within ~10 s.';
    case 'failed':
      return 'Clear command failed (BLE write or session abort).';
    default:
      return 'Clear finished.';
  }
}

/** 1-based cell numbers whose bit is set in the 32-bit balancer bitmask. */
function balancingCells(bitmask: number | null): number[] {
  if (bitmask === null) {
    return [];
  }
  const mask = bitmask >>> 0;
  const cells: number[] = [];
  for (let i = 0; i < LIMITS.bms.cellCountMax; i += 1) {
    if (((mask >>> i) & 1) !== 0) {
      cells.push(i + 1);
    }
  }
  return cells;
}

interface TextFieldProps {
  label: string;
  value: string;
  onInput: (value: string) => void;
  type?: 'text' | 'number';
  min?: number;
  max?: number;
  placeholder?: string;
  error?: string;
  help?: string;
}

function TextField({
  label,
  value,
  onInput,
  type = 'text',
  min,
  max,
  placeholder,
  error,
  help,
}: TextFieldProps) {
  return (
    <label class="field">
      <span class="field-label">{label}</span>
      <input
        type={type}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        onInput={(event) => onInput(event.currentTarget.value)}
      />
      {help && !error ? <span class="field-help">{help}</span> : null}
      {error ? <span class="field-error">{error}</span> : null}
    </label>
  );
}

function validateSettings(mac: string, cellCount: string): {
  mac?: string;
  cellCount?: string;
} {
  const errors: { mac?: string; cellCount?: string } = {};
  const trimmed = mac.trim();
  if (trimmed !== '' && !/^[0-9A-Fa-f]{2}(:[0-9A-Fa-f]{2}){5}$/.test(trimmed)) {
    errors.mac = 'MAC address must look like AA:BB:CC:DD:EE:FF.';
  }
  if (cellCount.trim() === '') {
    errors.cellCount = 'Cell count is required.';
  } else {
    const value = Number(cellCount);
    if (
      !Number.isInteger(value) ||
      value < LIMITS.bms.cellCountMin ||
      value > LIMITS.bms.cellCountMax
    ) {
      errors.cellCount = `Must be an integer between ${LIMITS.bms.cellCountMin} and ${LIMITS.bms.cellCountMax}.`;
    }
  }
  return errors;
}

export function BmsPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [state, setState] = useState<BmsState | null>(null);

  const [mac, setMac] = useState('');
  const [cellCount, setCellCount] = useState('');
  const [errors, setErrors] = useState<{ mac?: string; cellCount?: string }>({});
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const [scanStatus, setScanStatus] = useState<BmsScanStatus | null>(null);
  const [scanBusy, setScanBusy] = useState(false);
  const [scanError, setScanError] = useState<string | null>(null);

  const [refreshing, setRefreshing] = useState(false);
  const [clearBusy, setClearBusy] = useState(false);

  const scanTimer = useRef<number | undefined>(undefined);
  const scanCancelled = useRef(false);
  const clearTimer = useRef<number | undefined>(undefined);
  const clearCancelled = useRef(false);

  useEffect(() => {
    scanCancelled.current = false;
    clearCancelled.current = false;
    return () => {
      scanCancelled.current = true;
      clearCancelled.current = true;
      if (scanTimer.current !== undefined) {
        window.clearTimeout(scanTimer.current);
      }
      if (clearTimer.current !== undefined) {
        window.clearTimeout(clearTimer.current);
      }
    };
  }, []);

  const load = useCallback(async (syncForm: boolean) => {
    setLoadError(null);
    const result = await getBmsState();
    if (result.ok) {
      setState(result.data);
      if (syncForm) {
        setMac(result.data.mac);
        setCellCount(String(result.data.cellCount));
      }
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load(true);
  }, [load]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      void load(false);
    }, STATE_REFRESH_MS);
    return () => window.clearInterval(timer);
  }, [load]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    await load(false);
    setRefreshing(false);
  }, [load]);

  /** Send the current inputs; fills the form from the refreshed state. */
  const saveSettings = useCallback(
    async (nextMac: string, nextCellCount: number) => {
      setSaving(true);
      setNotice(null);
      setActionError(null);
      try {
        const result = await postBmsSettings({
          mac: nextMac,
          cellCount: nextCellCount,
        });
        if (result.ok) {
          setState(result.data);
          setMac(result.data.mac);
          setCellCount(String(result.data.cellCount));
          setErrors({});
          // Re-fetch right away so the live polling state is consistent.
          await load(false);
          setNotice(
            result.data.mac === ''
              ? 'BMS disabled. MQTT/HA entities are removed only after a reboot.'
              : 'BMS settings saved. BLE polling follows immediately; the number of MQTT/HA entities is fixed at boot, so reboot to apply discovery changes.',
          );
        } else {
          setActionError(result.message);
        }
      } catch (caught) {
        setActionError(caught instanceof Error ? caught.message : String(caught));
      }
      setSaving(false);
    },
    [load],
  );

  const handleSubmit = useCallback(
    (event: Event) => {
      event.preventDefault();
      const nextErrors = validateSettings(mac, cellCount);
      setErrors(nextErrors);
      setNotice(null);
      setActionError(null);
      if (Object.keys(nextErrors).length > 0) {
        return;
      }
      void saveSettings(mac.trim(), Number(cellCount));
    },
    [mac, cellCount, saveSettings],
  );

  const pollScan = useCallback(async (deadline: number) => {
    const result = await getBmsScanStatus();
    if (scanCancelled.current) {
      return;
    }
    if (!result.ok) {
      setScanError(result.message);
      setScanBusy(false);
      return;
    }

    setScanStatus(result.data);

    // Stop on completion or after the cap; the last status is final either way.
    if (!result.data.running || Date.now() >= deadline) {
      setScanBusy(false);
      return;
    }

    scanTimer.current = window.setTimeout(() => {
      void pollScan(deadline);
    }, SCAN_POLL_MS);
  }, []);

  const startScan = useCallback(async () => {
    if (scanBusy) {
      return;
    }

    setScanError(null);
    setScanBusy(true);

    const result = await postBmsScanStart();
    // 422 "scan already running" is not an error: just observe it.
    if (!result.ok && result.status !== 422) {
      setScanError(result.message);
      setScanBusy(false);
      return;
    }

    void pollScan(Date.now() + SCAN_POLL_CAP_MS);
  }, [scanBusy, pollScan]);

  const pollClear = useCallback(
    async (deadline: number, generation: number) => {
      const result = await getBmsState();
      if (clearCancelled.current) {
        return;
      }
      if (!result.ok) {
        setActionError(result.message);
        setClearBusy(false);
        return;
      }

      setState(result.data);

      const generationReached =
        generation < 0 || result.data.clearGeneration >= generation;
      if (!result.data.clearPending && generationReached) {
        setClearBusy(false);
        await load(false);
        setNotice(clearResultNotice(result.data.clearResult));
        return;
      }

      // Cap the extra polling; the 10 s refresh keeps showing the real state.
      if (Date.now() >= deadline) {
        setClearBusy(false);
        setNotice('Clear command is still pending; the tab keeps refreshing every 10 s.');
        return;
      }

      clearTimer.current = window.setTimeout(() => {
        void pollClear(deadline, generation);
      }, CLEAR_POLL_MS);
    },
    [load],
  );

  const clearErrorCounters = useCallback(async () => {
    if (
      clearBusy ||
      !state?.connected ||
      scanBusy ||
      (scanStatus?.running ?? false) ||
      state.clearPending
    ) {
      return;
    }

    const confirmed = window.confirm(
      'Clear the BMS failed-event counters? This enters factory/EEPROM mode, writes registers 0x00/0x01 and clears the counters; the pack must have stable power throughout.',
    );
    if (!confirmed) {
      return;
    }

    const generation = state.clearGeneration;
    setClearBusy(true);
    setNotice(null);
    setActionError(null);

    try {
      const result = await postBmsClearErrors();
      if (!result.ok) {
        setActionError(result.message);
        setClearBusy(false);
        return;
      }

      setNotice('Clear command sent\u2026');
      if (clearCancelled.current) {
        setClearBusy(false);
        return;
      }

      clearTimer.current = window.setTimeout(() => {
        void pollClear(Date.now() + CLEAR_POLL_CAP_MS, generation);
      }, CLEAR_POLL_MS);
    } catch (caught) {
      setActionError(caught instanceof Error ? caught.message : String(caught));
      setClearBusy(false);
    }
  }, [clearBusy, state, scanBusy, scanStatus, pollClear]);

  const selectDevice = useCallback(
    async (deviceMac: string) => {
      const fallback = state?.cellCount ?? LIMITS.bms.cellCountMin;
      const parsed = Number(cellCount);
      const nextCellCount =
        cellCount.trim() !== '' &&
        Number.isInteger(parsed) &&
        parsed >= LIMITS.bms.cellCountMin &&
        parsed <= LIMITS.bms.cellCountMax
          ? parsed
          : fallback;
      await saveSettings(deviceMac, nextCellCount);
    },
    [cellCount, state, saveSettings],
  );

  if (!loaded) {
    return (
      <Card title="BMS">
        <p class="muted">Loading BMS readings&hellip;</p>
      </Card>
    );
  }

  const cells =
    state === null
      ? []
      : Array.from({ length: state.cellCount }, (_, index) => state.cells[index] ?? null);
  const balancing = state === null ? [] : balancingCells(state.balancerBitmask);
  const charging =
    state?.mosfetBitmask != null ? (state.mosfetBitmask & 0x01) !== 0 : null;
  const discharging =
    state?.mosfetBitmask != null ? (state.mosfetBitmask & 0x02) !== 0 : null;
  const reportedMismatch =
    state !== null &&
    state.reportedCellCount !== null &&
    state.reportedCellCount !== state.cellCount;
  const errorCounts = state?.errorCounts ?? null;
  const latchedCounters =
    errorCounts !== null && ERROR_COUNTERS.some(({ key }) => errorCounts[key] > 0);
  const clearHadNoEffect =
    latchedCounters && state !== null && state.clearResult !== null;
  const clearDisabled =
    state === null ||
    !state.connected ||
    scanBusy ||
    (scanStatus?.running ?? false) ||
    state.clearPending ||
    clearBusy;

  return (
    <div class="stack">
      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load(true)}>Retry</Button>
          </div>
        </>
      ) : null}

      {state && !state.enabled ? (
        <Banner
          kind="info"
          message="The BMS is disabled. Set the Bluetooth MAC below (or scan and select it), then save."
        />
      ) : null}

      {state?.bleUnavailable ? (
        <Banner
          kind="error"
          message="Bluetooth could not be initialized on the device. BLE telemetry and scanning are unavailable."
        />
      ) : null}

      {reportedMismatch ? (
        <Banner
          kind="info"
          message={`The BMS reports ${state?.reportedCellCount} cells but ${state?.cellCount} is configured. Consider adjusting the cell count.`}
        />
      ) : null}

      <Card title="Connection">
        <dl class="kv">
          <dt>Enabled</dt>
          <dd>{formatBool(state?.enabled ?? false)}</dd>
          <dt>MAC</dt>
          <dd>{formatText(state?.mac ?? null)}</dd>
          <dt>Connected</dt>
          <dd>{formatBool(state?.connected ?? false)}</dd>
          <dt>Bluetooth</dt>
          <dd>{state?.bleUnavailable ? 'Unavailable' : 'Available'}</dd>
          <dt>BLE access</dt>
          <dd>{formatAuthState(state?.authState ?? 'not-authenticated')}</dd>
          <dt>Last frame</dt>
          <dd>{formatUptimeMs(state?.lastUpdateMs ?? null)}</dd>
          <dt>Reported cells</dt>
          <dd>{formatNumber(state?.reportedCellCount ?? null, 0)}</dd>
        </dl>
        <div class="form-actions">
          <Button onClick={() => void refresh()} disabled={refreshing}>
            {refreshing ? 'Refreshing\u2026' : 'Refresh'}
          </Button>
        </div>
      </Card>

      <Card title="Settings">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Bluetooth MAC"
            value={mac}
            onInput={setMac}
            placeholder="AA:BB:CC:DD:EE:FF"
            error={errors.mac}
            help="Empty disables the BMS. Only this BLE device is polled."
          />
          <TextField
            label="Cell count"
            value={cellCount}
            onInput={setCellCount}
            type="number"
            min={LIMITS.bms.cellCountMin}
            max={LIMITS.bms.cellCountMax}
            error={errors.cellCount}
            help={`Real pack size ${LIMITS.bms.cellCountMin}-${LIMITS.bms.cellCountMax}; only these cells are published.`}
          />
          {notice ? (
            <Banner kind="success" message={notice} onClose={() => setNotice(null)} />
          ) : null}
          {actionError ? (
            <Banner
              kind="error"
              message={actionError}
              onClose={() => setActionError(null)}
            />
          ) : null}
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={saving}>
              {saving ? 'Saving\u2026' : 'Save BMS'}
            </Button>
          </div>
        </form>
      </Card>

      <Card title="BLE scan">
        <p class="muted">
          A scan runs for about 10 seconds on the device and briefly disconnects
          the BMS. Results stay visible after it finishes.
        </p>
        {scanError ? (
          <Banner kind="error" message={scanError} onClose={() => setScanError(null)} />
        ) : null}
        <div class="form-actions">
          <Button
            onClick={() => void startScan()}
            disabled={
              scanBusy ||
              (scanStatus?.running ?? false) ||
              state?.clearPending === true
            }
          >
            {scanBusy ? 'Scanning\u2026' : 'Scan'}
          </Button>
        </div>
        {scanStatus && scanStatus.devices.length > 0 ? (
          <dl class="kv mt">
            {scanStatus.devices.map((device) => (
              <Fragment key={device.mac}>
                <dt>
                  {formatText(device.name)} ({device.rssi} dBm)
                </dt>
                <dd>
                  {device.mac}{' '}
                  <Button
                    onClick={() => void selectDevice(device.mac)}
                    disabled={saving || state?.mac === device.mac}
                  >
                    {state?.mac === device.mac ? 'Selected' : 'Select'}
                  </Button>
                </dd>
              </Fragment>
            ))}
          </dl>
        ) : (
          <p class="muted mt">
            {scanBusy ? 'Scanning for BLE devices\u2026' : 'No scan results yet.'}
          </p>
        )}
      </Card>

      <Card title="Summary">
        <dl class="kv">
          <dt>Status</dt>
          <dd>{formatText(state?.status ?? null)}</dd>
          <dt>Errors</dt>
          <dd>{formatText(state?.errors ?? null)}</dd>
          <dt>Device model</dt>
          <dd>{formatText(state?.deviceModel ?? null)}</dd>
          <dt>State of charge</dt>
          <dd>{formatNumber(state?.soc ?? null, 0)} %</dd>
          <dt>Total voltage</dt>
          <dd>{formatNumber(state?.totalVoltage ?? null, 2)} V</dd>
          <dt>Current</dt>
          <dd>{formatNumber(state?.current ?? null, 2)} A</dd>
          <dt>Power</dt>
          <dd>{formatNumber(state?.power ?? null, 1)} W</dd>
          <dt>Capacity</dt>
          <dd>
            {formatNumber(state?.capacityRemaining ?? null, 2)} /{' '}
            {formatNumber(state?.nominalCapacity ?? null, 2)} Ah
          </dd>
          <dt>Cycles</dt>
          <dd>{formatNumber(state?.cycles ?? null, 0)}</dd>
          <dt>SW version</dt>
          <dd>{formatNumber(state?.swVersion ?? null, 2)}</dd>
          <dt>Charging</dt>
          <dd>{formatFlags(charging)}</dd>
          <dt>Discharging</dt>
          <dd>{formatFlags(discharging)}</dd>
          <dt>Balancing</dt>
          <dd>
            {state?.balancerBitmask == null
              ? EM_DASH
              : balancing.length > 0
                ? balancing.join(', ')
                : 'None'}
          </dd>
        </dl>
      </Card>

      <Card title="Cell statistics">
        <dl class="kv">
          <dt>Min cell voltage</dt>
          <dd>{formatNumber(state?.minCellVoltage ?? null, 3)} V</dd>
          <dt>Max cell voltage</dt>
          <dd>{formatNumber(state?.maxCellVoltage ?? null, 3)} V</dd>
          <dt>Average cell voltage</dt>
          <dd>{formatNumber(state?.avgCellVoltage ?? null, 3)} V</dd>
          <dt>Delta cell voltage</dt>
          <dd>{formatNumber(state?.deltaCellVoltage ?? null, 3)} V</dd>
        </dl>
      </Card>

      <Card title={`Cell voltages (${state?.cellCount ?? 0})`}>
        <dl class="kv">
          {cells.map((voltage, index) => (
            <Fragment key={index}>
              <dt>{`Cell ${index + 1}`}</dt>
              <dd>{formatNumber(voltage, 3)} V</dd>
            </Fragment>
          ))}
        </dl>
      </Card>

      <Card title="Temperatures">
        <dl class="kv">
          {(state?.temperatures ?? []).length === 0 ? (
            <>
              <dt>Temperature</dt>
              <dd>{EM_DASH}</dd>
            </>
          ) : (
            (state?.temperatures ?? []).map((temperature, index) => (
              <Fragment key={index}>
                <dt>{`Temperature ${index + 1}`}</dt>
                <dd>{formatNumber(temperature, 1)} &deg;C</dd>
              </Fragment>
            ))
          )}
        </dl>
      </Card>

      <Card title="Error counters">
        {state?.errorCounts ? (
          <dl class="kv">
            {ERROR_COUNTERS.map(({ key, label }) => (
              <Fragment key={key}>
                <dt>{label}</dt>
                <dd>{state?.errorCounts ? state.errorCounts[key] : EM_DASH}</dd>
              </Fragment>
            ))}
          </dl>
        ) : (
          <p class="muted">{EM_DASH}</p>
        )}
        {latchedCounters ? (
          <p class="muted">
            These counters are latched: the BMS does not self-clear them. They
            are reported as a warning until cleared.
          </p>
        ) : null}
        {clearHadNoEffect ? (
          <p class="muted">
            The last clear command had no effect on this BMS &mdash; these counters
            are latched historical events; the system treats them as a warning.
          </p>
        ) : null}
        <div class="form-actions">
          <Button
            variant="danger"
            onClick={() => void clearErrorCounters()}
            disabled={clearDisabled}
          >
            {clearBusy ? 'Clearing\u2026' : 'Clear error counters'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
