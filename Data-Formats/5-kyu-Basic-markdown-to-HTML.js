/**
 * Basic markdown to HTML
 * https://www.codewars.com/kata/5793cdce39f33a70160000f5/train/javascript
 *
 */

const format = str => {
  const bold = /\*\*(.+?)\*\*/g
  const headers = /(^\#+)(.+)$/
  const li = /^\*\s(.*)$/

  str = str
    .replace(bold, '< strong>$1< /strong>')
    .replace(li, '< li>$1< /li>')
    .replace(headers, (_, h, m) => {
      const n = Math.min(h.length, 6)
      return `< h${n}>${m.trim()}< /h${n}>`
    })

  if (/^([^<]|< strong>)/.test(str)) {
    str = `< p>${str}< /p>`
  }

  return str
}
