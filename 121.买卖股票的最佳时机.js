/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let min = prices[0]
  let result = 0

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    result = Math.max(prices[i] - min, result)
  }

  return result
}
// @lc code=end
