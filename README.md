# Bassert

Bassert beatiful assert errors.

Use it instead of assert for writing tests or wherever you need to actually read the assert error messages.

### Install

```
npm i bassert
```

### Usage

Use it exactly like assert:
```js
const { ok, equal } = require('bassert')()

// When fail, see beautiful error message in console instead of stack trace
ok(1 == 2)
```

MIT Licensed. Enjoy!
