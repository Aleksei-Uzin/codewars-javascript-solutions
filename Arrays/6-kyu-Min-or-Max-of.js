/**
 * Min or Max of . . .
 * https://www.codewars.com/kata/59ac6cbc589d2a4301000041/train/javascript
 *
 */

function findExtremum(it, fn) {
  let res

  for (let v of it) {
    if (res === undefined || fn(v, res)) res = v
  }

  return res
}

const max = it => findExtremum(it, (a, b) => a > b)
const min = it => findExtremum(it, (a, b) => a < b)
