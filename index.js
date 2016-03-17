'use strict'

var kmToMi = require('km-to-mi')

module.exports = function (opts) {
  opts = opts || {}

  if (typeof opts.metric === 'undefined') {
    opts.metric = true
  }

  opts.distanceDivider = opts.distanceDivider || 1000
  opts.timeDivider = opts.timeDivider || 60000

  var distance = opts.metric ? opts.distance / opts.distanceDivider : kmToMi(opts.distance / opts.distanceDivider)
  var time = opts.time / opts.timeDivider

  return time / distance
}
