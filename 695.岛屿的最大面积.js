/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs 递归
function maxAreaOfIsland(grid) {
  if (!grid?.length) {
    return 0
  }

  const m = grid.length
  const n = grid[0].length

  let result = 0

  const bfs = (i, j, cur = 0) => {
    if (i < 0 || i === m || j < 0 || j === n || grid[i][j] !== 1) {
      return 0
    }

    cur++
    grid[i][j] = 0

    cur += bfs(i - 1, j)
    cur += bfs(i + 1, j)
    cur += bfs(i, j - 1)
    cur += bfs(i, j + 1)
    return cur
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(bfs(i, j), result)
    }
  }
  return result
}

// dfs 循环
function maxAreaOfIsland(grid) {
  if (!grid?.length) {
    return 0
  }

  const m = grid.length
  const n = grid[0].length

  let result = 0
  const stackI = []
  const stackJ = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0

      stackI.push(i)
      stackJ.push(j)

      while (stackI.length) {
        const curI = stackI.pop()
        const curJ = stackJ.pop()

        if (curI < 0 || curI === m || curJ < 0 || curJ === n || grid[curI][curJ] !== 1) {
          continue
        }

        ++cur
        grid[curI][curJ] = 0
        const di = [0, 0, 1, -1]
        const dj = [1, -1, 0, 0]
        for (let index = 0; index != 4; ++index) {
          const nextI = curI + di[index]
          const nextJ = curJ + dj[index]

          stackI.push(nextI)
          stackJ.push(nextJ)
        }
      }
      result = Math.max(cur, result)
    }
  }
  return result
}

// BFS
function maxAreaOfIsland(grid) {
  if (!grid?.length) {
    return 0
  }

  const m = grid.length
  const n = grid[0].length

  let result = 0
  const queueI = []
  const queueJ = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0

      queueI.push(i)
      queueJ.push(j)

      while (queueI.length) {
        const curI = queueI.shift()
        const curJ = queueJ.shift()

        if (curI < 0 || curI === m || curJ < 0 || curJ === n || grid[curI][curJ] !== 1) {
          continue
        }

        ++cur
        grid[curI][curJ] = 0
        const di = [0, 0, 1, -1]
        const dj = [1, -1, 0, 0]
        for (let index = 0; index != 4; ++index) {
          const nextI = curI + di[index]
          const nextJ = curJ + dj[index]

          queueI.push(nextI)
          queueJ.push(nextJ)
        }
      }
      result = Math.max(cur, result)
    }
  }
  return result
}
// @lc code=end
