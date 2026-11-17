/**
 * PromiseLike I: State and Basic Then
 * https://www.codewars.com/kata/6a2c4aa28dfc3df3a3dc58ec/train/javascript
 *
 */

class MyPromise {
  #promiseState = 'pending'
  #promiseResult

  #onFulfilledCallbacks = []
  #onRejectedCallbacks = []

  constructor(executor) {
    const resolve = value => {
      if (this.#promiseState === 'pending') {
        this.#promiseState = 'fulfilled'
        this.#promiseResult = value

        this.#onFulfilledCallbacks.forEach(callback => {
          callback(value)
        })
      }
    }

    const reject = reason => {
      if (this.#promiseState === 'pending') {
        this.#promiseState = 'rejected'
        this.#promiseResult = reason

        this.#onRejectedCallbacks.forEach(callback => {
          callback(reason)
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.#promiseState === 'pending') {
      if (typeof onFulfilled === 'function') {
        this.#onFulfilledCallbacks.push(onFulfilled)
      }

      if (typeof onRejected === 'function') {
        this.#onRejectedCallbacks.push(onFulfilled)
      }
    }

    if (this.#promiseState === 'fulfilled') {
      onFulfilled(this.#promiseResult)
    }

    if (this.#promiseState === 'rejected') {
      onRejected(this.#promiseResult)
    }
  }
}
