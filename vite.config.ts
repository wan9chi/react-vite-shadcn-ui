import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  run: {
    cache: true,
    tasks: {
      "ci-build": {
        command: "vp build",
        input: [
          "components.json",
          "index.html",
          "package.json",
          "src/**",
          "tailwind.config.ts",
          "tsconfig*.json",
          "vite.config.ts",
        ],
        output: ["dist/**"],
      },
      "ci-lint": {
        command: "vp lint",
        input: [
          "components.json",
          "eslint.config.js",
          "package.json",
          "src/**",
          "tailwind.config.ts",
          "tsconfig*.json",
          "vite.config.ts",
        ],
      },
      stamp: {
        command: "node scripts/stamp.mjs",
        input: ["scripts/stamp.mjs"],
        output: ["dist/stamp.txt"],
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
