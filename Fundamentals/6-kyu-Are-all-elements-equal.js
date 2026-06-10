/**
 * Are all elements equal?
 * https://www.codewars.com/kata/5963caa2cb97be79630000c0/train/javascript
 *
 */

Object.defineProperty(String.prototype, 'eqAll', { value: eqAll })
Object.defineProperty(Array.prototype, 'eqAll', { value: eqAll })

function eqAll() {
  let i = this.length - 2

  while (i >= 0 && this[i] === this[i + 1]) {
    i -= 1
  }

  return i < 0
}
