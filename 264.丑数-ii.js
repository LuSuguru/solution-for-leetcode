/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
  const dp = []
  let n2 = 1
  let n3 = 1
  let n5 = 1

  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    const min = Math.min(dp[n2] * 2, dp[n3] * 3, dp[n5] * 5)
    dp[i] = min

    dp[n2] * 2 === min && n2++
    dp[n3] * 3 === min && n3++
    dp[n5] * 5 === min && n5++
  }

  return dp[n]
}
// @lc code=end
