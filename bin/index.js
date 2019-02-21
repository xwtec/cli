#!/usr/bin/env node

const meow = require('meow')
// eslint-disable-next-line import/no-unresolved
const api = require('..')

const cli = meow(`
	Usage
	  $ xw …
`, {
	flags: {
	}
});

api.hello()
