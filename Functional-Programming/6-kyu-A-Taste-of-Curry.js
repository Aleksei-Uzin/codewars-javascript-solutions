/**
 * A Taste of Curry
 * https://www.codewars.com/kata/52d629bb5feccfd4c100022d/train/javascript
 *
 */

function curry(fun, ...rest) {
  return function (...args) {
    return fun.call(this, ...rest, ...args)
  }
}
