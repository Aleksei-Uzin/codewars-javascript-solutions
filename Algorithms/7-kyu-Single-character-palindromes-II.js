/**
 * Single character palindromes II
 * https://www.codewars.com/kata/5a66ea69e6be38219f000110/train/javascript
 *
 */

const solve = str => {
  const len = str.length
  let n = 0

  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) n += 1
    if (n > 1) return false
  }

  if (n === 1) return true
  return n === 0 && str.length % 2 === 1
}
