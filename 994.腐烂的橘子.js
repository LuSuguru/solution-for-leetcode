/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const rowLength = grid.length
  const colLength = grid[0].length

  let oneNum = 0

  const queue = []

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === 1) {
        oneNum++
      } else if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }

  if (oneNum === 0) {
    return 0
  }

  let result = 0
  let first = true
  while (queue.length) {
    let { length } = queue

    while (length--) {
      const [row, col] = queue.shift()

      if (row - 1 >= 0 && grid[row - 1][col] === 1) {
        queue.push([row - 1, col])
        grid[row - 1][col] = 3
        oneNum--
      }

      if (row + 1 < rowLength && grid[row + 1][col] === 1) {
        queue.push([row + 1, col])
        grid[row + 1][col] = 3
        oneNum--
      }

      if (col - 1 >= 0 && grid[row][col - 1] === 1) {
        queue.push([row, col - 1])
        grid[row][col - 1] = 3
        oneNum--
      }

      if (col + 1 < colLength && grid[row][col + 1] === 1) {
        queue.push([row, col + 1])
        grid[row][col + 1] = 3
        oneNum--
      }
    }

    if (first) {
      first = false
    } else {
      result++
    }
  }

  return oneNum === 0 ? result : -1
}
// @lc code=end
