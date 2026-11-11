/**
 * Roman Numerals Decoder
 * https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
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

const solution = roman => {
  let res = 0

  for (let i = 0; i < roman.length; i++) {
    const curr = symbols.find(([symb]) => symb === roman[i])
    const next = symbols.find(([symb]) => symb === roman[i + 1])

    res += next && curr[1] < next[1] ? -curr[1] : curr[1]
  }

  return res
}
