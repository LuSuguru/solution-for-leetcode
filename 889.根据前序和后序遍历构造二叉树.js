/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function constructFromPrePost(preorder, postorder) {
  const { length } = postorder

  if (length === 0) {
    return null
  }

  const val = postorder[length - 1]

  if (length === 1) {
    return new TreeNode(val, null, null)
  }

  if (length === 2) {
    const leftNode = new TreeNode(postorder[0], null, null)
    return new TreeNode(val, leftNode, null)
  }

  const leftVal = preorder[1]
  const leftIndex = postorder.indexOf(leftVal)

  const leftPreOrder = preorder.slice(1, leftIndex + 2)
  const leftPostOrder = postorder.slice(0, leftIndex + 1)

  const rightPreOrder = preorder.slice(leftIndex + 2, length)
  const rightPostorder = postorder.slice(leftIndex + 1, length - 1)

  return new TreeNode(
    val,
    constructFromPrePost(leftPreOrder, leftPostOrder),
    constructFromPrePost(rightPreOrder, rightPostorder)
  )
}
// @lc code=end
