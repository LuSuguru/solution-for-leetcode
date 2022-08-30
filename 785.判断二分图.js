/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isBipartite(graph) {
  const { length } = graph

  const visited = new Array(length).fill(0)

  const dfs = (i, color) => {
    if (visited[i] !== 0) {
      return visited[i] === color
    }

    visited[i] = color

    for (let j = 0; j < graph[i].length; j++) {
      if (!dfs(graph[i][j], -color)) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < length; i++) {
    if (visited[i] === 0 && !dfs(i, 1)) {
      return false
    }
  }

  return true
}
// @lc code=end
