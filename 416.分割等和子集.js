/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  if (nums.length === 1) return false
  let sum = 0
  let maxNum = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    maxNum = Math.max(maxNum, nums[i])
  }

  if (sum % 2 !== 0) return false
  const target = sum / 2
  if (maxNum > target) return false

  const dp = new Array(target + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[target]
}
// @lc code=end
