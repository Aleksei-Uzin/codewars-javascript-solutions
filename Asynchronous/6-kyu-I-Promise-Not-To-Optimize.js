/**
 * I Promise Not To Optimize
 * https://www.codewars.com/kata/58d014421c694f71630000bc/train/javascript
 *
 */

const antiOptimizeAsync = task =>
  new Promise(resolve => {
    const start = Date.now()
    const res = task()
    const diff = Date.now() - start
    setTimeout(() => resolve(res), Math.max(11000 - diff, 0))
  })
