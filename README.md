# sleep

[![Build Status](https://travis-ci.org/dejakob/sleep.svg?branch=master)](https://travis-ci.org/dejakob/sleep)
[![NPM](https://img.shields.io/npm/v/alegrify-sleep/latest.svg?label=npm)](https://npmjs.com/package/alegrify-sleep)

Let your async function sleep for some milliseconds

## Usage

```js
const sleep = require('sleep');

async function main() {
  console.log('hello');
  await sleep(200);
  console.log('world');
}
```