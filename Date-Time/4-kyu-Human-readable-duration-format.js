/**
 * Human readable duration format
 * https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
 *
 */

function formatDuration(seconds) {
  if (seconds === 0) return 'now'

  const year = Math.floor(seconds / 31_536_000) // 365 * 86400
  const day = Math.floor((seconds % 31_536_000) / 86400)
  const hh = Math.floor((seconds % 86400) / 3600)
  const mm = Math.floor((seconds % 3600) / 60)
  const ss = Math.floor(seconds % 60)

  const pluralize = val => (val > 1 ? 's' : '')
  const getDelim = c => (c === 1 ? ' and ' : ', ')
  let count = [year, day, hh, mm, ss].filter(v => v > 0).length
  let res = ''

  if (year > 0) {
    res += `${year} year${pluralize(year)}`
    count -= 1
  }

  if (day > 0) {
    res += `${res.length > 0 ? getDelim(count) : ''}${day} day${pluralize(day)}`
    count -= 1
  }

  if (hh > 0) {
    res += `${res.length > 0 ? getDelim(count) : ''}${hh} hour${pluralize(hh)}`
    count -= 1
  }

  if (mm > 0) {
    res += `${res.length > 0 ? getDelim(count) : ''}${mm} minute${pluralize(mm)}`
    count -= 1
  }

  if (ss > 0) {
    res += `${res.length > 0 ? getDelim(count) : ''}${ss} second${pluralize(ss)}`
  }

  return res
}
