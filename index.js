'use strict'

var kmToMi = require('km-to-mi')
var parseMs = require('parse-ms')

module.exports = function (opts) {
  opts = opts || {}

  if (typeof opts.metric === 'undefined') {
    opts.metric = true
  }

  if (opts.output === 'speed') {
    return opts.metric ? (opts.distance / 1000) / (((opts.duration / 1000) / 60) / 60) : kmToMi(opts.distance / 1000) / (((opts.duration / 1000) / 60) / 60)
  } else {
    return parseMs(opts.metric ? opts.duration / (opts.distance / 1000) : opts.duration / kmToMi(opts.distance / 1000))
  }
}
