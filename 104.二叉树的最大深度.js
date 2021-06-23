/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// 深度优先遍历
function maxDepth(root, depth = 0) {
  if (root) {
    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
  } else {
    return depth
  }
}

// 广度优先遍历
function maxDepth(root) {
  if (!root) return 0
  const queue = [root]

  let depth = 0
  while (queue.length) {
    let count = queue.length
    depth++

    while (count) {
      const node = queue.shift()

      if (node?.left) {
        queue.push(node.left)
      }
      if (node?.right) {
        queue.push(node.right)
      }

      count--
    }
  }
  return depth
}
// @lc code=end
