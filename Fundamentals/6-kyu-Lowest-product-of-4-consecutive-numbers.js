/**
 * Lowest product of 4 consecutive numbers
 * https://www.codewars.com/kata/554e52e7232cdd05650000a0/train/javascript
 *
 */

const lowestProduct = input => {
  if (input.length < 4) return 'Number is too small'

  let res = Infinity

  for (let i = 0; i < input.length - 3; i++) {
    const [a, b, c, d] = [input[i], input[i + 1], input[i + 2], input[i + 3]]
    const prod = a * b * c * d

    if (prod < res) res = prod
  }

  return res
}
