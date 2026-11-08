import { useEffect, useState } from 'preact/hooks';
import { getStatus } from './api/client';
import { TabBar, type TabItem } from './components/TabBar';
import { StatusPage } from './pages/Status';
import { ControlsPage } from './pages/Controls';
import { NetworkPage } from './pages/Network';
import { MqttPage } from './pages/Mqtt';
import { ModbusPage } from './pages/Modbus';
import { MeterPage } from './pages/Meter';
import { ConfigPage } from './pages/Config';
import { LoggerSettingsPage } from './pages/Logger';

type TabId =
  | 'status'
  | 'controls'
  | 'network'
  | 'mqtt'
  | 'modbus'
  | 'meter'
  | 'config'
  | 'logger';

const TABS: ReadonlyArray<TabItem<TabId>> = [
  { id: 'status', label: 'Status' },
  { id: 'controls', label: 'Controls' },
  { id: 'network', label: 'Network' },
  { id: 'mqtt', label: 'MQTT' },
  { id: 'modbus', label: 'Modbus' },
  { id: 'meter', label: 'Meter' },
  { id: 'config', label: 'Config' },
  { id: 'logger', label: 'Log' },
];

function renderPanel(tab: TabId) {
  switch (tab) {
    case 'status':
      return <StatusPage />;
    case 'controls':
      return <ControlsPage />;
    case 'network':
      return <NetworkPage />;
    case 'mqtt':
      return <MqttPage />;
    case 'modbus':
      return <ModbusPage />;
    case 'meter':
      return <MeterPage />;
    case 'config':
      return <ConfigPage />;
    case 'logger':
      return <LoggerSettingsPage />;
  }
}

export function App() {
  const [tab, setTab] = useState<TabId>('status');
  const [fwVersion, setFwVersion] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    void getStatus().then((result) => {
      if (mounted && result.ok && result.data.fwVersion) {
        setFwVersion(result.data.fwVersion);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <header class="app-header">
        <div class="brand">
          <svg
            class="brand-mark"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"
            />
          </svg>
          <h1>Faraday</h1>
        </div>
      </header>
      <TabBar tabs={TABS} active={tab} onSelect={setTab} />
      <main
        class="tab-content"
        id={`panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
      >
        {renderPanel(tab)}
      </main>
      <footer class="app-footer">
        <div class="versions">
          <span class="hint">offline device panel</span>
          <span class="hint version">FW {fwVersion ?? '\u2014'}</span>
          <span class="hint version">UI {__UI_VERSION__}</span>
        </div>
      </footer>
    </>
  );
}
