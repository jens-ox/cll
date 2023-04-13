import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['tsx/index.ts'],
  target: 'esnext',
  format: 'esm',
  dts: true,
  sourcemap: true,
  minify: false
})
