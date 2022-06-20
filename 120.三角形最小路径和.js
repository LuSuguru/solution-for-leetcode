/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  const dp = new Array(triangle.length)
  dp[0] = triangle[0][0]

  for (let i = 1; i < triangle.length; i++) {
    dp[i] = dp[i - 1] + triangle[i][i]

    for (let j = i - 1; j > 0; j--) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
    }

    dp[0] += triangle[i][0]
  }

  let result = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < dp.length; i++) {
    result = Math.min(result, dp[i])
  }

  return result
}
// @lc code=end
