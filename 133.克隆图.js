/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function cloneGraph(node) {
  if (!node) return null

  const visited = []

  const dfs = (node) => {
    const { val, neighbors } = node

    if (visited[val]) {
      return visited[val]
    }

    const newNode = new Node(val, [])
    visited[val] = newNode

    newNode.neighbors = neighbors.map(item => dfs(item))

    return newNode
  }

  return dfs(node)
}
// @lc code=end
