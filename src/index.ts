import { wrapBin } from '@d-dev/archive-downloader'
import { resolve } from 'node:path'

import type { BinReturn as B } from '@d-dev/archive-downloader'

export type BinReturn = B

export const runGov4Git: (...args: string[]) => Promise<BinReturn> = wrapBin(
  resolve(__dirname, '../bin/gov4git'),
  { maxBuffer: 1024 * 1024 * 1024 },
)
