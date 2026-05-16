/**
 * Ski Jump
 * https://www.codewars.com/kata/57ed7214f670e99f7a000c73/train/javascript
 *
 */

const skiJump = mountain => {
  const height = mountain.length
  const speed = height * 1.5
  const jumpLength = ((height * speed * 9) / 10).toFixed(2)

  if (jumpLength < 10) return `${jumpLength} metres: He's crap!`
  else if (jumpLength < 25) return `${jumpLength} metres: He's ok!`
  else if (jumpLength < 50) return `${jumpLength} metres: He's flying!`
  else return `${jumpLength} metres: Gold!!`
}
