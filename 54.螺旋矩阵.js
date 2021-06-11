/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (!matrix.length) {
    return []
  }

  const result = []

  let left = 0
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1

  while (top <= bottom && left <= right) {
    // top
    for (let n = left; n <= right; n++) {
      result.push(matrix[top][n])
    }
    top++

    // right
    for (let n = top; n <= bottom; n++) {
      result.push(matrix[n][right])
    }
    right--

    // bottom
    for (let n = right; n >= left && top <= bottom; n--) {
      result.push(matrix[bottom][n])
    }
    bottom--

    // left
    for (let n = bottom; n >= top && left <= right; n--) {
      result.push(matrix[n][left])
    }
    left++
  }
  return result
}
// @lc code=end
