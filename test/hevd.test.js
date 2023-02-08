const assert = require('../index.js')

async function main() {
  assert.ok(1 == 2)

  assert.deepEqual({ hello: 1 }, { bye: 2 })
}

main()
