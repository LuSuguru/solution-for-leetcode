/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function mergeTrees(root1, root2) {
  if (!root1 && !root2) {
    return null
  }

  return new TreeNode(
    (root1?.val || 0) + (root2?.val || 0),
    mergeTrees(root1?.left, root2?.left),
    mergeTrees(root1?.right, root2?.right)
  )
}
// @lc code=end
