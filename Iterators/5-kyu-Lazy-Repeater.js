/**
 * Lazy Repeater
 * https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript
 *
 */

function makeLooper(str) {
  const looper = (function* () {
    while (true) yield* str
  })()

  return () => looper.next().value
}
