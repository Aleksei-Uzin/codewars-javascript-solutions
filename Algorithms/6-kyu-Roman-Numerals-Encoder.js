/**
 * Roman Numerals Encoder
 * https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
 *
 */

const symbols = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
]

const solution = num =>
  symbols.reduce((acc, [symb, val]) => {
    while (num >= val) {
      acc += symb
      num -= val
    }

    return acc
  }, '')
