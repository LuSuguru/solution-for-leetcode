/*
 * @lc app=leetcode.cn id=879 lang=javascript
 *
 * [879] 盈利计划
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
function profitableSchemes(n, minProfit, group, profit) {
  // dp[j][k]
  // j: 最多使用 j 个人
  // k: 产生利润大于等于 K
  const dp = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0))

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1
  }
  const len = group.length
  const MOD = 1e9 + 7

  for (let i = 1; i <= len; i++) {
    const members = group[i - 1]
    const earn = profit[i - 1]

    // 用倒序，可以使用前一次的状态
    for (let j = n; j >= members; j--) {
      for (let k = minProfit; k >= 0; k--) {
        dp[j][k] = (dp[j][k] + dp[j - members][Math.max(0, k - earn)]) % MOD
      }
    }
  }
  return dp[n][minProfit]
}
// @lc code=end
