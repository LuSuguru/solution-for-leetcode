/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (root === null) {
    return null
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else if (root.left && root.right) {
    // 找到右边最小子节点
    let minNode = root.right
    while (minNode.left) {
      minNode = minNode.left
    }

    root.val = minNode.val
    root.right = deleteNode(root.right, root.val)
  } else {
    if (root.left === null) {
      return root.right
    }
    if (root.right === null) {
      return root.left
    }
  }

  return root
}
// @lc code=end
