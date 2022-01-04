/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
function isBalanced(root) {
  const dfs = (node) => {
    if (node === null) return 0

    const l = dfs(node.left)
    const r = dfs(node.right)

    if (l >= 0 && r >= 0 && Math.abs(l - r) <= 1) {
      return Math.max(l, r) + 1
    }

    return -1
  }

  return dfs(root) >= 0
}
// @lc code=end
