/**
 * Element equals its index
 * https://www.codewars.com/kata/5b7176768adeae9bc9000056/train/javascript
 *
 */

function indexEqualsValue(a) {
  let left = 0
  let right = a.length - 1
  let res = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (a[mid] === mid) {
      right = mid - 1
      res = mid
    } else if (a[mid] < mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return res
}
