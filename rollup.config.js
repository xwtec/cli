// rollup.config.js

import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default [
  {
    input: './src/index.js',
    output: {
      file: './lib/index.js',
      format: 'cjs',
    },
    external: [
      'chalk',
      'meow',
      'cowsay',
      'inquirer',
      'babel-polyfill',
    ],
    plugins: [nodeResolve(), json(), commonjs(), babel()],
  },
  // {
  //   input: './src/cli.js',
  //   output: {
  //     file: './bin/index.js',
  //     format: 'cjs',
  //     external: [
  //       'meow'
  //     ]
  //   },
  //   plugins: [
  //     commonjs(),
  //     json(),
  //     nodeResolve(),
  //     babel(),
  //   ]
  // },
]
