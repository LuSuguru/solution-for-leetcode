/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
function minDiffInBST(root) {
  let pre = null
  let result = Number.MAX_VALUE

  const dfs = (node) => {
    if (!node) return null
    dfs(node.left)

    if (pre) {
      result = Math.min(result, Math.abs(node.val - pre.val))
    }

    pre = node
    dfs(node.right)
  }

  dfs(root)
  return result
}
// @lc code=end
