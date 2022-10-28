/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
function minCameraCover(root) {
  if (!root) return 0

  let result = 0

  // 1: 可观测 ，2: 有摄像头 3: 不可观测
  const dfs = (node) => {
    if (!node) return 1

    const left = dfs(node.left)
    const right = dfs(node.right)

    if (left === 3 || right === 3) {
      result++
      return 2
    }
    if (left === 2 || right === 2) {
      return 1
    }
    return 3
  }

  if (dfs(root) === 3) result++

  return result
}
// @lc code=end
