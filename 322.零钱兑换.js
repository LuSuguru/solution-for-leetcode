/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(10 ** 4)
  dp[0] = 0

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (coins[i] <= j) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
  }
  return dp[amount] === 10 ** 4 ? -1 : dp[amount]
}
// @lc code=end
