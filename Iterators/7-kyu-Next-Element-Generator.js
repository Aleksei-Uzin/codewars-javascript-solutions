/**
 * Next Element Generator
 * https://www.codewars.com/kata/61fab7a6a0e59f000ef08feb/train/javascript
 *
 */

function* nextElementGenerator(array) {
  const len = array.length
  let i = 0

  while (true) {
    yield array[i++ % len]
  }
}

/**
 * Best Practice
 */
function* nextIndex(array) {
  while (true) yield* array
}
