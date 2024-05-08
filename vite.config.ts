import react from "@vitejs/plugin-react";
import path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@types": path.resolve(__dirname, "./src/types/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
    },
  },
  plugins: [react()],
});
