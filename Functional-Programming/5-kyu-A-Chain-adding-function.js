/**
 * A Chain adding function
 * https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
 *
 */

function add(n) {
  function sum(a = 0) {
    return add(n + a)
  }

  sum.valueOf = () => n

  return sum
}
