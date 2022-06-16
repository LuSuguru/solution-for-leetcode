/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(k, prices) {
  if (k == 0) {
    return 0
  }
  const dp = new Array(k * 2).fill(0)
  for (let i = 0; i < 2 * k; i += 2) {
    dp[i] = prices[0]
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < 2 * k; j++) {
      if (j === 0) {
        dp[0] = Math.min(dp[0], prices[i])
      } else if (j % 2 === 1) {
        dp[j] = Math.max(dp[j], prices[i] - dp[j - 1])
      } else {
        dp[j] = Math.min(dp[j], prices[i] - dp[j - 1])
      }
    }
  }

  return dp[2 * k - 1]
}
// @lc code=end
