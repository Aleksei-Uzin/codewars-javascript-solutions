/**
 * intToBits(int, length)
 * https://www.codewars.com/kata/538865ef0b24c5ce6a00070d/train/javascript
 *
 */

const intToBits = (int, length) => {
  if (!Number.isInteger(int)) return null
  if (!Number.isInteger(length) || length < 1 || length > 32) length = 32

  return (int >>> 0).toString(2).padStart(length, '0')
}
