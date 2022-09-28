/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxIncreaseKeepingSkyline(grid) {
  const maxRows = []
  const maxLines = []

  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let maxRow = maxRows[i]
      if (!maxRow) {
        for (let k = 0; k < grid[i].length; k++) {
          maxRow = Math.max(maxRow || 0, grid[i][k])
        }
        maxRows[i] = maxRow
      }

      let maxLine = maxLines[j]
      if (!maxLine) {
        for (let l = 0; l < grid.length; l++) {
          maxLine = Math.max(maxLine || 0, grid[l][j])
        }
        maxLines[j] = maxLine
      }

      result += Math.min(maxLine, maxRow) - grid[i][j]
    }
  }

  return result
}
// @lc code=end
