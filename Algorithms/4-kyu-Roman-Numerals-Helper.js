/**
 * Roman Numerals Helper
 * https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript
 *
 */

class RomanNumerals {
  static #symbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  static toRoman(num) {
    let res = ''

    for (const [val, symb] of this.#symbols) {
      while (num >= val) {
        res += symb
        num -= val
      }
    }

    return res
  }

  static fromRoman(str) {
    let res = 0

    for (let i = 0; i < str.length; i++) {
      const curr = this.#symbols.find(([, symb]) => symb === str[i])
      const next = this.#symbols.find(([, symb]) => symb === str[i + 1])

      res += next && curr[0] < next[0] ? -curr[0] : curr[0]
    }

    return res
  }
}
