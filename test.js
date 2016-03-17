import test from 'ava'
import snailpace from './'

test('nothing', (t) => {
  t.ok(Number.isNaN(snailpace()))
})

test('only time', (t) => {
  t.ok(Number.isNaN(snailpace({
    time: 3600000
  })))
})

test('only distance', (t) => {
  t.ok(Number.isNaN(snailpace({
    distance: 5000
  })))
})

test('min/km', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000
  }), 12)
})

test('min/mi', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    metric: false
  }), 19.312128)
})

test('s/km', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    timeDivider: 1000
  }), 720)
})

test('min/100m', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    distanceDivider: 100
  }), 1.2)
})

test('s/m', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    timeDivider: 1000,
    distanceDivider: 1
  }), 0.72)
})
