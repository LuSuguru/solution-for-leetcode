/*
 * @lc app=leetcode.cn id=1262 lang=javascript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSumDivThree(nums) {
  const dp = new Array(nums.length + 1).fill(0).map(() => new Array(3))
  dp[0][0] = 0
  dp[0][1] = Number.MIN_SAFE_INTEGER
  dp[0][2] = Number.MIN_SAFE_INTEGER

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] % 3 === 0) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][0] + nums[i - 1])
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][1] + nums[i - 1])
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][2] + nums[i - 1])
    }

    if (nums[i - 1] % 3 === 1) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] + nums[i - 1])
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + nums[i - 1])
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + nums[i - 1])
    }

    if (nums[i - 1] % 3 === 2) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + nums[i - 1])
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] + nums[i - 1])
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0] + nums[i - 1])
    }
  }

  return dp[nums.length][0]
}
// @lc code=end
