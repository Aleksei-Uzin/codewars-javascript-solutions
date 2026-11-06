/**
 * Walk the Object Path
 * https://www.codewars.com/kata/59418db3f5c394eca80000ef/train/javascript
 *
 */

const find = (object, path) => {
  const arr = path.split('.').map(v => (Number.isNaN(Number(v)) ? v : Number(v)))

  for (const p of arr) {
    if (Object.hasOwn(object, p)) object = object[p]
    else return
  }

  return object
}
