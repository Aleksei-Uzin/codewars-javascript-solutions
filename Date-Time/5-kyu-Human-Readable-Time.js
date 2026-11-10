/**
 * Human Readable Time
 * https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 *
 */

const humanReadable = seconds => {
  const hh = Math.floor(seconds / 3600)
  const mm = Math.floor((seconds / 60) % 60)
  const ss = Math.floor(seconds % 60)

  const res = [hh, mm, ss].map(v => String(v).padStart(2, '0'))

  return res.join(':')
}
