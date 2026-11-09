/**
 * The Span Function
 * https://www.codewars.com/kata/54f2f335cb9d99e8530008d7/train/javascript
 *
 */

const span = (arr, predicate) => {
  const ind = arr.findIndex(v => !predicate(v))

  return ind !== -1 ? [arr.slice(0, ind), arr.slice(ind)] : [arr.slice(), []]
}

/**
 * Best Practice
 */
function span(arr, predicate) {
  var i = 0
  while (i < arr.length && predicate(arr[i])) {
    i++
  }
  return [arr.slice(0, i), arr.slice(i)]
}
