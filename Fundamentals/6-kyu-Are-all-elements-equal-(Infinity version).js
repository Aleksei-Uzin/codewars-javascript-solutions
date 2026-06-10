/**
 * Are all elements equal? (Infinity version)
 * https://www.codewars.com/kata/59dce15af703c42af6000035/train/javascript
 *
 */

const eqAll = iterable => {
  const it = iterable[Symbol.iterator]()
  const first = it.next().value

  for (let next of iterable) {
    if (next !== first) return false
  }

  return true
}
