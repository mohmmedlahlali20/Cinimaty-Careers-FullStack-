import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/pages/__tests__', 
  reporter: 'html', // Example reporter; can use 'list', 'dot', 'json', 'html', etc.
  use: {
    baseURL: 'http://localhost:3000', // Base URL for API tests
    trace: 'on', // Enable tracing for debugging
  },
});
