/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
function getMinimumDifference(root) {
  const stack = []
  let result = Number.MAX_SAFE_INTEGER
  let last = null

  let current = root
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()

    if (last !== null) {
      result = Math.min(Math.abs(current.val - last), result)
    }

    last = current.val

    current = current.right
  }

  return result
}
// @lc code=end
