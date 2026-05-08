/**
 * String reduction
 * https://www.codewars.com/kata/59fab1f0c9fc0e7cd4000072/train/javascript
 *
 */

const solve = (a, b) => {
  if (a.length < b.length) return 0

  const arr = Array.from({ length: 26 }, () => 0)
  const getCode = ch => ch.charCodeAt() - 97

  for (let i = 0; i < a.length; i++) {
    if (i < b.length) {
      arr[getCode(b[i])] -= 1
    }

    arr[getCode(a[i])] += 1
  }

  const isValid = arr.every(n => n >= 0)
  return isValid ? arr.reduce((acc, n) => acc + n, 0) : 0
}
