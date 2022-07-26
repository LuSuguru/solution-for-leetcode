/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
  if (matrix.length === 0) {
    return 0
  }

  const heights = new Array(matrix[0].length + 1).fill(0)
  let result = 0

  for (let row = 0; row < matrix.length; row++) {
    const stack = []
    heights[matrix[0].length] = 0

    for (let col = 0; col <= matrix[0].length; col++) {
      if (col < matrix[0].length) {
        if (matrix[row][col] === '1') {
          heights[col]++
        } else {
          heights[col] = 0
        }
      }

      while (stack.length !== 0 && heights[stack[stack.length - 1]] > heights[col]) {
        const h = heights[stack.pop()]
        const rightMin = col
        const leftMin = stack.length === 0 ? -1 : stack[stack.length - 1]

        result = Math.max((rightMin - leftMin - 1) * h, result)
      }
      stack.push(col)
    }
  }

  return result
}
// @lc code=end
