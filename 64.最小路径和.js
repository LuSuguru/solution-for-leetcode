/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const m = grid.length
  const n = grid[0].length

  const dp = new Array(n)

  dp[0] = grid[0][0]

  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + grid[0][i]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[j] += grid[i][j]
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
      }
    }
  }

  return dp[n - 1]
}
// @lc code=end
