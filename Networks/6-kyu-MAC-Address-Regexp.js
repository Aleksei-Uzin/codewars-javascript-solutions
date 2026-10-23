/**
 * MAC Address : Regexp
 * https://www.codewars.com/kata/58ef89d42a9818c78200020a/train/javascript
 *
 */

const pattern =
  '^(?:' +
  '([0-9a-f]{2}-){7}[0-9a-f]{2}' +
  '|([0-9a-f]{2}-){5}[0-9a-f]{2}' +
  '|([0-9a-f]{2}:){5}[0-9a-f]{2}' +
  '|([0-9a-f]{4}\\.){2}[0-9a-f]{4}' +
  ')$'

const flags = 'i'
