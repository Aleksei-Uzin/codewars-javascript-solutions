/**
 * IPv4 to int32
 * https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript
 *
 */

const ipToInt32 = ip => {
  const octets = ip.split('.').map(o => Number(o).toString(2).padStart(8, '0'))

  return parseInt(octets.join(''), 2)
}
