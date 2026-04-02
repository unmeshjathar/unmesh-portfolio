import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "unmesh_portfolio",
      // Expose each section as a federated module
      // so other host apps can consume them independently
      exposes: {
        "./Hero": "./src/components/Hero",
        "./About": "./src/components/About",
        "./Skills": "./src/components/Skills",
        "./Projects": "./src/components/Projects",
        "./Experience": "./src/components/Experience",
        "./Contact": "./src/components/Contact",
        "./Footer": "./src/components/Footer",
        "./Navbar": "./src/components/Navbar",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["src/components/**/*.tsx"],
    },
  },
});
