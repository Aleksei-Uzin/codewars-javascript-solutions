/**
 * Single digit
 * https://www.codewars.com/kata/5a7778790136a132a00000c1/train/javascript
 *
 */

function singleDigit(n) {
  if (n < 10) return n

  const sum = [...n.toString(2)].reduce((acc, x) => acc + parseInt(x), 0)

  return singleDigit(sum)
}
