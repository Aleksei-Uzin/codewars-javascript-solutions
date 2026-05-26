/**
 * Sum of Pairs
 * https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
 *
 */

// Draft Version
function sumPairs(ints, s) {
  const set = new Set()
  const len = ints.length
  let minInd = len
  let res

  for (let i = 0; i < len; i++) {
    const n = ints[i]
    const diff = s - n

    if (set.has(diff) && i < minInd) {
      res = [diff, n]
      minInd = i
    } else {
      set.add(n)
    }
  }

  return res
}

// Final Result
function sumPairs(ints, s) {
  const set = new Set()

  for (const n of ints) {
    if (set.has(s - n)) return [s - n, n]
    set.add(n)
  }
}
