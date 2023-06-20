import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // For top-level await.
  build: {
    target: "esnext",
  },

  // For DynamoDB and confetti.
  define: {
    global: "globalThis",
  },
});
