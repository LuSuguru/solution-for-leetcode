/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */

function leastBricks(wall) {
  const map = {}
  let max = 0

  for (let i = 0; i < wall.length; i++) {
    let last = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      last += wall[i][j]

      map[last] = (map[last] || 0) + 1
      max = Math.max(max, map[last])
    }
  }

  return wall.length - max
}
// @lc code=end
