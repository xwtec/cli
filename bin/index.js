#!/usr/bin/env node

const meow = require('meow')
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

const [command] = cli.input || 'hello'

if (!api[command]) {
  console.log(`command ${chalk.red(command)} not found.`)
  process.exit(1)
} else {
  api[command](cli)
}
