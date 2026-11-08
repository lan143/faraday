import { useCallback, useEffect, useState } from 'preact/hooks';
import { getMeterSettings, LIMITS, saveMeterSettings } from '../api/client';
import type { MeterSettings } from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

/**
 * Meter tab for the WB-MAP12E energy meter. `GET /api/settings/meter` returns
 * the persisted CT ratio/sync value plus the live readings. Sync stores the
 * supplier kWh reading plus the device counter at that moment; the meter
 * counters themselves are read-only and cannot be reset by the firmware.
 */

const EM_DASH = '\u2014';

function formatKwh(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return EM_DASH;
  }
  return `${value.toFixed(2)} kWh`;
}

function hasErrors(errors: object): boolean {
  return Object.keys(errors).length > 0;
}

interface TextFieldProps {
  label: string;
  value: string;
  onInput: (value: string) => void;
  type?: 'text' | 'number';
  min?: number;
  max?: number;
  step?: string;
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
  step,
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
        step={step}
        aria-invalid={error ? true : undefined}
        onInput={(event) => onInput(event.currentTarget.value)}
      />
      {help && !error ? <span class="field-help">{help}</span> : null}
      {error ? <span class="field-error">{error}</span> : null}
    </label>
  );
}

export function MeterPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [settings, setSettings] = useState<MeterSettings | null>(null);

  const [syncValue, setSyncValue] = useState('');
  const [syncErrors, setSyncErrors] = useState<{ sync?: string }>({});
  const [syncing, setSyncing] = useState(false);
  const [syncNotice, setSyncNotice] = useState<string | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);

  const [ratioValue, setRatioValue] = useState('');
  const [ratioErrors, setRatioErrors] = useState<{ ratio?: string }>({});
  const [ratioSaving, setRatioSaving] = useState(false);
  const [ratioNotice, setRatioNotice] = useState<string | null>(null);
  const [ratioError, setRatioError] = useState<string | null>(null);

  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getMeterSettings();
    if (result.ok) {
      setSettings(result.data);
      setSyncValue(String(result.data.energySyncValue));
      setRatioValue(String(result.data.ct1Ratio));
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  /** Re-GET only the live meter/supplier readings, leaving the inputs alone. */
  const refresh = useCallback(async () => {
    setRefreshing(true);
    const result = await getMeterSettings();
    if (result.ok) {
      setSettings(result.data);
      setLoadError(null);
    } else {
      setLoadError(result.message);
    }
    setRefreshing(false);
  }, []);

  const handleSync = useCallback(
    async (event: Event) => {
      event.preventDefault();
      setSyncNotice(null);
      setSyncError(null);

      const errors: { sync?: string } = {};
      const value = Number(syncValue);
      if (syncValue.trim() === '') {
        errors.sync = 'Supplier reading is required.';
      } else if (!Number.isFinite(value) || value < LIMITS.meter.syncMin) {
        errors.sync = 'Must be a number greater than or equal to 0.';
      }
      setSyncErrors(errors);
      if (hasErrors(errors)) {
        return;
      }

      setSyncing(true);
      try {
        const result = await saveMeterSettings({ energySyncValue: value });
        if (result.ok) {
          setSettings(result.data);
          setSyncValue(String(result.data.energySyncValue));
          setSyncNotice(
            'Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.',
          );
        } else {
          setSyncError(result.message);
        }
      } catch (caught) {
        setSyncError(caught instanceof Error ? caught.message : String(caught));
      }
      setSyncing(false);
    },
    [syncValue],
  );

  const handleRatio = useCallback(
    async (event: Event) => {
      event.preventDefault();
      setRatioNotice(null);
      setRatioError(null);

      const errors: { ratio?: string } = {};
      const value = Number(ratioValue);
      if (ratioValue.trim() === '') {
        errors.ratio = 'CT ratio is required.';
      } else if (
        !Number.isInteger(value) ||
        value < LIMITS.meter.ctRatioMin ||
        value > LIMITS.meter.ctRatioMax
      ) {
        errors.ratio = `Must be an integer between ${LIMITS.meter.ctRatioMin} and ${LIMITS.meter.ctRatioMax}.`;
      }
      setRatioErrors(errors);
      if (hasErrors(errors)) {
        return;
      }

      setRatioSaving(true);
      try {
        const result = await saveMeterSettings({ ct1Ratio: value });
        if (result.ok) {
          setSettings(result.data);
          setRatioValue(String(result.data.ct1Ratio));
          setRatioNotice(
            'CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.',
          );
        } else {
          setRatioError(result.message);
        }
      } catch (caught) {
        setRatioError(caught instanceof Error ? caught.message : String(caught));
      }
      setRatioSaving(false);
    },
    [ratioValue],
  );

  if (!loaded) {
    return (
      <Card title="Meter">
        <p class="muted">Loading meter settings&hellip;</p>
      </Card>
    );
  }

  return (
    <div class="stack">
      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}

      <Card title="Supplier energy sync">
        <dl class="kv">
          <dt>Meter energy</dt>
          <dd>{formatKwh(settings?.meterEnergy ?? null)}</dd>
          <dt>Supplier energy</dt>
          <dd>{formatKwh(settings?.supplierEnergy ?? null)}</dd>
        </dl>
        <p class="muted mt">
          Meter counters are read-only and cannot be reset by the firmware. A
          sync stores the entered supplier kWh reading together with the device
          counter at that moment, so Home Assistant reports the entered value
          plus consumption since the sync.
        </p>
        <form onSubmit={handleSync} class="mt">
          <TextField
            label="Supplier reading, kWh"
            value={syncValue}
            onInput={setSyncValue}
            type="number"
            min={LIMITS.meter.syncMin}
            step="0.01"
            error={syncErrors.sync}
          />
          {syncNotice ? (
            <Banner
              kind="success"
              message={syncNotice}
              onClose={() => setSyncNotice(null)}
            />
          ) : null}
          {syncError ? (
            <Banner
              kind="error"
              message={syncError}
              onClose={() => setSyncError(null)}
            />
          ) : null}
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={syncing}>
              {syncing ? 'Syncing\u2026' : 'Sync'}
            </Button>
            <Button onClick={() => void refresh()} disabled={refreshing}>
              {refreshing ? 'Refreshing\u2026' : 'Refresh'}
            </Button>
          </div>
        </form>
      </Card>

      <Card title="Current transformer">
        <form onSubmit={handleRatio}>
          <TextField
            label="CT1 ratio"
            value={ratioValue}
            onInput={setRatioValue}
            type="number"
            min={LIMITS.meter.ctRatioMin}
            max={LIMITS.meter.ctRatioMax}
            error={ratioErrors.ratio}
            help="Integer 0-65535. 0 disables the ratio (direct measurement)."
          />
          <p class="muted">
            The ratio is written to the meter immediately and applied by the
            meter itself to current, power and energy. Re-sync the supplier
            energy after changing it.
          </p>
          {ratioNotice ? (
            <Banner
              kind="success"
              message={ratioNotice}
              onClose={() => setRatioNotice(null)}
            />
          ) : null}
          {ratioError ? (
            <Banner
              kind="error"
              message={ratioError}
              onClose={() => setRatioError(null)}
            />
          ) : null}
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={ratioSaving}>
              {ratioSaving ? 'Saving\u2026' : 'Save ratio'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
