/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
function deepestLeavesSum(root) {
  const queue = [root]

  let result = 0
  while (queue.length) {
    let { length } = queue

    let part = 0
    while (length--) {
      const node = queue.shift()

      if (node) {
        part += node.val

        if (node.left) {
          queue.push(node.left)
        }

        if (node.right) {
          queue.push(node.right)
        }
      }
    }
    result = part
  }

  return result
}
// @lc code=end
