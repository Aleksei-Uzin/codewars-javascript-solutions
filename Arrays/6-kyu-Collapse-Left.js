/**
 * Collapse Left
 * https://www.codewars.com/kata/65f1c009e44a0f0777c9fa06/train/javascript
 *
 */

const operationArguments = arr => {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'function') {
      const lastInd = Math.max(res.length - 1, 0)
      res[lastInd] = arr[i](res[lastInd] ?? 0)
    } else {
      res.push(arr[i])
    }
  }

  return res
}
