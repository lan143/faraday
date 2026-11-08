export interface ToggleProps {
  label: string;
  hint?: string;
  checked: boolean;
  disabled?: boolean;
  pending?: boolean;
  unknown?: boolean;
  onChange: (next: boolean) => void;
}

/**
 * Accessible on/off switch. Purely presentational: the caller owns the state,
 * the pending flag and the optimistic flip/revert behavior.
 */
export function Toggle({
  label,
  hint,
  checked,
  disabled,
  pending,
  unknown,
  onChange,
}: ToggleProps) {
  const inactive = disabled || pending;

  return (
    <div
      class={`toggle${unknown ? ' toggle-unknown' : ''}${pending ? ' toggle-pending' : ''}`}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        class="toggle-control"
        disabled={inactive}
        title={unknown ? 'State unknown' : undefined}
        onClick={() => onChange(!checked)}
      >
        <span class="toggle-track" aria-hidden="true">
          <span class="toggle-knob" />
        </span>
        <span class="toggle-text">
          <span class="toggle-label">{label}</span>
          {hint ? <span class="toggle-hint">{hint}</span> : null}
        </span>
      </button>
    </div>
  );
}
