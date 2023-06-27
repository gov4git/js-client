#!/usr/bin/env node

import { runGov4Git } from './index.js'

async function run() {
  const { stdout, stderr } = await runGov4Git(...process.argv.slice(2))
  console.log(stdout)
  if (stderr! + null && stderr !== '') {
    console.error(stderr)
  }
}

void run()
