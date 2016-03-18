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

test('ms/km', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000
  }), 720000)
})

test('ms/mi', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    metric: false
  }), 1158727.68)
})

test('s/km', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    timeDivider: 1000
  }), 720)
})

test('ms/100m', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    distanceDivider: 100
  }), 72000)
})

test('s/m', (t) => {
  t.same(snailpace({
    time: 3600000,
    distance: 5000,
    timeDivider: 1000,
    distanceDivider: 1
  }), 0.72)
})
