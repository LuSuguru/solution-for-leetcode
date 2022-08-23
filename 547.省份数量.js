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
// @lc code=end
