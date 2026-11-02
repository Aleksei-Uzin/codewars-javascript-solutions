/**
 * Find the Missing Number
 * https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/javascript
 *
 */

const missingNo = arr => {
  const n = 100

  const sum = (n * (n + 1)) / 2
  const res = arr.reduce((acc, n) => acc - n, sum)

  return res
}
