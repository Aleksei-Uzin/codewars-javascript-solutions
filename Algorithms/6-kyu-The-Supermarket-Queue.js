/**
 * The Supermarket Queue
 * https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
 *
 */

const queueTime = (customers, n) => {
  const tills = new Array(n).fill(0)

  for (const customer of customers) {
    const nextTill = tills.indexOf(Math.min(...tills))
    tills[nextTill] += customer
  }

  return Math.max(...tills)
}
