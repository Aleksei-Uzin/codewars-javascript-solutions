/**
 * How Many Lonely Letters?
 * https://www.codewars.com/kata/69cda5b85599f307742ce70a/train/javascript
 *
 */

const countLonelyLetters = text => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  text = text.toLowerCase()
  let res = 0

  for (let c of text) {
    if (/[^a-z]/.test(c)) continue

    const ind = abc.indexOf(c)
    const isUnique = text.indexOf(c) === text.lastIndexOf(c)
    const hasNeighbor = text.includes(abc[ind - 1]) || text.includes(abc[ind + 1])

    if (isUnique && !hasNeighbor) {
      res += 1
    }
  }

  return res
}
