/**
 * Coding 3min: Father and Son
 * https://www.codewars.com/kata/56fe9a0c11086cd842000008/train/javascript
 *
 */

const sc = s => {
  const set = new Set(s)
  let res = ''

  for (let c of s) {
    if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) {
      res += c
    }
  }

  return res
}
