/**
 * Using closures to share class state
 * https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript
 *
 */

var Cat = (() => {
  let totalWeight = 0
  let numberOfCats = 0

  class Cat {
    #currentWeight

    constructor(name, weight) {
      if (typeof name === 'undefined' || typeof weight === 'undefined') {
        throw new Error('name and weight are required')
      }

      this.name = name
      this.#currentWeight = weight

      totalWeight += weight
      numberOfCats++

      Object.defineProperty(this, 'weight', {
        get() {
          return this.#currentWeight
        },

        set(newWeight) {
          totalWeight += newWeight - this.#currentWeight
          this.#currentWeight = newWeight
        },
      })
    }

    static averageWeight() {
      return totalWeight / numberOfCats
    }
  }

  return Cat
})()
