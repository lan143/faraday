import { useCallback, useEffect, useState } from 'preact/hooks';
import { getControls, saveControls } from '../api/client';
import type { ControlsEntity, ControlsState } from '../api/types';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Toggle } from '../components/Toggle';

/**
 * Controls tab: on/off switches for the ventilation, light and generator
 * changeover relays. `GET /api/controls` returns the live state; a `null` entity
 * means the relay bus was busy, so the first load renders it as off + muted
 * rather than as an error. Toggles flip optimistically and revert on any failed
 * POST.
 */

type ControlKey = 'ventilation' | 'light' | 'generator';

interface ControlView {
  value: boolean;
  unknown: boolean;
}

type ControlViews = Record<ControlKey, ControlView>;

const INITIAL_VIEWS: ControlViews = {
  ventilation: { value: false, unknown: true },
  light: { value: false, unknown: true },
  generator: { value: false, unknown: true },
};

const ENTITIES: ReadonlyArray<{ key: ControlKey; label: string }> = [
  { key: 'ventilation', label: 'Ventilation' },
  { key: 'light', label: 'Light' },
  { key: 'generator', label: 'Generator' },
];

function mergeEntity(previous: ControlView, entity: ControlsEntity): ControlView {
  if (typeof entity.enabled === 'boolean') {
    return { value: entity.enabled, unknown: false };
  }
  // `null`: keep the last-known boolean (the initial view is off + unknown).
  return previous;
}

export function ControlsPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [views, setViews] = useState<ControlViews>(INITIAL_VIEWS);
  const [pending, setPending] = useState<Record<ControlKey, boolean>>({
    ventilation: false,
    light: false,
    generator: false,
  });
  const [actionError, setActionError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const applyState = useCallback((data: ControlsState) => {
    setViews((current) => ({
      ventilation: mergeEntity(current.ventilation, data.ventilation),
      light: mergeEntity(current.light, data.light),
      generator: mergeEntity(current.generator, data.generator),
    }));
  }, []);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getControls();
    if (result.ok) {
      applyState(result.data);
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, [applyState]);

  useEffect(() => {
    void load();
  }, [load]);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    setLoadError(null);
    const result = await getControls();
    if (result.ok) {
      applyState(result.data);
    } else {
      setLoadError(result.message);
    }
    setRefreshing(false);
  }, [applyState]);

  const toggle = useCallback(
    async (key: ControlKey, next: boolean) => {
      if (pending[key]) {
        return;
      }

      const previous = views[key];
      setActionError(null);
      setViews((current) => ({ ...current, [key]: { value: next, unknown: false } }));
      setPending((current) => ({ ...current, [key]: true }));

      try {
        const result = await saveControls({ [key]: next });
        if (result.ok) {
          setViews((current) => ({ ...current, [key]: mergeEntity(current[key], result.data[key]) }));
        } else {
          setViews((current) => ({ ...current, [key]: previous }));
          setActionError(result.message);
        }
      } catch (caught) {
        setViews((current) => ({ ...current, [key]: previous }));
        setActionError(caught instanceof Error ? caught.message : String(caught));
      } finally {
        setPending((current) => ({ ...current, [key]: false }));
      }
    },
    [pending, views],
  );

  if (!loaded) {
    return (
      <Card title="Controls">
        <p class="muted">Loading controls&hellip;</p>
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

      <Card title="Controls">
        {actionError ? (
          <Banner
            kind="error"
            message={actionError}
            onClose={() => setActionError(null)}
          />
        ) : null}

        {ENTITIES.map(({ key, label }) => (
          <Toggle
            key={key}
            label={label}
            checked={views[key].value}
            unknown={views[key].unknown}
            pending={pending[key]}
            onChange={(next) => void toggle(key, next)}
          />
        ))}

        <div class="form-actions">
          <Button onClick={() => void refresh()} disabled={refreshing}>
            {refreshing ? 'Refreshing\u2026' : 'Refresh'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
