/**
 * The dropWhile Function
 * https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript
 *
 */

const dropWhile = (array, predicate) => {
  const ind = array.findIndex(item => !predicate(item))

  return ind === -1 ? [] : array.slice(ind)
}
