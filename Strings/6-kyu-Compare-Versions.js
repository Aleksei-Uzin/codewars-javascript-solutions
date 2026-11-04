/**
 * Compare Versions
 * https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript
 *
 */

const compareVersions = (version1, version2) => {
  const versionsA = version1.split('.').map(Number)
  const versionsB = version2.split('.').map(Number)
  const len = Math.max(versionsA.length, versionsB.length)

  for (let i = 0; i < len; i++) {
    const partA = versionsA[i] ?? 0
    const partB = versionsB[i] ?? 0

    if (partA !== partB) {
      return partA >= partB
    }
  }

  return true
}
