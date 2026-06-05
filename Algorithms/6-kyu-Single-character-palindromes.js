/**
 * Single character palindromes
 * https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript
 *
 */

const solve = str => {
  const isPal = s => s === [...s].reverse().join('')

  if (isPal(str)) return 'OK'

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      const strA = str.slice(0, i) + str.slice(i + 1)
      const strB = str.slice(0, j) + str.slice(j + 1)

      return isPal(strA) || isPal(strB) ? 'remove one' : 'not possible'
    }
  }

  return 'not possible'
}
