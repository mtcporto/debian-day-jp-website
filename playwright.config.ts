import { defineConfig, devices } from '@playwright/test';
const baseURL = process.env.TEST_BASE_URL || 'http://127.0.0.1:4113';
export default defineConfig({
  testDir: './tests/browser', fullyParallel: false, workers: 1,
  use: { baseURL, channel: 'msedge', trace: 'retain-on-failure' },
  projects: [{ name: 'desktop', use: { ...devices['Desktop Chrome'] } }, { name: 'mobile', use: { viewport: { width: 390, height: 844 } } }],
  webServer: process.env.TEST_BASE_URL ? undefined : { command: 'npm run start -- --port 4113', url: baseURL, reuseExistingServer: false, timeout: 60000 },
});
