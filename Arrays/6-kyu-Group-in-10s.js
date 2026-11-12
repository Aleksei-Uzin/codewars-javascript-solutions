/**
 * Group in 10s
 * https://www.codewars.com/kata/5694d22eb15d78fe8d00003a/train/javascript
 *
 */

const groupIn10s = (...args) => {
  const res = []

  for (const n of args) {
    const ind = Math.floor(n / 10)

    if (Array.isArray(res[ind])) res[ind].push(n)
    else res[ind] = [n]
  }

  return res.map(arr => arr.sort((a, b) => a - b))
}
