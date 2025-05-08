import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  envDir: "./env",
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3000, // ✅ Bind to Render’s assigned port
    host: "0.0.0.0", // ✅ Ensure Render can expose it
  },
});