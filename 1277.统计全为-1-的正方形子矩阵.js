/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
  if (!(Array.isArray(matrix) && matrix.length && matrix[0].length)) {
    return false
  }

  const m = matrix.length
  const n = matrix[0].length

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let result = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1
      } else {
        dp[i + 1][j + 1] = 0
      }

      result += dp[i + 1][j + 1]
    }
  }

  return result
}
// @lc code=end
