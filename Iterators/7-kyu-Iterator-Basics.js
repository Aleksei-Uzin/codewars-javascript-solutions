/**
 * Iterator Basics
 * https://www.codewars.com/kata/55aeee88ecebc5c9230000a0/train/javascript
 *
 */

let counter = {
  *[Symbol.iterator]() {
    let n = 1

    while (true) {
      yield n++
    }
  },
}
