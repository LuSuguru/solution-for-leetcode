/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// 我的傻逼解法
function kthSmallest(root, k) {
  if (!root) {
    return 0
  }
  const treeMerge = (node, arr = []) => {
    if (!node) {
      return arr
    }

    treeMerge(node.left, arr)
    arr.push(node.val)
    treeMerge(node.right, arr)

    return arr
  }

const sortArr = treeMerge(root)
return sortArr[k - 1]
}

// 中序遍历+栈
function kthSmallest(root, k) {
  const stack = []

  let node = root
  while (stack.length || node !== null) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()

      if (--k === 0) {
        return node.val
      }
      node = node.right
    }
  }
}
// @lc code=end
