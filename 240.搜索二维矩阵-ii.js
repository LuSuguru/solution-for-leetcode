/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 我的憨憨解法
function searchMatrix(matrix, target) {
  const search = (x1, x2, y1, y2) => {
    if (x1 > x2 || y1 > y2) {
      return false
    }

    if ((target < matrix[x1][y1]) || target > matrix[x2][y2]) {
      return false
    }

    const xLength = x2 - x1 + 1
    const yLength = y2 - y1 + 1

    if (xLength * yLength <= 4) {
      for (let i = x1; i <= x2; i++) {
        for (let j = y1; j <= y2; j++) {
          if (matrix[i][j] === target) {
            return true
          }
        }
      }
      return false
    }

    const halfX = x1 + Math.floor(xLength / 2)
    const halfY = y1 + Math.floor(yLength / 2)
    const nextX = halfX + 1 > x2 ? x2 : halfX + 1
    const nxetY = halfY + 1 > y2 ? y2 : halfY + 1

    return (
      search(x1, halfX, y1, halfY)
      || search(x1, halfX, nxetY, y2)
      || search(nextX, x2, y1, halfY)
      || search(nextX, x2, nxetY, y2)
    )
  }

  return search(0, matrix.length - 1, 0, matrix[0].length - 1)
}

function searchMatrix(matrix, target) {
  if (matrix === null || matrix.length === 0) return false

  let m = 0
  let n = matrix[0].length - 1

  while (m < matrix.length && n >= 0) {
    if (matrix[m][n] === target) {
      return true
    } if (matrix[m][n] > target) {
      n--
    } else {
      m++
    }
  }

  return false
}
// @lc code=end
