/*
 * @lc app=leetcode.cn id=1293 lang=javascript
 *
 * [1293] 网格中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
function shortestPath(grid, k) {
  const m = grid.length
  const n = grid[0].length

  if (k >= m + n - 3) {
    return m + n - 2
  }

  const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  // 记录当前状态
  const flag = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(0)))
  flag[0][0][k] = 0

  const queue = [[0, 0, k]]
  let step = 0

  while (queue.length) {
    step++
    let { length } = queue

    while (length--) {
      const [x, y, rest] = queue.shift()

      for (const [directionX, directionY] of direction) {
        const nextX = x + directionX
        const nextY = y + directionY

        // 判断越界
        if ((nextX >= 0 && nextX <= m - 1) && (nextY >= 0 && nextY <= n - 1)) {
          // 下一个位置nextX, nextY不是障碍物 , 且状态 [nextX][nextY][rest] 没被经历过

          if (grid[nextX][nextY] === 0 && !flag[nextX][nextY][rest]) {
            // 找到结果
            if (nextX == m - 1 && nextY == n - 1) {
              return step
            }
            // 没找到结果 ，记录当前状态，继续寻找

            flag[nextX][nextY][rest] = true
            queue.push([nextX, nextY, rest])
            // 且 状态[nextX][nextY][rest - 1]没被经历过
          } else if (grid[nextX][nextY] == 1 && rest > 0 && !flag[nextX][nextY][rest - 1]) {
            flag[nextX][nextY][rest - 1] = true
            queue.push([nextX, nextY, rest - 1])
          }
        }
      }
    }
  }

  return -1
}
// @lc code=end
