/**
 * Loose Change!
 * https://www.codewars.com/kata/57e1857d333d8e0f76002169/train/javascript
 *
 */

// The CHANGE object is already preloaded
const changeCount = change => {
  const sum = change.split(' ').reduce((acc, val) => acc + CHANGE[val], 0)
  return `$${sum.toFixed(2)}`
}
