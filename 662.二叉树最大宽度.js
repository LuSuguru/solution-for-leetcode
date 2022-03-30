/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
function widthOfBinaryTree(root) {
  const queue = [[root, 1]]
  let result = 0

  while (queue.length > 0) {
    let { length } = queue

    // 子节点只有一个，减枝，防止越界
    if (length === 1) {
      queue[0][1] = 0
    }

    let left = 0
    let right = 0
    while (length) {
      const [node, index] = queue.shift()

      if (left) {
        right = index
      } else {
        left = index
        right = index
      }

      if (node.left) {
        queue.push([node.left, index * 2 - 1])
      }

      if (node.right) {
        queue.push([node.right, index * 2])
      }

      length--
    }

    result = Math.max(result, right - left + 1)
  }

  return result
}
// @lc code=end
