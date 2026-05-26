/**
 * Power .bind()
 * https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript
 *
 */

Function.prototype.bind = function (ctx) {
  const original = this._originalFn || this

  function bound(...args) {
    return original.apply(ctx, args)
  }

  bound._originalFn = original

  return bound
}
