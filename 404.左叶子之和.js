/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
function sumOfLeftLeaves(root) {
  let result = 0

  const dfs = (node, tag) => {
    if (!node) return

    if (!node.left && !node.right && tag === 'left') {
      result += node.val
    }

    dfs(node.left, 'left')
    dfs(node.right, 'right')
  }

  dfs(root)
  return result
}
// @lc code=end
