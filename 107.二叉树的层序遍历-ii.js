/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  if (root === null) {
    return []
  }
  const queue = [root]
  const result = []

  while (queue.length > 0) {
    let { length } = queue

    const tier = []
    while (length > 0) {
      const node = queue.shift()
      tier.push(node.val)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
      length--
    }
    result.unshift(tier)
  }

  return result
}
// @lc code=end
