/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER

  // 找右边界
  let right = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    if (max > nums[i]) {
      right = i
    }
  }

  // 找左边界
  let left = nums.length - 1
  for (let j = nums.length - 1; j >= 0; j--) {
    min = Math.min(min, nums[j])
    if (nums[j] > min) {
      left = j
    }
  }

  if (left >= right) return 0
  return right - left + 1
}
// @lc code=end
