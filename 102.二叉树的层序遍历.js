/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) {
    return []
  }
  const list = []
  // 用个队列，存放子节点，记录节点深度
  const queue = [{ ...root }]

  while (queue.length) {
    let { length } = queue

    while (length) {
      const { left, right, val: value } = queue.shift()

      if (left) {
        queue.push({ ...left })
      }

      if (right) {
        queue.push({ ...right })
      }

      if (!list[length]) {
        list[length] = []
      }

      if (list[depth]) {
        list[depth].push(value)
      } else {
        list[depth] = [value]
      }

      length--
    }
  }

  return list
}
// @lc code=end
