import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/OceanFood/",
  server: {
    port: 5173,
    open: "/OceanFood/",
  },
});
