import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  envDir: "./env",
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 4173, // ✅ Explicitly set Render's port
    host: "0.0.0.0", // ✅ Allow external access
    strictPort: true, // ✅ Prevent Vite from changing the port dynamically
  },
});
