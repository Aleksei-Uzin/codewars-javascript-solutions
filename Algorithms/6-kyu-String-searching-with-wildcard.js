/**
 * String searching with wildcard
 * https://www.codewars.com/kata/546c7f89bed2e12fb300056f/train/javascript
 *
 */

function find(needle, haystack) {
  let i = 0

  while (i <= haystack.length - needle.length) {
    let j = 0

    while (j < needle.length && (needle[j] === '_' || needle[j] === haystack[i + j])) {
      j++
    }

    if (j === needle.length) {
      return i
    }

    i += 1
  }

  return -1
}
