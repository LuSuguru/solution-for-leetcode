/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

function maxCoins(nums) {
  const { length } = nums

  // 表示区间 （i，j）下的金币最大值
  // 取区间内某个最后戳破的气球位置为 k，金币 为 vals[i] * vals[k] * vals[j]
  // k 左边气球都先被戳爆了，在 dp[i][k] 中，k 右边气球也都被戳爆了，在 dp[k][j] 中
  // 所以 最后戳破气球为 k 时的金币数是 dp[i][k] + vals[i] * vals[k] * vals[j] + dp[k][j]
  const dp = new Array(length + 2).fill(0).map(() => new Array(length + 2).fill(0))

  const vals = new Array(length + 2)
  vals[0] = 1
  vals[length + 1] = 1

  for (let i = 0; i < length; i++) {
    vals[i + 1] = nums[i]
  }

  for (let i = length - 1; i >= 0; i--) {
    for (let j = i + 2; j <= length + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        const sum = dp[i][k] + vals[i] * vals[k] * vals[j] + dp[k][j]

        dp[i][j] = Math.max(sum, dp[i][j])
      }
    }
  }

  return dp[0][length + 1]
}
// @lc code=end
