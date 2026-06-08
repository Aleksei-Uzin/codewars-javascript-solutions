/**
 * Adjacent repeated words in a string
 * https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript
 *
 */

const countAdjacentPairs = s => (s.match(/\b([a-z]+)\b(?:\s+\1\b)+/gi) || []).length
