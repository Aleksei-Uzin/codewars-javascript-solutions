/**
 * Delta Generators
 * https://www.codewars.com/kata/6040b781e50db7000ab35125/train/javascript
 *
 */

function* diff(iterable) {
  let prev = null

  for (let curr of iterable) {
    if (prev === null) {
      prev = curr
    } else {
      yield curr - prev
      prev = curr
    }
  }
}

function* delta(values, n) {
  yield* n === 1 ? diff(values) : delta(diff(values), n - 1)
}
