/**
 * Count IP Addresses
 * https://www.codewars.com/kata/526989a41034285187000de4/train/javascript
 *
 * https://github.com/0xflotus/ip2d/blob/master/index.js#L33
 *
 */

const toDec = ip =>
  ip
    .split('.')
    .map(Number)
    .reduce((a, b) => a * 256 + b, 0)

const ipsBetween = (start, end) => toDec(end) - toDec(start)
