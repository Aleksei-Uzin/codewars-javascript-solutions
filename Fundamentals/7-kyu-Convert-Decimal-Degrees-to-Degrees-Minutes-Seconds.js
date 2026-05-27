/**
 * Convert Decimal Degrees to Degrees, Minutes, Seconds
 * https://www.codewars.com/kata/590ac6b9be4dff49b0000042/train/javascript
 *
 */

function convert(degrees) {
  let deg = Math.floor(degrees)
  const minDec = (degrees - deg) * 60
  let min = Math.floor(minDec)
  let sec = Math.round((minDec - min) * 60)

  if (sec === 60) {
    sec = 0
    min += 1
  }

  if (min === 60) {
    min = 0
    deg += 1
  }

  const res = [deg, min, sec]

  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop()
  }

  return res
}
