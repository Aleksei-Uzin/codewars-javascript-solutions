/**
 * The takeWhile Function
 * https://www.codewars.com/kata/54f9173aa58bce9031001548/train/javascript
 *
 */

const takeWhile = (arr, pred) => {
  const ind = arr.findIndex(v => !pred(v))

  return ind !== -1 ? arr.slice(0, ind) : arr.slice()
}
