/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  const dfs = (p, q) => {
    if (p?.val !== q?.val) {
      return false
    }

    if (p === null && q === null) {
      return true
    }

    return dfs(p?.left, q?.left) && dfs(p?.right, q?.right)
  }

  return dfs(p, q)
}
// @lc code=end
