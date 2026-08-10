/**
 * Split by Mask
 * https://www.codewars.com/kata/6a68ed7894f29599a1f7a248/train/javascript
 *
 */

const split = (string, mask) => {
  const res = []
  let n = 0

  for (let m of mask) {
    const part = string.slice(n, (n += m))
    res.push(part)
  }

  return n === string.length ? res : null
}
