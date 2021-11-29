/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
  const formatTree = (root) => {
    if (!root) return '# #'
    return `#${root.val}#${formatTree(root.left)}${formatTree(root.right)}`
  }

  return formatTree(root).includes(formatTree(subRoot))
}

function isSameTree(r, s) {
  if (!r && !s) return true

  return r && s && r.val === s.val && isSameTree(r.left, s.left) && isSameTree(r.right, s.right)
}

function isSubtree(root, subRoot) {
  if (!root && !subRoot) return true

  if (!root && subRoot) return false
  if (root && !subRoot) return false

  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
// @lc code=end
