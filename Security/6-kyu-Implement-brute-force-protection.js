/**
 * Implement brute force protection
 * https://www.codewars.com/kata/586a514cc66d18807f0000a6/train/javascript
 *
 */

const failedAttempts = new Map()

function bruteForceDetected(loginRequest) {
  const { sourceIP, successful } = loginRequest

  if (successful) {
    failedAttempts.delete(sourceIP)
    return false
  }

  const currentFails = failedAttempts.get(sourceIP) || 0
  const newFails = currentFails + 1
  failedAttempts.set(sourceIP, newFails)

  return newFails >= 20
}
