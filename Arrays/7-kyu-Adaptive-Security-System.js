/**
 * Adaptive Security System
 * https://www.codewars.com/kata/69b58aaee8f1deef7ece7d0e/train/javascript
 *
 */

const breachAttempts = (hackers, securityLevel, increase) => {
  let res = 0

  for (let h of hackers) {
    if (securityLevel < h) res += 1
    else securityLevel += increase
  }

  return res
}
