import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/admin/', // Yeh ensure karega ki sabhi file paths `/admin/` se start honge
  build: {
    outDir: 'dist', // Build output `dist` folder mein jayega
  },
});