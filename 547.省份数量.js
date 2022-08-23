/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// 深度优先遍历
function findCircleNum(isConnected) {
  const { length } = isConnected

  const visited = new Array(length)
  let result = 0

  const dfs = (i) => {
    for (let j = 0; j < length; j++) {
      if (isConnected[i][j] === 1 && !visited[j]) {
        visited[j] = 1
        dfs(j)
      }
    }
  }

  for (let i = 0; i < length; i++) {
    if (!visited[i]) {
      visited[i] = 1
      dfs(i)
      result++
    }
  }

  return result
}

// // 并查集
function findCircleNum(isConnected) {
  const { length } = isConnected
  const parent = new Array(length).fill(0).map((_, index) => index)

  const union = (i, j) => {
    parent[find(i)] = find(j)
  }

  const find = (i) => {
    // 路径压缩
    if (parent[i] !== i) {
      parent[i] = find(parent[i])
    }

    return parent[i]
  }

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j)
      }
    }
  }

  return parent.reduce((pre, item, index) => {
    if (item === index) pre++

    return pre
  }, 0)
}

// @lc code=end
