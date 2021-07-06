/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// dfs
function rightSideView(root) {
  if (!root) return []

  const result = []
  const dfs = (node = root, depth = 0) => {
    if (!node) return []

    if (!result[depth]) {
      result.push(node.val)
    }

    dfs(node.right, depth + 1)
    dfs(node.left, depth + 1)
  }

  dfs()
  return result
}

// bfs
function rightSideView(root) {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length) {
    let { length } = queue
    result.push(queue?.[0]?.val)

    while (length--) {
      const node = queue.shift()

      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
    }
  }
  return result
}
// @lc code=end
