/**
 * Grouped by commas
 * https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
 *
 */

const groupByCommas = n => {
  const str = n.toString()
  let res = []

  for (let i = str.length; i > 0; i -= 3) {
    res.unshift(str.slice(Math.max(0, i - 3), i))
  }

  return res.join(',')
}
