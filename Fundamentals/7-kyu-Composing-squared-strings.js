/**
 * Composing squared strings
 * https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript
 *
 */

const compose = (s1, s2) => {
  const arr1 = s1.split('\n')
  const arr2 = s2.split('\n')
  const len = arr1.length
  const res = []

  for (let i = 0; i < len; i++) {
    const part1 = arr1[i].slice(0, i + 1)
    const part2 = arr2[len - 1 - i].slice(0, len - i)
    res.push(part1 + part2)
  }

  return res.join('\n')
}
