/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
  const { length } = nums
  if (length === 1) return 1

  const dp = new Array(length).fill(1)
  const count = new Array(length).fill(1)

  let maxLength = 1

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          count[i] = count[j]
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j]
        }
      }
    }
    maxLength = Math.max(maxLength, dp[i])
  }

  let result = 0
  for (let i = 0; i < length; i++) {
    if (dp[i] === maxLength) {
      result += count[i]
    }
  }

  return result
}
// @lc code=end
