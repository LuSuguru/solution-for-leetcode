/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
// dfs
function minDepth(root) {
  const dfs = (root, depth = 0) => {
    const { left, right } = root

    if (!left && !right) {
      return depth + 1
    }

    let minDepth = Number.MAX_VALUE
    if (left) {
      minDepth = Math.min(dfs(left, depth + 1), minDepth)
    }

    if (right) {
      minDepth = Math.min(dfs(right, depth + 1), minDepth)
    }
    return minDepth
  }

  if (root) {
    return dfs(root)
  }
  return 0
}

// bfs
function minDepth(root) {
  if (!root) return 0

  const queue = [root]

  let depth = 0

  while (queue.length > 0) {
    let { length } = queue
    depth++

    while (length--) {
      const node = queue.shift()

      if (!node.left && !node.right) {
        return depth
      }

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
  }
}
// @lc code=end
