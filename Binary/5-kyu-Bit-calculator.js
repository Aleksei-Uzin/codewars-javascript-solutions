/**
 * Bit calculator
 * https://www.codewars.com/kata/52ece9de44751a64dc0001d9/train/javascript
 *
 */

const toDecimal = binary =>
  [...binary].reduceRight((acc, n, i) => acc + n * Math.pow(2, binary.length - i - 1), 0)

const calculate = (num1, num2) => toDecimal(num1) + toDecimal(num2)
