/**
 * sliceBits(int, from, count)
 * https://www.codewars.com/kata/5389e2b687c26dcc530008e5/train/javascript
 *
 */

const sliceBits = (int, from, count) => {
  const binary = ((int | 0) >>> 0).toString(2).padStart(32, '0')

  from |= 0
  from = from < 0 ? Math.max(binary.length + from, 0) : from
  count = count == null ? binary.length - from : count | 0

  const bits = binary.slice(from, from + count)

  return parseInt(bits, 2) | 0
}
