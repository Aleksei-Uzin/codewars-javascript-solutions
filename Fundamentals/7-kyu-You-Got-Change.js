/**
 * You Got Change?
 * https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript
 *
 */

const giveChange = amount =>
  [1, 5, 10, 20, 50, 100].reduceRight((acc, val, i) => {
    const n = Math.floor(amount / val)
    amount %= val
    acc[i] = n

    return acc
  }, [])
