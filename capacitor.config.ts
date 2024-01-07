import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'all-in-one',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
