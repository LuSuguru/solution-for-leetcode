/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
function sortedArrayToBST(nums) {
  const generateTree = (start = 0, end = nums.length - 1) => {
    if (end < start) return null

    const mid = (start + end) >> 1
    const treeNode = new TreeNode(nums[mid], null, null)

    treeNode.left = generateTree(start, mid - 1)
    treeNode.right = generateTree(mid + 1, end)

    return treeNode
  }

  return generateTree()
}
// @lc code=end
