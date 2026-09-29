/**
 * Function Coercion Errors
 * https://www.codewars.com/kata/553020d96b2a8d98ff0001a5/train/javascript
 *
 */

Function.prototype[Symbol.toPrimitive] = function () {
  throw new Error('Function coercion is not allowed')
}
