/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
function zigzagLevelOrder(root) {
  if (root === null) {
    return []
  }

  /**
   *    3
   *  9   20
   *    15  7
   */
  const list = []
  // 用个队列，存放子节点，记录节点深度
  const queue = [{ ...root, depth: 0 }]
  let isRight = false

  while (queue.length) {
    let count = queue.length
    isRight = !isRight

    while (count > 0) {
      const { depth, left, right, val: value } = queue.shift()

      if (left) {
        queue.push({ ...left, depth: depth + 1 })
      }

      if (right) {
        queue.push({ ...right, depth: depth + 1 })
      }

      if (list[depth]) {
        if (isRight) {
          list[depth].push(value)
        } else {
          list[depth].unshift(value)
        }
      } else {
        list[depth] = [value]
      }

      count--
    }
  }

  return list
}
// @lc code=end
