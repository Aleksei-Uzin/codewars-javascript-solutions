/**
 * Sums of Parts
 * https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
 *
 */

const partsSums = ls => {
  const res = Array.from({ length: ls.length + 1 }, () => 0)
  let total = ls.reduce((acc, n) => acc + n, 0)

  for (let i = 0; i < ls.length; i++) {
    res[i] = total
    total -= ls[i]
  }

  return res
}
