const bassert = require('../index.js')

async function main() {
  bassert.ok(1 == 2)

  bassert.deepEqual({ hello: 1 }, { bye: 2 })
}

main()
