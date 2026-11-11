/**
 * Greed is Good
 * https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
 *
 */

const score = dice => {
  const calc = dice.reduce((acc, d) => {
    acc[d] = (acc[d] || 0) + 1
    return acc
  }, {})

  const res = Object.entries(calc).reduce((acc, [val, n]) => {
    val = Number(val)

    if (n >= 3) {
      acc += val === 1 ? 1000 : val * 100
      n -= 3
    }

    if (n > 0) {
      acc += val === 1 ? n * 100 : val === 5 ? n * 50 : 0
    }

    return acc
  }, 0)

  return res
}
