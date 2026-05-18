/**
 * Array to HTML table
 * https://www.codewars.com/kata/5e7e4b7cd889f7001728fd4a/train/javascript
 *
 */

function toTable(data, headers = false, index = false) {
  const makeHeadRow = val => `${val.reduce((acc, v) => acc + `<th>${v}</th>`, '')}`
  const makeBodyRow = val =>
    `${val.reduce((acc, v) => acc + `<td>${v === null ? '' : v}</td>`, '')}`

  let [thead, tbody] = ['', '']

  for (let i = 0, n = 1; i < data.length; i++) {
    if (headers && i === 0) thead = `<tr>${index ? `<th></th>` : ''}${makeHeadRow(data[i])}</tr>`
    else tbody += `<tr>${index ? `<td>${n++}</td>` : ''}${makeBodyRow(data[i])}</tr>`
  }

  return `<table>${thead && `<thead>${thead}</thead>`}<tbody>${tbody}</tbody></table>`
}
