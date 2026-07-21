/**
 * Ch4113ng3
 * https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript
 *
 */

const nerdify = txt => {
  const map = { a: 4, e: 3, l: 1 }

  return txt.replace(/[aAeEl]/g, m => map[m.toLowerCase()])
}
