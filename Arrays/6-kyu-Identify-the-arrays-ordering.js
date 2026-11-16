/**
 * Identify the array's ordering
 * https://www.codewars.com/kata/57f669477c9a2b1b9700022d/train/javascript
 *
 */

const orderType = arr => {
  let [isInc, isDec] = [false, false]

  for (let i = 1; i < arr.length; i++) {
    const a = Array.isArray(arr[i - 1]) ? arr[i - 1].length : String(arr[i - 1]).length
    const b = Array.isArray(arr[i]) ? arr[i].length : String(arr[i]).length

    if (a < b && !isDec) isInc = true
    else if (a < b && isDec) return 'Unsorted'

    if (a > b && !isInc) isDec = true
    else if (a > b && isInc) return 'Unsorted'
  }

  return isInc ? 'Increasing' : isDec ? 'Decreasing' : 'Constant'
}
