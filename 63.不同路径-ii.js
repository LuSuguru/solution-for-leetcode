/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length

  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0
      } else if (i == 0 && j == 0) { // 第一个
        dp[i][j] = 1
      } else if (i == 0) { // 第一行
        dp[i][j] = dp[i][j - 1]
      } else if (j == 0) { // 第一列
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[row - 1][col - 1]
}
// @lc code=end
