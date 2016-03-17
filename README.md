# snailpace [![Build Status](https://travis-ci.org/Zertz/snailpace.svg?branch=master)](https://travis-ci.org/Zertz/snailpace) [![NPM version](https://badge.fury.io/js/snailpace.png)](http://badge.fury.io/js/snailpace)

> Calculate pace or speed for a given duration and distance


## Install

```
$ npm install --save snailpace
```


## Usage

```js
const snailpace = require('snailpace');

snailpace({
  duration: 3600000,
  distance: 10000,
  output: 'pace'
});
//=> 00:05:00.000 (time per km)

snailpace({
  duration: 3600000,
  distance: 10000,
  output: 'pace',
  metric: false
});
//=> 00:05:00.000 (time per mi)

snailpace({
  duration: 3600000,
  distance: 10000,
  output: 'speed'
});
//=> 10 (mk/h)

snailpace({
  duration: 3600000,
  distance: 10000,
  output: 'speed',
  metric: false
});
//=> 6.2137119223733395 (mi/h)
```


## API

### snailpace(options)

#### options

##### duration

Type: `number`

Duration in milliseconds

##### distance

Type: `number`

Distance in meters

##### output

Type: `string`
Default: `'pace'`

Possible values: `'pace'`, `'speed'`

##### metric

Type: `boolean`
Default: `true`


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
