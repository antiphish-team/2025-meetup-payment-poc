import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    setupFiles: ['./tests/globalMock.ts'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom',
      },
    },
    globals: true,
    clearMocks: true,
    testTimeout: 20000,
    isolate: true,
  },
});
