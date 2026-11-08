import { useEffect, useRef } from 'preact/hooks';

const ZIP_NOTES =
  'Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.';

const BIN_NOTES =
  'Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.';

const ZIP_CONFIRM_MESSAGE =
  'Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?';

const BIN_CONFIRM_MESSAGE =
  'Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?';

/**
 * Mounts `<edc-config-backup-page>` from `edc-config-ui` (imported once in
 * `main.tsx`). The element owns the download/restore flow and its own reboot
 * polling against the firmware's `/api/config` and `/api/config/backup`.
 */
export function ConfigPage() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.createElement('edc-config-backup-page');
    element.setAttribute('device-name', 'Faraday');
    element.setAttribute('archive-file-name', 'faraday-config.zip');
    element.setAttribute('zip-notes', ZIP_NOTES);
    element.setAttribute('bin-notes', BIN_NOTES);
    element.setAttribute('zip-confirm-text', ZIP_CONFIRM_MESSAGE);
    element.setAttribute('bin-confirm-text', BIN_CONFIRM_MESSAGE);
    host.current?.append(element);
    return () => element.remove();
  }, []);

  return <div ref={host} />;
}
