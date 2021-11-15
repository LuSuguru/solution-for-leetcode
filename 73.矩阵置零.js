/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const m = matrix.length
  const n = matrix[0].length

  if (m == 0) return

  let row0 = false
  let col0 = false
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        if (i == 0) row0 = true
        if (j == 0) col0 = true

        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] == 0 || matrix[i][0] == 0) { matrix[i][j] = 0 }
    }
  }

  if (col0) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0
  }
  if (row0) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0
  }
}

// @lc code=end
