/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isStraight(nums) {
  nums.sort((a, b) => a - b)

  let zeroNum = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      zeroNum++
    } else {
      const distance = nums[i + 1] - nums[i] - 1
      if (distance <= zeroNum && distance >= 0) {
        zeroNum -= distance
      } else {
        return false
      }
    }
  }

  return true
}
