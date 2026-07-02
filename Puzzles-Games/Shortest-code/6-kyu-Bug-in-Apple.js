/**
 * Shortest code: Bug in Apple
 * https://www.codewars.com/kata/56f8a648ba792a778a0000b9/train/javascript
 *
 */

const sc = (a, j) => [a.findIndex(r => (j = r.indexOf('B')) != -1), j]
