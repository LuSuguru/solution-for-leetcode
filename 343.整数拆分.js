/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  // dp[n] 等于 n 时乘积的最大值
  const dp = []
  dp[2] = 1

  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      // j * (i - j) 为两个数相乘
      // dp[j] * (i - j) 为 拆分成 N 个数相乘
      dp[i] = Math.max(dp[i] || 0, dp[j] * (i - j), j * (i - j))
    }
  }

  return dp[n]
}
// @lc code=end
