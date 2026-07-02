/**
 * Shortest code: Father and Son
 * https://www.codewars.com/kata/56f928b19982cc7a14000c9d/train/javascript
 *
 */

const sc = s => {
  const set = new Set(s)
  return s.replace(/./g, m => (set.has(m.toUpperCase()) && set.has(m.toLowerCase()) ? m : ''))
}
