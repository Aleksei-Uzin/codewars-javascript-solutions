/**
 * 7-segment converter
 * https://www.codewars.com/kata/52a7099f8a4d9604bb000472/train/javascript
 *
 */

function sevenSegmentNumber(number) {
  const values = [125, 80, 55, 87, 90, 79, 111, 81, 127, 95]

  return values[number]
}
