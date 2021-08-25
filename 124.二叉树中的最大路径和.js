/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
function maxPathSum(root) {
  const getPathSumAndMax = (node) => {
    if (!node) {
      return { max: Number.MIN_SAFE_INTEGER, sum: 0 }
    }

    const { max: leftMax, sum: leftSum } = getPathSumAndMax(node.left)
    const { max: rightMax, sum: rightSum } = getPathSumAndMax(node.right)

    let max = node.val
    if (leftSum > 0) {
      max += leftSum
    }

    if (rightSum > 0) {
      max += rightSum
    }

    max = Math.max(leftMax, rightMax, max)
    const sum = Math.max(node.val, node.val + leftSum, node.val + rightSum)

    return { max, sum }
  }

  return getPathSumAndMax(root).max
}

function maxPathSum(root) {
  let result = Number.MIN_SAFE_INTEGER

  const getMax = (node) => {
    if (!node) return 0

    const leftMax = Math.max(0, getMax(node.left))
    const rightMax = Math.max(0, getMax(node.right))

    result = Math.max(result, leftMax + node.val + rightMax)
    return Math.max(leftMax, rightMax) + node.val
  }

  getMax(root)
  return result
}
// @lc code=end
