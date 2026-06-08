/**
 * Pairs of integers from m to n
 * https://www.codewars.com/kata/588e2a1ad1140d31cb00008c/train/javascript
 *
 */

const generatePairs = (m, n) => {
  const res = []

  while (m <= n) {
    for (let i = m; i <= n; i++) {
      res.push([m, i])
    }

    m += 1
  }

  return res
}
