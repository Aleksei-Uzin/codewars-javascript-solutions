/**
 * Find the stray number
 * https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
 *
 */

const stray = nums => {
  if (nums[0] === nums[1]) {
    for (let n of nums) {
      if (n !== nums[0]) return n
    }
  } else {
    return nums[0] === nums[2] ? nums[1] : nums[0]
  }
}
