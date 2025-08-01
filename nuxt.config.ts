import { fileURLToPath } from "url";

export default defineNuxtConfig({
  experimental: {
    typedPages: true,
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@element-plus/nuxt",
  ],
  runtimeConfig: {
    shopId: process.env.YOOKASSA_SHOP_ID,
    kassaKey: process.env.YOOKASSA_SECRET_KEY,
  },
  alias: {
    "@user": fileURLToPath(new URL("./app/services/user", import.meta.url)),
    "@ui": fileURLToPath(new URL("./app/services/ui", import.meta.url)),
  },
  imports: {
    dirs: ["composables/**/index.ts"],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@user/*": ["app/services/user/*"],
          "@ui/*": ["app/services/ui/*"],
        },
      },
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "local",
        dir: "./app/assets/icons",
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/styles/global.scss" as *;',
        },
      },
    },
    server: {
      cors: true,
    },
  },
});
