# JavaScript Testing Practice

Small utility functions written **test-first with Jest**, from [The Odin Project](https://www.theodinproject.com/).

| Function | What it does |
|---|---|
| `capitalize` | Capitalizes the first character of a string |
| `reverseString` | Reverses a string |
| `calculator` | `add`, `subtract`, `divide`, `multiply` |
| `caesarCipher` | Shifts letters with wrapping, preserving case and punctuation |
| `analyzeArray` | Returns `{ average, min, max, length }` for an array of numbers |

There are 47 tests in `tests/`, covering normal cases and edge cases.

## Run the tests

```bash
npm install
npm test
```

Uses Jest with Babel so tests can import ES modules.
