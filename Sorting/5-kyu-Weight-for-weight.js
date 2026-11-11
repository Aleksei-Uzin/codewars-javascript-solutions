/**
 * Weight for weight
 * https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
 *
 */

const orderWeight = str => {
  const getSum = numStr => [...numStr].reduce((acc, s) => acc + Number(s), 0)
  const sorted = str.split(' ').sort((a, b) => {
    const [sumA, sumB] = [getSum(a), getSum(b)]

    return sumA !== sumB ? sumA - sumB : a.localeCompare(b)
  })

  return sorted.join(' ')
}
