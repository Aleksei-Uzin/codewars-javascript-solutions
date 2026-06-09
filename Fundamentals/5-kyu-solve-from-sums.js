/**
 * solve from sums
 * https://www.codewars.com/kata/571936be938fcde87f001dbc/train/javascript
 *
 */

const solver = function (sums) {
  const reg = /([a-z\d]+)\+([a-z\d]+)=(\d+)/i
  const res = {}

  while (sums.length > 0) {
    for (let i = 0; i < sums.length; i++) {
      const [_, n1, n2, sumStr] = sums[i].match(reg)
      const sum = parseFloat(sumStr)

      if (n1 === n2) {
        res[n1] = sum / 2
        sums.splice(i, 1)
      } else if (res[n1] && res[n2] == null) {
        res[n2] = sum - res[n1]
        sums.splice(i, 1)
      } else if (res[n2] && res[n1] == null) {
        res[n1] = sum - res[n2]
        sums.splice(i, 1)
      }
    }
  }

  return res
}
