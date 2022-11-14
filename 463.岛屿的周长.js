/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  const m = grid.length
  const n = grid[0].length

  let result = 0
  const dfs = (i, j) => {
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
      return 1
    }

    if (grid[i][j] === 0) {
      return 1
    }

    if (grid[i][j] !== 1) {
      return 0
    }

    grid[i][j] = 2
    const sum = dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
    result += sum
    return 0
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j)
        break
      }
    }
  }

  return result
}
// @lc code=end
