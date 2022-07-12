/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
function rob(root) {
  const dfs = (node) => {
    if (!node) return [0, 0]

    const l = dfs(node.left)
    const r = dfs(node.right)

    // 选择当前节点，那么左右子节点不能选取
    const selected = node.val + l[1] + r[1]

    // 不选当前节点，则左右节点可选可不选，取最大值
    const notSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1])

    return [selected, notSelected]
  }

  const [selected, notSelected] = dfs(root)

  return Math.max(selected, notSelected)
}
// @lc code=end
