/*
 * @lc app=leetcode.cn id=998 lang=javascript
 *
 * [998] 最大二叉树 II
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
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoMaxTree(root, val) {
  const dfs = (father, node) => {
    if (node.val < val) {
      const newNode = new TreeNode(val, node, null)
      if (father) {
        father.right = newNode
      } else {
        root = newNode
      }
      return
    }

    if (node.right) {
      dfs(node, node.right)
    } else {
      const newNode = new TreeNode(val, null, null)
      node.right = newNode
    }
  }

  dfs(null, root)
  return root
}

function insertIntoMaxTree(root, val) {
  if (!root) return new TreeNode(val, null, null)

  if (root.val < val) {
    return new TreeNode(val, root, null)
  }
  root.right = insertIntoMaxTree(root.right, val)
  return root
}
// @lc code=end
