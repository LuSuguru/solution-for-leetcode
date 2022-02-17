/* eslint-disable no-bitwise */
/*
 * @lc app=leetcode.cn id=847 lang=javascript
 *
 * [847] 访问所有节点的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number}
 */
function shortestPathLength(graph) {
  const { length } = graph
  // 记录访问过的路径集合
  const seen = new Array(length).fill(0).map(() => new Array(1 << length).fill(false))
  // 广度优先遍历的队列
  const queue = []

  for (let i = 0; i < length; i++) {
    // 队列每一个元素
    // 第一项：代表当前元素
    // 第二项：是一个长度为 n 的二进制数，表示每一个节点是否经过。如果 mask 的第 i 位是 1，则表示节点 i 已经过，否则表示节点 i 未经过
    // 第三项：表示到当前节点为止经过的路径长度
    queue.push([i, 1 << i, 0])
    seen[i][1 << i] = true
  }

  let result = 0

  // 广度优先遍历确保是最短路径
  while (queue.length) {
    const [u, mask, dist] = queue.shift()

    // 全部节点都访问过了
    if (mask === (1 << length) - 1) {
      result = dist
      break
    }

    graph[u].forEach((v) => {
      const maskV = mask | (1 << v)

      if (!seen[v][maskV]) {
        queue.push([v, maskV, dist + 1])
        seen[v][maskV] = true
      }
    })
  }

  return result
}

// @lc code=end
