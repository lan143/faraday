import { useCallback, useEffect, useState } from 'preact/hooks';
import { getAnenjiSettings } from '../api/client';
import type { AnenjiReadings } from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

/**
 * Anenji tab: read-only live readings from the Anenji 4200 inverter.
 * `GET /api/settings/anenji` returns every value as `null` when the inverter
 * is disabled, unreachable or the Modbus bus is busy. Values are fetched on
 * mount and on demand via Refresh; there is no auto-polling.
 */

const EM_DASH = '\u2014';

function formatNumber(value: number | null, decimals: number): string {
  if (value === null || !Number.isFinite(value)) {
    return EM_DASH;
  }
  return value.toFixed(decimals);
}

function formatVoltage(value: number | null): string {
  return formatNumber(value, 1);
}

function formatCurrent(value: number | null): string {
  return formatNumber(value, 1);
}

function formatPower(value: number | null): string {
  return formatNumber(value, 0);
}

function formatCharging(value: boolean | null): string {
  if (value === null) {
    return EM_DASH;
  }
  return value ? 'Charging' : 'Not charging';
}

function formatText(value: string | null): string {
  if (value === null || value === undefined) {
    return EM_DASH;
  }
  return value;
}

export function AnenjiPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [readings, setReadings] = useState<AnenjiReadings | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getAnenjiSettings();
    if (result.ok) {
      setReadings(result.data);
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    const result = await getAnenjiSettings();
    if (result.ok) {
      setReadings(result.data);
      setLoadError(null);
    } else {
      setLoadError(result.message);
    }
    setRefreshing(false);
  }, []);

  if (!loaded) {
    return (
      <Card title="Anenji">
        <p class="muted">Loading inverter readings&hellip;</p>
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

      {readings && !readings.enabled ? (
        <Banner
          kind="info"
          message="The inverter is disabled. Set a non-zero ANENJI 4200 address on the Modbus tab and reboot to enable it."
        />
      ) : null}

      <Card title="Mains">
        <dl class="kv">
          <dt>Voltage</dt>
          <dd>{formatVoltage(readings?.mainsVoltage ?? null)} V</dd>
          <dt>Current</dt>
          <dd>{formatCurrent(readings?.mainsCurrent ?? null)} A</dd>
          <dt>Power</dt>
          <dd>{formatPower(readings?.mainsPower ?? null)} W</dd>
        </dl>
      </Card>

      <Card title="Output">
        <dl class="kv">
          <dt>Voltage</dt>
          <dd>{formatVoltage(readings?.outputVoltage ?? null)} V</dd>
          <dt>Current</dt>
          <dd>{formatCurrent(readings?.outputCurrent ?? null)} A</dd>
          <dt>Power</dt>
          <dd>{formatPower(readings?.outputPower ?? null)} W</dd>
        </dl>
      </Card>

      <Card title="Battery">
        <dl class="kv">
          <dt>Voltage</dt>
          <dd>{formatVoltage(readings?.batteryVoltage ?? null)} V</dd>
          <dt>Current</dt>
          <dd>{formatCurrent(readings?.batteryCurrent ?? null)} A</dd>
          <dt>Power</dt>
          <dd>{formatPower(readings?.batteryPower ?? null)} W</dd>
          <dt>Charging</dt>
          <dd>{formatCharging(readings?.batteryCharging ?? null)}</dd>
        </dl>
      </Card>

      <Card title="Solar">
        <dl class="kv">
          <dt>Voltage</dt>
          <dd>{formatVoltage(readings?.pvVoltage ?? null)} V</dd>
          <dt>Current</dt>
          <dd>{formatCurrent(readings?.pvCurrent ?? null)} A</dd>
          <dt>Power</dt>
          <dd>{formatPower(readings?.pvPower ?? null)} W</dd>
        </dl>
      </Card>

      <Card title="Modes">
        <dl class="kv">
          <dt>Work mode</dt>
          <dd>{formatText(readings?.workMode ?? null)}</dd>
          <dt>Output mode</dt>
          <dd>{formatText(readings?.outputMode ?? null)}</dd>
          <dt>Output priority</dt>
          <dd>{formatText(readings?.outputPriority ?? null)}</dd>
          <dt>Charge priority</dt>
          <dd>{formatText(readings?.chargePriority ?? null)}</dd>
        </dl>
      </Card>

      <div class="form-actions">
        <Button onClick={() => void refresh()} disabled={refreshing}>
          {refreshing ? 'Refreshing\u2026' : 'Refresh'}
        </Button>
      </div>
    </div>
  );
}
