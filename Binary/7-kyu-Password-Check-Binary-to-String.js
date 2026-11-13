/**
 * Password Check - Binary to String
 * https://www.codewars.com/kata/5a731b36e19d14400f000c19/train/javascript
 *
 */

const decodePass = (passArr, bin) => {
  const pass = bin.split(' ').reduce((acc, b) => acc + String.fromCharCode(parseInt(b, 2)), '')

  return passArr.find(p => p === pass) || false
}
