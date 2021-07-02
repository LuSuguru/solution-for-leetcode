/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (!nums.length) return 0

  let last = 0
  let current = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const mid = current
    current = Math.max(last + nums[i], current)
    last = mid
  }

  return current
}
// @lc code=end
