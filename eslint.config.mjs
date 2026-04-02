import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  {
    extends: [...nextCoreWebVitals, ...nextTypescript],
    rules: {
      // Next 16 / react-hooks 7 flags common valid patterns (syncing UI to props, browser APIs).
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
