/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 我的
function rotate(matrix) {
  let n = matrix.length
  let m = 0

  while (n - 1 > m) {
    for (let i = m; i < n - 1; i++) {
      const tmp = matrix[m][i]
      matrix[m][i] = matrix[n - 1 - (i - m)][m]
      matrix[n - 1 - (i - m)][m] = matrix[n - 1][n - 1 - (i - m)]
      matrix[n - 1][n - 1 - (i - m)] = matrix[i][n - 1]
      matrix[i][n - 1] = tmp
    }

    m++
    n--
  }
}

// 原地旋转
function rotate(matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
}

// 用翻转代替旋转
function rotate(matrix) {
  const n = matrix.length
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
    }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}
// @lc code=end
