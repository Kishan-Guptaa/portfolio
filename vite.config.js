// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  base: '/', // 👈 conditionally set base
  build :{
    outDir: 'dist', // Output directory for build
  },
  plugins: [react(), tailwindcss()],
}))
