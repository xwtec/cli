#!/usr/bin/env node

const meow = require('meow')
const chalk = require('chalk')
// eslint-disable-next-line import/no-unresolved
const api = require('..')

const cli = meow(
  `
  Usage
    $ xw command …
`,
  {
    flags: {},
  }
)

const [command = 'hello'] = cli.input

if (!api[command]) {
  console.log(`command ${chalk.red(command)} not found.`)
  process.exit(1)
} else {
  api[command](cli)
}
