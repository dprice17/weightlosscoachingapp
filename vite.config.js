import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/weightlosscoachingapp",
  base: process.env.BASE_URL || "/",
  plugins: [react()],
});
