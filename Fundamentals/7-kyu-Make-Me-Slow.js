/**
 * Make Me Slow
 * https://www.codewars.com/kata/57f59da8d3978bb31f000152/train/javascript
 *
 */

const makeMeSlow = () => {
  const now = Date.now()

  while (Date.now() - now < 7000);
}
