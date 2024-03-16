import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createProxy } from "vite-plugin-proxy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        createProxy({
            "/api": {
                target: "https://sehatsampark-backend.onrender.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        }),
    ],
    plugins: [react()],
});
