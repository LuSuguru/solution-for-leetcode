/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null

  let max = Number.MIN_VALUE
  let maxIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }

  const right = nums.splice(maxIndex + 1)
  const left = nums.splice(0, maxIndex)

  return {
    val: max,
    left: constructMaximumBinaryTree(left),
    right: constructMaximumBinaryTree(right)
  }
}
// @lc code=end
