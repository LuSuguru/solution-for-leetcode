/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
  if (!root) {
    return new TreeNode(val)
  }

  const dfs = (node) => {
    if (!node) return

    if (node.val < val) {
      if (node.right) {
        dfs(node.right)
      } else {
        node.right = new TreeNode(val)
      }
    }

    if (node.val > val) {
      if (node.left) {
        dfs(node.left)
      } else {
        node.left = new TreeNode(val)
      }
    }
  }
  dfs(root)

  return root
}
// @lc code=end
