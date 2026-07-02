/**
 * Coding 3min : A*B=C
 * https://www.codewars.com/kata/5714803d2817ffce17000a35/train/javascript
 *
 */

const findAB = (numbers, c) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const isEqual = numbers[i] * numbers[j] === c

      if (isEqual) return [numbers[i], numbers[j]]
    }
  }

  return null
}
