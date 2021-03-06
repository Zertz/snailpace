# snailpace [![Build Status](https://travis-ci.org/Zertz/snailpace.svg?branch=master)](https://travis-ci.org/Zertz/snailpace) [![NPM version](https://badge.fury.io/js/snailpace.png)](http://badge.fury.io/js/snailpace)

> Calculate pace for a given time and distance


## Install

```
$ npm install --save snailpace
```


## Usage

```js
const snailpace = require('snailpace');

snailpace({
  time: 3600000,
  distance: 5000
});
//=> 720000 (ms/km)

snailpace({
  time: 3600000,
  distance: 5000,
  metric: false
});
//=> 1158727.68 (ms/mi)

snailpace({
  time: 3600000,
  distance: 5000,
  timeDivider: 1000,
  distanceDivider: 1
});
//=> 0.72 (s/m)
```

> Protip: use with moment.utc(snailpace({ ... )).format()

## API

### snailpace(options)

#### options

##### time

Type: `number`

Time in milliseconds

##### distance

Type: `number`

Distance in meters

#### timeDivider

Type: `number`

Default: `1` (1 ms)

Calculate pace in this unit of time per distance

#### distanceDivider

Type: `number`

Default: `1000` (1 km)

Calculate pace in this unit of distance per time

##### metric

Type: `boolean`

Default: `true`


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
