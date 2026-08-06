/**
 * Singleton Pattern
 * https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript
 *
 */

let instance

class Singleton {
  constructor() {
    if (!instance) {
      instance = this
    }

    return instance
  }
}
