/**
 * Arithmetic sequence - sum of n elements
 * https://www.codewars.com/kata/55cb0597e12e896ab6000099/train/javascript
 *
 */

function ArithmeticSequenceSum(a, r, n) {
  let res = 0

  while (n > 0) {
    res += a

    for (let i = 1; i < n; i++) {
      res += r
    }

    n -= 1
  }

  return res
}
