/**
 * Kaprekar Split
 * https://www.codewars.com/kata/5b6ee22ac5cc71833f0010d7/train/javascript
 *
 */

const kaprekarSplit = n => {
  if (n === 1) return 0

  const strVal = (n ** 2).toString()

  for (let i = 1; i < strVal.length; i++) {
    const n1 = parseInt(strVal.slice(0, i))
    const n2 = parseInt(strVal.slice(i))

    if (n1 + n2 === n) return i
  }

  return -1
}
