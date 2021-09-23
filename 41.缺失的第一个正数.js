/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      map.set(nums[i], true)
    }
  }

  let i = 1
  while (map.get(i)) {
    i++
  }

  return i
}

function firstMissingPositive(nums) {
  const { length } = nums
  let i = 0

  for (i = 0; i < length; i++) {
    if (nums[i] < 1) {
      nums[i] = length + 1
    }
  }

  for (i = 0; i < length; i++) {
    if (Math.abs(nums[i]) <= length && nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] *= -1
    }
  }

  for (i = 0; i < length; i++) {
    if (nums[i] >= 0) return i + 1
  }
  return length + 1
}
// @lc code=end
