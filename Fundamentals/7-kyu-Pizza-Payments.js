/**
 * Pizza Payments
 * https://www.codewars.com/kata/5b043e3886d0752685000009/train/javascript
 *
 */

const michaelPays = costs => {
  if (costs < 5) return Number(costs.toFixed(2))

  const res = Math.min(costs / 3, 10)
  return Number((costs - res).toFixed(2))
}
