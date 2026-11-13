/**
 * Binary string
 * https://www.codewars.com/kata/52654ea8e218b83553000666/train/javascript
 *
 */

function toBinaryString(num, res = '') {
  if (num === 0) return '0'

  const reminder = num % 2
  const quotient = Math.floor(num / 2)

  if (quotient > 1) {
    res += reminder
    return toBinaryString(quotient, res)
  }

  res += reminder
  res += quotient

  return res.split('').reverse().join('')
}
