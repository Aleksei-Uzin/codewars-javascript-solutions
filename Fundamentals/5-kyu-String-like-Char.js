/**
 * String like [Char]
 * https://www.codewars.com/kata/53dab6cece5f44b8ee00035d/train/javascript
 *
 */

Object.defineProperties(String.prototype, {
  map: {
    value: function (callback) {
      let res = ''

      for (let i = 0; i < this.length; i++) {
        res += callback(this[i], i, this)
      }

      return res
    },
    enumerable: false,
  },
  join: {
    value: function (separator) {
      let res = ''

      for (let i = 0; i < this.length; i++) {
        res += this[i] + (i < this.length - 1 ? separator : '')
      }

      return res
    },
    enumerable: false,
  },
  filter: {
    value: function (callback) {
      let res = ''

      for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
          res += this[i]
        }
      }

      return res
    },
    enumerable: false,
  },
  forEach: {
    value: function (callback) {
      let res = ''

      for (let i = 0; i < this.length; i++) {
        res += callback(this[i], i, this)
      }

      return res
    },
    enumerable: false,
  },
  some: {
    value: function (callback) {
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
          return true
        }
      }

      return false
    },
    enumerable: false,
  },
  every: {
    value: function (callback) {
      for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
          return false
        }
      }

      return true
    },
    enumerable: false,
  },
  reduce: {
    value: function (callback, initialValue) {
      let res = initialValue

      for (let i = 0; i < this.length; i++) {
        res = callback(res, this[i], i, this)
      }

      return res
    },
    enumerable: false,
  },
  reduceRight: {
    value: function (callback, initialValue) {
      let res = initialValue

      for (let i = this.length - 1; i >= 0; i--) {
        res = callback(res, this[i], i, this)
      }

      return res
    },
    enumerable: false,
  },
  sort: {
    value: function (compareFn) {
      const res = [...this].sort(compareFn)

      return res.join('')
    },
    enumerable: false,
  },
  reverse: {
    value: function () {
      let res = ''

      for (let i = this.length - 1; i >= 0; i--) {
        res += this[i]
      }

      return res
    },
    enumerable: false,
  },
  push: {
    value: function (...items) {
      let res = this

      for (let i = 0; i < items.length; i++) {
        res += items[i]
      }

      return res
    },
    enumerable: false,
  },
  pop: {
    value: function () {
      let res = ''

      for (let i = 0; i < this.length - 1; i++) {
        res += this[i]
      }

      return res
    },
    enumerable: false,
  },
  shift: {
    value: function () {
      let res = ''

      for (let i = 1; i < this.length; i++) {
        res += this[i]
      }

      return res
    },
    enumerable: false,
  },
  unshift: {
    value: function (...items) {
      return `${items.join('')}${this}`
    },
    enumerable: false,
  },
  splice: {
    value: function (start, deleteCount, ...items) {
      const partA = this.slice(0, start)
      const partB = this.slice(start + deleteCount)
      const insertedItems = items.join('')

      return `${partA}${insertedItems}${partB}`
    },
    enumerable: false,
  },
})
