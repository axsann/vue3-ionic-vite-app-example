import {Storage} from '@capacitor/storage';

export type IonicMode = 'ios' | 'md';
const IonicConfigLocalStorageKey = 'ionic-config';

interface IonicConfig {
    mode: IonicMode;
    animated: boolean;
}

function getDefaultConfig() {
  return {
    mode: 'md',
    animated: false,
  };
}

export async function getIonicConfig(): Promise<IonicConfig> {
  const jsonString = (await Storage.get({
    key: IonicConfigLocalStorageKey,
  })).value;
  return jsonString ? JSON.parse(jsonString) : getDefaultConfig();
}

export async function setIonicConfig(config: IonicConfig): Promise<void> {
  await Storage.set({
    key: IonicConfigLocalStorageKey,
    value: JSON.stringify(config),
  });
}
