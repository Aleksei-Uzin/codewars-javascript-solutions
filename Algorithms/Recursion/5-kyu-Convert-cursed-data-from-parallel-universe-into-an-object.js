/**
 * Convert cursed data from parallel universe into an object
 * https://www.codewars.com/kata/6524c2aa3256e887321d634e/train/javascript
 *
 */

function solve(cursed) {
  if (/^\([\w\s]+\)$/.test(cursed)) {
    const { groups } = /(?<key>\w+)\s(?<value>[\w\s]+)/.exec(cursed)
    const n = Number(groups.value)
    return { [groups.key]: Number.isNaN(n) ? groups.value : n }
  }

  const { groups } = /^\((?<key>\w+)\s(?<value>[\(\w\s\)]+)\)$/.exec(cursed)
  const nodes = splitNodes(groups.value)

  return { [groups.key]: nodes.reduce((acc, str) => Object.assign(acc, solve(str)), {}) }
}

function splitNodes(input) {
  const nodes = []
  let depth = 0
  let start = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      if (depth === 0) {
        start = i
      }

      depth++
    } else if (input[i] === ')') {
      depth--

      if (depth === 0) {
        nodes.push(input.slice(start, i + 1))
      }
    }
  }

  return nodes
}
