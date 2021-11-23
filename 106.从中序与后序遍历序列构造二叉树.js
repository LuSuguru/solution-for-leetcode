/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  if (postorder.length === 0) return null

  const { length } = postorder

  const val = postorder[length - 1]

  const index = inorder.indexOf(val)

  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1)

  const leftPostorder = postorder.slice(0, index)
  const rightPostorder = postorder.slice(index, length - 1)

  const newNode = {
    val,
    left: buildTree(leftInorder, leftPostorder),
    right: buildTree(rightInorder, rightPostorder)
  }

  return newNode
}

function buildTree(inorder, postorder) {
  if (postorder.length === 0) return null

  const map = {}
  const { length } = postorder

  for (let i = 0; i < length; i++) {
    map[inorder[i]] = i
  }

  const build = (inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd || postStart > postEnd) {
      return null
    }

    const val = postorder[postEnd]
    const inIndex = map[val]
    const leftLength = inIndex - inStart

    return {
      val,
      left: build(inStart, inIndex - 1, postStart, postStart + leftLength - 1),
      right: build(inIndex + 1, inEnd, postStart + leftLength, postEnd - 1)
    }
  }

  return build(0, length - 1, 0, length - 1)
}
// @lc code=end
