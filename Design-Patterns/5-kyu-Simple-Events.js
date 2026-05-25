/**
 * Simple Events
 * https://www.codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript
 *
 */

function Event() {
  this.observers = []
}

Event.prototype.subscribe = function (fn) {
  if (typeof fn === 'function') {
    this.observers.push(fn)
  }
}

Event.prototype.unsubscribe = function (fn) {
  const ind = this.observers.indexOf(fn)

  if (ind !== -1) {
    this.observers.splice(ind, 1)
  }
}

Event.prototype.emit = function (...args) {
  this.observers.forEach(fn => {
    fn(...args)
  })
}
