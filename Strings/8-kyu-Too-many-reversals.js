/**
 * Too many reversals
 * https://www.codewars.com/kata/687de0b45ab74765f516ce3f/train/javascript
 *
 */

const whowon = s => (s.match(/[A-Z]\w+/g) || []).at(-2)
