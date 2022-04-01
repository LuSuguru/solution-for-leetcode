/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
function longestIncreasingPath(matrix) {
  const m = matrix.length
  const n = matrix[0].length

  if (m === 0) {
    return 0
  }

  let result = 0

  const memo = new Array(m).fill(0).map(() => new Array(n).fill(0))

  const dfs = (i, j, prev = -1, length = 0) => {
    if (i < 0 || i === m || j < 0 || j === n || matrix[i][j] === '.') {
      return length
    }

    if (matrix[i][j] <= prev) {
      return length
    }

    if (memo[i][j]) {
      return length + memo[i][j]
    }

    const value = matrix[i][j]

    matrix[i][j] = '.'

    const max = Math.max(
      dfs(i - 1, j, value, length + 1),
      dfs(i + 1, j, value, length + 1),
      dfs(i, j - 1, value, length + 1),
      dfs(i, j + 1, value, length + 1)
    )

    memo[i][j] = max - length
    matrix[i][j] = value
    return max
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(dfs(i, j), result)
    }
  }

  return result
}
// @lc code=end
