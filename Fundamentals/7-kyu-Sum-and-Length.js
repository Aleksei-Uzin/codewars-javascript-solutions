/**
 * Sum and Length
 * https://www.codewars.com/kata/571965ccdf7fdb10a00000ea/train/javascript
 *
 */

const sumLength = array => {
  let [pos, neg, isNeg] = [0, 0, false]

  for (let n of array) {
    if (n === 0) isNeg = !isNeg
    if (n < 0 || (n === 0 && isNeg)) {
      neg += 1
    } else {
      pos += n
    }
  }

  return `${pos} ${neg}`
}
