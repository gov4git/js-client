import { resolve } from 'node:path'

import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['./src/index.ts', './src/bin.ts'],
  format: ['cjs', 'esm'],
  target: 'node18',
  shims: true,
  outDir: resolve(__dirname, './dist'),
  external: ['electron'],
  treeshake: false,
  splitting: false,
  sourcemap: 'inline',
  clean: false,
}))
