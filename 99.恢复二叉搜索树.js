/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
function recoverTree(root) {
  let change1 = null
  let change2 = null

  const stack = []

  let max = null

  let current = root
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()

    if (current.val < max?.val) {
      change1 = current

      if (change2 === null) {
        change2 = max
      } else {
        break
      }
    }

    max = current
    current = current.right
  }

  const val = change1.val
  change1.val = change2.val
  change2.val = val
}
// @lc code=end
