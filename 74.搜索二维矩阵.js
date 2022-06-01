/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0
  let right = m - 1
  let row = -1

  while (left < right) {
    const mid = (left + right) >> 1
    if (matrix[mid][0] > target) {
      right = mid - 1
    } else if (matrix[mid][0] === target) {
      return true
    } else if (matrix[mid][n - 1] >= target) {
      row = mid
      break
    } else {
      left = mid + 1
    }
  }

  if (row === -1) {
    row = left
  }

  left = 0
  right = n - 1

  while (left < right) {
    const mid = (left + right) >> 1
    if (matrix[row][mid] > target) {
      right = mid - 1
    } else if (matrix[row][mid] === target) {
      return true
    } else {
      left = mid + 1
    }
  }

  if (matrix[row][left] === target) {
    return true
  }
  return false
}
// @lc code=end
