/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  if (!(Array.isArray(matrix) && matrix.length && matrix[0].length)) {
    return false
  }

  const m = matrix.length
  const n = matrix[0].length

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let maxSide = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1
      } else {
        dp[i + 1][j + 1] = 0
      }

      maxSide = Math.max(maxSide, dp[i + 1][j + 1])
    }
  }

  return maxSide ** 2
}
// @lc code=end
