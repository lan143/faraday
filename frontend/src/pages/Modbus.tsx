import { useCallback, useEffect, useState } from 'preact/hooks';
import {
  getModbusSettings,
  LIMITS,
  saveModbusSettings,
} from '../api/client';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

/**
 * Modbus tab: RS-485 speed and WB-MAP12E unit address. Prefilled from
 * `GET /api/settings/modbus`, validated against the firmware whitelist, and
 * saved with `POST /api/settings/modbus` (JSON). The speed is applied live;
 * the address takes effect after a reboot.
 */

interface ModbusForm {
  modbusSpeed: string;
  map12eAddress: string;
}

interface ModbusErrors {
  map12eAddress?: string;
}

const EMPTY_MODBUS: ModbusForm = {
  modbusSpeed: String(LIMITS.modbus.speeds[0]),
  map12eAddress: '',
};

function validateModbus(form: ModbusForm): ModbusErrors {
  const errors: ModbusErrors = {};

  if (form.map12eAddress.trim() === '') {
    errors.map12eAddress = 'Address is required.';
  } else {
    const address = Number(form.map12eAddress);
    if (
      !Number.isInteger(address) ||
      address < LIMITS.modbus.addressMin ||
      address > LIMITS.modbus.addressMax
    ) {
      errors.map12eAddress = `Address must be an integer between ${LIMITS.modbus.addressMin} and ${LIMITS.modbus.addressMax}.`;
    }
  }

  return errors;
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
        aria-invalid={error ? true : undefined}
        onInput={(event) => onInput(event.currentTarget.value)}
      />
      {help && !error ? <span class="field-help">{help}</span> : null}
      {error ? <span class="field-error">{error}</span> : null}
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: ReadonlyArray<number>;
  onChange: (value: string) => void;
}) {
  return (
    <label class="field">
      <span class="field-label">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      >
        {options.map((option) => (
          <option key={option} value={String(option)}>
            {option} baud
          </option>
        ))}
      </select>
    </label>
  );
}

export function ModbusPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [form, setForm] = useState<ModbusForm>(EMPTY_MODBUS);
  const [errors, setErrors] = useState<ModbusErrors>({});
  const [loadedAddress, setLoadedAddress] = useState<number | null>(null);

  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getModbusSettings();
    if (result.ok) {
      setForm({
        modbusSpeed: String(result.data.modbusSpeed),
        map12eAddress: String(result.data.map12eAddress),
      });
      setLoadedAddress(result.data.map12eAddress);
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const updateForm = (patch: Partial<ModbusForm>) =>
    setForm((current) => ({ ...current, ...patch }));

  const handleSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const nextErrors = validateModbus(form);
      setErrors(nextErrors);
      setNotice(null);
      setError(null);
      if (hasErrors(nextErrors)) {
        return;
      }

      const address = Number(form.map12eAddress);
      setSaving(true);
      try {
        const result = await saveModbusSettings({
          modbusSpeed: Number(form.modbusSpeed),
          map12eAddress: address,
        });
        if (result.ok) {
          setForm({
            modbusSpeed: String(result.data.modbusSpeed),
            map12eAddress: String(result.data.map12eAddress),
          });
          const addressChanged = address !== loadedAddress;
          setLoadedAddress(result.data.map12eAddress);
          setNotice(
            addressChanged
              ? 'Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.'
              : 'Modbus settings saved. The new speed is applied now.',
          );
        } else {
          setError(result.message);
        }
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : String(caught));
      }
      setSaving(false);
    },
    [form, loadedAddress],
  );

  if (!loaded) {
    return (
      <Card title="Modbus">
        <p class="muted">Loading Modbus settings&hellip;</p>
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

      <Card title="Modbus">
        <form onSubmit={handleSubmit}>
          <SelectField
            label="RS-485 speed"
            value={form.modbusSpeed}
            options={LIMITS.modbus.speeds}
            onChange={(value) => updateForm({ modbusSpeed: value })}
          />
          <TextField
            label="WB-MAP12E address"
            value={form.map12eAddress}
            onInput={(value) => updateForm({ map12eAddress: value })}
            type="number"
            min={LIMITS.modbus.addressMin}
            max={LIMITS.modbus.addressMax}
            error={errors.map12eAddress}
            help={`Modbus unit id ${LIMITS.modbus.addressMin}-${LIMITS.modbus.addressMax}.`}
          />
          {notice ? (
            <Banner
              kind="success"
              message={notice}
              onClose={() => setNotice(null)}
            />
          ) : null}
          {error ? (
            <Banner
              kind="error"
              message={error}
              onClose={() => setError(null)}
            />
          ) : null}
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={saving}>
              {saving ? 'Saving\u2026' : 'Save Modbus'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
