/**
 * Format data value
 * https://www.codewars.com/kata/5a329fc9b6cfd7e8320000c9/train/javascript
 *
 */

const formatDataValue = data => {
  if (data === 0) return '0MB'

  const res = []

  while (data > 0) {
    if (data < 1e3) {
      res.push(`${data}MB`)
      data = 0
    } else if (data < 1e6) {
      const n = ~~(data / 1e3)
      res.push(`${n}GB`)
      data -= n * 1e3
    } else {
      const n = ~~(data / 1e6)
      res.push(`${n}TB`)
      data -= n * 1e6
    }
  }

  return res.join(' ')
}
