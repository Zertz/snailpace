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
  distance: 5000
});
//=> { days: 0, hours: 0, minutes: 12, seconds: 0, milliseconds: 0 } (time per km)

snailpace({
  duration: 3600000,
  distance: 10000,
  metric: false
});
//=> { days: 0, hours: 0, minutes: 19, seconds: 18, milliseconds: 727 } (time per mi)

snailpace({
  duration: 3600000,
  distance: 10000,
  output: 'speed'
});
//=> 5 (km/h)

snailpace({
  duration: 3600000,
  distance: 10000,
  output: 'speed',
  metric: false
});
//=> 3.1068559611866697 (mi/h)
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
