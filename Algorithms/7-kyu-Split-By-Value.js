/**
 * Split By Value
 * https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc/train/javascript
 *
 */

const splitByValue = (k, elements) => {
  const lessThanK = []
  const greaterThanK = []

  for (let n of elements) {
    n < k ? lessThanK.push(n) : greaterThanK.push(n)
  }

  return [...lessThanK, ...greaterThanK]
}
