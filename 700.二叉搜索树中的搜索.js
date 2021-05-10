/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
function searchBST(root, val) {
  // 查找队列
  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()

    if (!current) {
      return null
    }

    if (current.val === val) {
      return current
    }

    if (current.val < val) {
      queue.push(current.right)
    } else {
      queue.push(current.left)
    }
  }

  return null
}
// @lc code=end
