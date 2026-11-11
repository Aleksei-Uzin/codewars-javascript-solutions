/**
 * Simple Fun \#319: Number And IP Address
 * https://www.codewars.com/kata/5936371109ca68fe6900000c/train/javascript
 *
 */

const numberAndIPaddress = s => {
  if (s.includes('.')) {
    const bin = s.split('.').reduce((acc, n) => acc + parseInt(n).toString(2).padStart(8, '0'), '')
    return parseInt(bin, 2).toString()
  }

  const n = Number(s)
  return [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.')
}
