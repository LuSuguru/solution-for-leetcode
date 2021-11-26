/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
function countNodes(root) {
  if (!root) return 0

  const lh = getDepth(root.left)
  const rh = getDepth(root.right)

  if (lh === rh) {
    return 2 ** lh + countNodes(root.right)
  }

  return 2 ** rh + countNodes(root.left)
}

// 获取深度
function getDepth(root) {
  let depth = 0

  while (root) {
    root = root.left
    depth++
  }
  return depth
}

// @lc code=end
