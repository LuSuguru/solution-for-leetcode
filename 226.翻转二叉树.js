/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) {
    return null
  }

  const stack = [root]

  while (stack.length) {
    const node = stack.pop()
    if (!node?.left && !node?.right) {
      continue
    }

    const medium = node.left
    node.left = node.right
    node.right = medium

    stack.push(node.left)
    stack.push(node.right)
  }

  return root
}

function invertTree(root) {
  const reverse = (node) => {
    if (!node?.left && !node?.right) {
      return
    }
    const medium = node.left
    node.left = node.right
    node.right = medium
    reverse(node.left)
    reverse(node.right)
  }

  reverse(root)
  return root
}
// @lc code=end
