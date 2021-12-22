/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
function diameterOfBinaryTree(root) {
  let result = 0

  const dfs = (node = root) => {
    if (!node.left && !node.right) {
      return 0
    }

    const leftDepth = node.left ? dfs(node.left) + 1 : 0
    const rightDepth = node.right ? dfs(node.right) + 1 : 0

    result = Math.max(leftDepth + rightDepth, result)
    return Math.max(leftDepth, rightDepth)
  }

  dfs()

  return result
}
// @lc code=end
