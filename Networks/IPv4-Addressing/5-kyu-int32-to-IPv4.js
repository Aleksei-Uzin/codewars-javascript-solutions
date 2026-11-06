/**
 * int32 to IPv4
 * https://www.codewars.com/kata/52e88b39ffb6ac53a400022e/train/javascript
 *
 */

const int32ToIp = int32 =>
  int32
    .toString(2)
    .padStart(32, '0')
    .match(/[01]{8}/g)
    .map(b => parseInt(b, 2))
    .join('.')
