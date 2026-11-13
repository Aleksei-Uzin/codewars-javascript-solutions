/**
 * SHEEEEPS
 * https://www.codewars.com/kata/6912508732aab96c59c09c7d/train/javascript
 *
 */

const isValid = str => /^((?=.*s)(?=.*h)(?=.*p)(?=.*e){2})[shep]{5}$/.test(str)

const reloadSheeps = arr => arr.reduce((acc, str) => (isValid(str) && acc.push('sheep'), acc), [])
