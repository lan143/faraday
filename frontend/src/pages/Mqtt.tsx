import { useCallback, useEffect, useState } from 'preact/hooks';
import { getSettings, LIMITS, postMqtt } from '../api/client';
import { Banner } from '../components/Banner';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

/**
 * MQTT settings tab. Mirrors prometey's Connections page: the form is
 * prefilled from `GET /api/settings`, validated against the firmware buffer
 * caps, and saved with `POST /api/settings/mqtt` (urlencoded). The write is
 * persisted immediately but only takes effect after a reboot.
 */

interface MqttForm {
  host: string;
  port: string;
  login: string;
  password: string;
  haDiscoveryPrefix: string;
  mqttIsHADiscovery: boolean;
  stateTopic: string;
  commandTopic: string;
}

interface MqttErrors {
  host?: string;
  port?: string;
  login?: string;
  password?: string;
  haDiscoveryPrefix?: string;
  stateTopic?: string;
  commandTopic?: string;
}

const EMPTY_MQTT: MqttForm = {
  host: '',
  port: '',
  login: '',
  password: '',
  haDiscoveryPrefix: '',
  mqttIsHADiscovery: false,
  stateTopic: '',
  commandTopic: '',
};

function validateMqtt(form: MqttForm): MqttErrors {
  const errors: MqttErrors = {};

  if (form.host.trim().length === 0) {
    errors.host = 'Host is required.';
  } else if (form.host.length > LIMITS.mqtt.hostMax) {
    errors.host = `At most ${LIMITS.mqtt.hostMax} characters.`;
  }

  const port = Number(form.port);
  if (form.port.trim() === '') {
    errors.port = 'Port is required.';
  } else if (!Number.isInteger(port) || port < 1 || port > 65535) {
    errors.port = 'Port must be an integer between 1 and 65535.';
  }

  if (form.login.length > LIMITS.mqtt.loginMax) {
    errors.login = `At most ${LIMITS.mqtt.loginMax} characters.`;
  }
  if (form.password.length > LIMITS.mqtt.passwordMax) {
    errors.password = `At most ${LIMITS.mqtt.passwordMax} characters.`;
  }

  if (form.haDiscoveryPrefix.trim().length === 0) {
    errors.haDiscoveryPrefix = 'Discovery prefix is required.';
  } else if (form.haDiscoveryPrefix.length > LIMITS.mqtt.haDiscoveryPrefixMax) {
    errors.haDiscoveryPrefix = `At most ${LIMITS.mqtt.haDiscoveryPrefixMax} characters.`;
  }

  if (form.stateTopic.trim().length === 0) {
    errors.stateTopic =
      'Required - the device crashes if the state topic is missing.';
  } else if (form.stateTopic.length > LIMITS.mqtt.topicMax) {
    errors.stateTopic = `At most ${LIMITS.mqtt.topicMax} characters.`;
  }

  if (form.commandTopic.trim().length === 0) {
    errors.commandTopic =
      'Required - the device crashes if the command topic is missing.';
  } else if (form.commandTopic.length > LIMITS.mqtt.topicMax) {
    errors.commandTopic = `At most ${LIMITS.mqtt.topicMax} characters.`;
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
  type?: 'text' | 'number' | 'password';
  min?: number;
  max?: number;
  maxLength?: number;
  autoComplete?: string;
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
  maxLength,
  autoComplete,
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
        maxLength={maxLength}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        onInput={(event) => onInput(event.currentTarget.value)}
      />
      {help && !error ? <span class="field-help">{help}</span> : null}
      {error ? <span class="field-error">{error}</span> : null}
    </label>
  );
}

function PasswordField({
  label,
  value,
  onInput,
  maxLength,
  error,
}: {
  label: string;
  value: string;
  onInput: (value: string) => void;
  maxLength: number;
  error?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div class="password-field">
      <TextField
        label={label}
        value={value}
        onInput={onInput}
        type={revealed ? 'text' : 'password'}
        maxLength={maxLength}
        autoComplete="new-password"
        error={error}
      />
      <button
        type="button"
        class="btn reveal-toggle"
        aria-pressed={revealed}
        onClick={() => setRevealed((current) => !current)}
      >
        {revealed ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div class="checkbox-field">
      <label class="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.currentTarget.checked)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export function MqttPage() {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [mqtt, setMqtt] = useState<MqttForm>(EMPTY_MQTT);
  const [mqttErrors, setMqttErrors] = useState<MqttErrors>({});

  const [mqttSaving, setMqttSaving] = useState(false);
  const [mqttNotice, setMqttNotice] = useState<string | null>(null);
  const [mqttError, setMqttError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoadError(null);
    const result = await getSettings();
    if (result.ok) {
      setMqtt({
        host: result.data.mqttHost,
        port: String(result.data.mqttPort),
        login: result.data.mqttLogin,
        password: result.data.mqttPassword,
        haDiscoveryPrefix: result.data.mqttHADiscoveryPrefix,
        mqttIsHADiscovery: result.data.mqttIsHADiscovery,
        stateTopic: result.data.mqttStateTopic,
        commandTopic: result.data.mqttCommandTopic,
      });
    } else {
      setLoadError(result.message);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const updateMqtt = (patch: Partial<MqttForm>) =>
    setMqtt((current) => ({ ...current, ...patch }));

  const handleMqttSubmit = useCallback(
    async (event: Event) => {
      event.preventDefault();
      const errors = validateMqtt(mqtt);
      setMqttErrors(errors);
      setMqttNotice(null);
      setMqttError(null);
      if (hasErrors(errors)) {
        return;
      }

      setMqttSaving(true);
      try {
        const result = await postMqtt({
          host: mqtt.host,
          port: Number(mqtt.port),
          login: mqtt.login,
          password: mqtt.password,
          haDiscoveryPrefix: mqtt.haDiscoveryPrefix,
          mqttIsHADiscovery: mqtt.mqttIsHADiscovery,
          stateTopic: mqtt.stateTopic,
          commandTopic: mqtt.commandTopic,
        });
        if (result.ok) {
          setMqttNotice('MQTT settings saved to flash.');
        } else {
          setMqttError(result.message);
        }
      } catch (error) {
        setMqttError(error instanceof Error ? error.message : String(error));
      }
      setMqttSaving(false);
    },
    [mqtt],
  );

  if (!loaded) {
    return (
      <Card title="MQTT">
        <p class="muted">Loading MQTT settings&hellip;</p>
      </Card>
    );
  }

  return (
    <div class="stack">
      <Banner
        kind="info"
        message="Changes are saved to flash and take effect only after a reboot."
      />

      {loadError ? (
        <>
          <Banner kind="error" message={loadError} />
          <div class="form-actions">
            <Button onClick={() => void load()}>Retry</Button>
          </div>
        </>
      ) : null}

      <Card title="MQTT">
        <form onSubmit={handleMqttSubmit}>
          <TextField
            label="Host"
            value={mqtt.host}
            onInput={(value) => updateMqtt({ host: value })}
            maxLength={LIMITS.mqtt.hostMax}
            autoComplete="off"
            error={mqttErrors.host}
          />
          <TextField
            label="Port"
            value={mqtt.port}
            onInput={(value) => updateMqtt({ port: value })}
            type="number"
            min={1}
            max={65535}
            error={mqttErrors.port}
          />
          <TextField
            label="Login"
            value={mqtt.login}
            onInput={(value) => updateMqtt({ login: value })}
            maxLength={LIMITS.mqtt.loginMax}
            autoComplete="off"
            error={mqttErrors.login}
          />
          <PasswordField
            label="Password"
            value={mqtt.password}
            onInput={(value) => updateMqtt({ password: value })}
            maxLength={LIMITS.mqtt.passwordMax}
            error={mqttErrors.password}
          />
          <TextField
            label="HA discovery prefix"
            value={mqtt.haDiscoveryPrefix}
            onInput={(value) => updateMqtt({ haDiscoveryPrefix: value })}
            maxLength={LIMITS.mqtt.haDiscoveryPrefixMax}
            autoComplete="off"
            error={mqttErrors.haDiscoveryPrefix}
          />
          <Checkbox
            label="Enable Home Assistant discovery"
            checked={mqtt.mqttIsHADiscovery}
            onChange={(checked) => updateMqtt({ mqttIsHADiscovery: checked })}
          />
          <TextField
            label="State topic"
            value={mqtt.stateTopic}
            onInput={(value) => updateMqtt({ stateTopic: value })}
            maxLength={LIMITS.mqtt.topicMax}
            autoComplete="off"
            error={mqttErrors.stateTopic}
            help="Must not be empty: the device crashes on a missing state topic."
          />
          <TextField
            label="Command topic"
            value={mqtt.commandTopic}
            onInput={(value) => updateMqtt({ commandTopic: value })}
            maxLength={LIMITS.mqtt.topicMax}
            autoComplete="off"
            error={mqttErrors.commandTopic}
            help="Must not be empty: the device crashes on a missing command topic."
          />
          {mqttNotice ? (
            <Banner
              kind="success"
              message={mqttNotice}
              onClose={() => setMqttNotice(null)}
            />
          ) : null}
          {mqttError ? (
            <Banner
              kind="error"
              message={mqttError}
              onClose={() => setMqttError(null)}
            />
          ) : null}
          <div class="form-actions">
            <Button type="submit" variant="primary" disabled={mqttSaving}>
              {mqttSaving ? 'Saving\u2026' : 'Save MQTT'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
