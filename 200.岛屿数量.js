/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// DFS
function numIslands(grid) {
  if (!grid || !grid.length) {
    return 0
  }

  const rowLength = grid.length
  const colLength = grid[0].length

  const dfs = (i, j) => {
    // 是否到边界
    if (i < 0 || i > rowLength - 1 || j < 0 || j > colLength - 1) {
      return
    }

    // 是否访问过
    if (grid[i][j] !== '1') {
      return
    }

    grid[i][j] = '2'

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  let result = 0

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j)
        result++
      }
    }
  }

  return result
}

// BFS
function numIslands(grid) {
  if (!grid || !grid.length) {
    return 0
  }

  const rowLength = grid.length
  const colLength = grid[0].length

  let result = 0

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === '1') {
        const queue = [[i, j]]
        grid[i][j] = '2'

        // 用队列来存储相邻是陆地且未访问过的节点
        while (queue.length) {
          const [row, col] = queue.shift()

          if (row - 1 >= 0 && grid[row - 1][col] === '1') {
            queue.push([row - 1, col])
            grid[row - 1][col] = '2'
          }

          if (row + 1 < rowLength && grid[row + 1][col] === '1') {
            queue.push([row + 1, col])
            grid[row + 1][col] = '2'
          }

          if (col - 1 >= 0 && grid[row][col - 1] === '1') {
            queue.push([row, col - 1])
            grid[row][col - 1] = '2'
          }

          if (col + 1 < colLength && grid[row][col + 1] === '1') {
            queue.push([row, col + 1])
            grid[row][col + 1] = '2'
          }
        }
        result++
      }
    }
  }

  return result
}

// union-find
function numIslands(grid) {
  // 并查集实现
  class UnionFind {
    count = 0
    parent = []
    rank = [] // 存每棵树的秩

    constructor(grid) {
      const rowLength = grid.length
      const colLength = grid[0].length

      for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
          if (grid[i][j] === '1') {
            this.parent[i * colLength + j] = i * colLength + j
            this.count++
          }
          this.rank[i * colLength + j] = 0
        }
      }
    }

    // 路径压缩
    find(n) {
      const { parent } = this
      if (parent[n] !== n) {
        parent[n] = this.find(parent[n])
      }
      return parent[n]
    }

    // 按秩合并
    union(n1, n2) {
      const { rank, parent } = this

      const root1 = this.find(n1)
      const root2 = this.find(n2)

      if (root1 !== root2) {
        if (rank[root1] > rank[root2]) {
          parent[root2] = root1
        } else if (rank[root2] > rank[root1]) {
          parent[root1] = root2
        } else {
          parent[root2] = root1
          rank[root1] += 1
        }
        this.count--
      }
    }
  }

  if (!grid?.length) return 0

  const rowLength = grid.length
  const colLength = grid[0].length

  const uf = new UnionFind(grid)

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] == '1') {
        grid[i][j] = '2'
        if (i - 1 >= 0 && grid[i - 1][j] == '1') {
          uf.union(i * colLength + j, (i - 1) * colLength + j)
        }
        if (i + 1 < rowLength && grid[i + 1][j] == '1') {
          uf.union(i * colLength + j, (i + 1) * colLength + j)
        }
        if (j - 1 >= 0 && grid[i][j - 1] == '1') {
          uf.union(i * colLength + j, i * colLength + j - 1)
        }
        if (j + 1 < colLength && grid[i][j + 1] == '1') {
          uf.union(i * colLength + j, i * colLength + j + 1)
        }
      }
    }
  }

  return uf.count
}
// @lc code=end
