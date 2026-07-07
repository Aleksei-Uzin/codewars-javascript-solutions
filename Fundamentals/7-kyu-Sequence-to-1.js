/**
 * Sequence to 1
 * https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b/train/javascript
 *
 */

const seqToOne = n => {
  const res = []

  while (res[res.length - 1] !== 1) {
    res.push(n <= 0 ? n++ : n--)
  }

  return res
}
