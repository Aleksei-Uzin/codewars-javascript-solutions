/**
 * Advanced Events
 * https://www.codewars.com/kata/52d4678038644497e900007c/train/javascript
 *
 */

function Event() {
  let observers = []

  this.subscribe = function (...fns) {
    for (const fn of fns) {
      if (typeof fn === 'function') {
        observers.push(fn)
      }
    }
  }

  this.unsubscribe = function (...fns) {
    for (const fn of fns) {
      const ind = observers.lastIndexOf(fn)

      if (ind !== -1) {
        observers.splice(ind, 1)
      }
    }
  }

  this.emit = function (...args) {
    const copy = observers.slice()

    for (let fn of copy) {
      fn.apply(this, args)
    }
  }
}
