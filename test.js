import test from 'ava'
import snailpace from './'

test('nothing', (t) => {
  const pace = snailpace()

  t.ok(Object.keys(pace).length, 5)
  t.ok(Number.isNaN(pace.days))
  t.ok(Number.isNaN(pace.hours))
  t.ok(Number.isNaN(pace.minutes))
  t.ok(Number.isNaN(pace.seconds))
  t.ok(Number.isNaN(pace.milliseconds))
})

test('only duration', (t) => {
  const pace = snailpace({
    duration: 3600000
  })

  t.ok(Object.keys(pace).length, 5)
  t.ok(Number.isNaN(pace.days))
  t.ok(Number.isNaN(pace.hours))
  t.ok(Number.isNaN(pace.minutes))
  t.ok(Number.isNaN(pace.seconds))
  t.ok(Number.isNaN(pace.milliseconds))
})

test('only distance', (t) => {
  const pace = snailpace({
    distance: 5000
  })

  t.ok(Object.keys(pace).length, 5)
  t.ok(Number.isNaN(pace.days))
  t.ok(Number.isNaN(pace.hours))
  t.ok(Number.isNaN(pace.minutes))
  t.ok(Number.isNaN(pace.seconds))
  t.ok(Number.isNaN(pace.milliseconds))
})

test('duration & distance', (t) => {
  t.same(snailpace({
    duration: 3600000,
    distance: 5000
  }), {
    days: 0,
    hours: 0,
    minutes: 12,
    seconds: 0,
    milliseconds: 0 
  })
})

test('duration, distance & pace', (t) => {
  t.same(snailpace({
    duration: 3600000,
    distance: 5000,
    output: 'pace'
  }), {
    days: 0,
    hours: 0,
    minutes: 12,
    seconds: 0,
    milliseconds: 0 
  })
})

test('duration, distance & metric', (t) => {
  t.same(snailpace({
    duration: 3600000,
    distance: 5000,
    metric: true
  }), {
    days: 0,
    hours: 0,
    minutes: 12,
    seconds: 0,
    milliseconds: 0 
  })
})

test('duration, distance, pace & metric', (t) => {
  t.same(snailpace({
    duration: 3600000,
    distance: 5000,
    output: 'pace',
    metric: true
  }), {
    days: 0,
    hours: 0,
    minutes: 12,
    seconds: 0,
    milliseconds: 0 
  })
})

test('duration, distance & not metric', (t) => {
  t.same(snailpace({
    duration: 3600000,
    distance: 5000,
    metric: false
  }), {
    days: 0,
    hours: 0,
    minutes: 19,
    seconds: 18,
    milliseconds: 727 
  })
})

test('duration, distance, pace & not metric', (t) => {
  t.same(snailpace({
    duration: 3600000,
    distance: 5000,
    output: 'pace',
    metric: false
  }), {
    days: 0,
    hours: 0,
    minutes: 19,
    seconds: 18,
    milliseconds: 727 
  })
})

test('duration, distance & speed', (t) => {
  t.is(snailpace({
    duration: 3600000,
    distance: 5000,
    output: 'speed'
  }), 5)
})

test('duration, distance, speed & metric', (t) => {
  t.is(snailpace({
    duration: 3600000,
    distance: 5000,
    output: 'speed',
    metric: true
  }), 5)
})

test('duration, distance, speed & not metric', (t) => {
  t.is(snailpace({
    duration: 3600000,
    distance: 5000,
    output: 'speed',
    metric: false
  }), 3.1068559611866697)
})
