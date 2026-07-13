/**
 * Reversed Message
 * https://www.codewars.com/kata/5a0efbb7c374cb69970000cf/train/javascript
 *
 */

const reverseMessage = str =>
  [...str.toLowerCase()]
    .reverse()
    .join('')
    .replace(/(^|\s)[a-z]/g, m => m.toUpperCase())
