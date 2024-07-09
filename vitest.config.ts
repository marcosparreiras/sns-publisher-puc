import { defineConfig } from "vitest/config";
import { config } from "dotenv";

export default defineConfig({
  test: {
    globals: true,
    env: {
      ...config({ path: "./.env" }).parsed,
    },
  },
});
