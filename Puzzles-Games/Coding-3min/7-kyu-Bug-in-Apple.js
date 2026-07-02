/**
 * Coding 3min: Bug in Apple
 * https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript
 *
 */

const sc = apple => {
  const reg = /^b$/i

  for (let i = 0; i < apple.length; i++) {
    for (let j = 0; j < apple[0].length; j++) {
      if (reg.test(apple[i][j])) return [i, j]
    }
  }
}
