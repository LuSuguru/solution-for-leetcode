/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder(mat) {
  const m = mat.length
  const n = mat[0].length
  let isTop = true

  let x = 0
  let y = 0

  const result = []

  // eslint-disable-next-line no-constant-condition
  while (true) {
    result.push(mat[x][y])

    if (x === m - 1 && y === n - 1) {
      return result
    }

    if (isTop) {
      if (x === 0 && y < n - 1) {
        y++
        isTop = false
      } else if (y === n - 1 && x < m - 1) {
        x++
        isTop = false
      } else {
        x--
        y++
      }
    } else if (y === 0 && x < m - 1) {
      x++
      isTop = true
    } else if (x === m - 1 && y < n - 1) {
      y++
      isTop = true
    } else {
      x++
      y--
    }
  }
}
// @lc code=end
