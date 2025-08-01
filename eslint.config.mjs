// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    rules: {
      // ⚠️ Понижаем строгость для any
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);
