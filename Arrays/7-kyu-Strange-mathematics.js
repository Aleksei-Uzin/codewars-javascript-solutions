/**
 * Strange mathematics
 * https://www.codewars.com/kata/604517d65b464d000d51381f/train/javascript
 *
 */

const strangeMath = (n, k) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1)
  const sorted = arr.sort()

  return sorted.indexOf(k) + 1
}
