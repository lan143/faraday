import { useCallback, useEffect, useState } from 'preact/hooks';
import { getBasement } from '../api/client';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

/**
 * Basement tab: read-only climate readings from the DHT11 on the shared
 * GPIO14 connector. `GET /api/basement` serves the firmware's cached sensor
 * values and answers `null` until the first valid read. Values are fetched on
 * mount and on demand via Refresh; there is no auto-polling.
 */

const EM_DASH = '\u2014';

function formatTemperature(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return EM_DASH;
  }
  return `${value.toFixed(1)} \u00b0C`;
}

function formatHumidity(value: number | null): string {
  if (value === null || !Number.isFinite(value)) {
    return EM_DASH;
  }
  return `${value.toFixed(0)} %`;
}

export function BasementPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [readings, setReadings] = useState<{
    temperature: number | null;
    humidity: number | null;
  } | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getBasement();
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
    const result = await getBasement();
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
      <Card title="Basement">
        <p class="muted">Loading basement climate&hellip;</p>
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

      <Card title="Basement climate">
        <dl class="kv">
          <dt>Temperature</dt>
          <dd>{formatTemperature(readings?.temperature ?? null)}</dd>
          <dt>Humidity</dt>
          <dd>{formatHumidity(readings?.humidity ?? null)}</dd>
        </dl>
      </Card>

      <p class="hint">
        Basement temperature and humidity are measured by a DHT11 on the shared
        GPIO14 connector. Readings refresh with the device poll cycle; use
        Refresh to fetch the latest cached values.
      </p>

      <div class="form-actions">
        <Button onClick={() => void refresh()} disabled={refreshing}>
          {refreshing ? 'Refreshing\u2026' : 'Refresh'}
        </Button>
      </div>
    </div>
  );
}
