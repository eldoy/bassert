const assert = require('assert')
const path = require('path')
const util = require('util')

const pattern =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i

function parse(e) {
  return e.stack
    .split('\n')
    .map(function (line) {
      const parts = pattern.exec(line)

      if (!parts) {
        return null
      }

      return {
        file: parts[2],
        methodName: parts[1] || '<unknown>',
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
      }
    })
    .filter(Boolean)
}

function inspect(obj, options = {}) {
  return util.inspect(
    obj,
    ({ showHidden = true, depth = null, colors = true } = options)
  )
  return result
}

const fn = {}
for (const key in assert) {
  const val = assert[key]
  if (typeof val == 'function') {
    fn[key] = function (...args) {
      try {
        val(...args)
      } catch (e) {
        const lines = parse(e)
        const call = lines[1]
        const actual = util.inspect(e.actual)
        const expected = util.inspect(e.expected)
        const name = call.file.split(path.sep).reverse()[0]
        const error = [
          `${name}:${call.lineNumber}:${call.column} in ${call.methodName}:`,
          `\n  ${e.operator} failed\n  actual: ${actual}\n  expected: ${expected}\n`
        ]
        console.log(error.join(''))
      }
    }
  }
}

module.exports = fn
