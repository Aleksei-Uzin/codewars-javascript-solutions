/**
 * Ultimate Array Reverser
 * https://www.codewars.com/kata/5c3433a4d828182e420f4197/train/javascript
 *
 */

const ultimateReverse = s => {
  const reversed = [...s.join('')].reverse().join('')
  const res = []
  let i = 0

  for (let str of s) {
    const n = str.length
    const slice = reversed.slice(i, n + i)
    res.push(slice)
    i += n
  }

  return res
}
