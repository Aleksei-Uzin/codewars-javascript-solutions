/**
 * Vector class
 * https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript
 *
 */

class Vector {
  #checkDimentions(vector) {
    if (this.components.length !== vector.components.length) {
      throw new Error('Vectors have different dimensions')
    }
  }

  constructor(components) {
    this.components = components
  }

  toString() {
    return `(${this.components.join()})`
  }

  norm() {
    const res = this.components.reduce((acc, n) => acc + n * n, 0)
    return Math.sqrt(res)
  }

  equals(vector) {
    return this.toString() === vector.toString()
  }

  add(vector) {
    this.#checkDimentions(vector)
    const res = []

    this.components.forEach((n, i) => {
      res[i] = n + vector.components[i]
    })

    return new Vector(res)
  }

  subtract(vector) {
    this.#checkDimentions(vector)
    const res = []

    this.components.forEach((n, i) => {
      res[i] = n - vector.components[i]
    })

    return new Vector(res)
  }

  dot(vector) {
    this.#checkDimentions(vector)
    const res = this.components.reduce((acc, n, i) => acc + n * vector.components[i], 0)
    return res
  }
}
