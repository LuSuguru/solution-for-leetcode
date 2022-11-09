/*
 * @lc app=leetcode.cn id=446 lang=javascript
 *
 * [446] 等差数列划分 II - 子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function numberOfArithmeticSlices(nums) {
  const { length } = nums

  const dp = new Array(length)

  for (let i = 0; i < length; i++) {
    dp[i] = new Map()
  }

  let result = 0
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j]
      const count = dp[j].get(diff) || 0

      result += count
      dp[i].set(diff, (dp[i].get(diff) || 0) + count + 1)
    }
  }

  return result
}
// @lc code=end
