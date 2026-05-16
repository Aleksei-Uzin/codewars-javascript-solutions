/**
 * Scoring Tests
 * https://www.codewars.com/kata/55d2aee99f30dbbf8b000001/train/javascript
 *
 */

const scoreTest = (str, right, omit, wrong) => {
  let res = 0

  for (let ans of str) {
    if (ans === 0) res += right
    else if (ans === 1) res += omit
    else res -= wrong
  }

  return res
}
