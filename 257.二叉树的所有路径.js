/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
function binaryTreePaths(root) {
  const result = []
  const dfs = (node, string) => {
    if (!node) {
      return
    }

    string = string ? `${string}->${node.val}` : `${node.val}`

    if (!node.left && !node.right) {
      result.push(string)
      return
    }

    if (node.left) {
      dfs(node.left, string)
    }

    if (node.right) {
      dfs(node.right, string)
    }
  }

  dfs(root)
  return result
}
// @lc code=end
