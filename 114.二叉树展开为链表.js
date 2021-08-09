/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 我的憨憨解法
function flatten(node) {
  if (!node) return null

  const leftEnd = flatten(node.left)
  const rightEnd = flatten(node.right)

  if (node.left && leftEnd) {
    leftEnd.right = node.right
    node.right = node.left
    node.left = null
  }

  if (node.right) {
    return rightEnd || leftEnd
  }
  return node
}

// 递归
function flatten(root) {
  let last = null

  const dfs = (node) => {
    if (!node) return
    dfs(node.right)
    dfs(node.left)

    node.right = last
    node.left = null
    last = node
  }

  dfs(root)
  last = null
}

// 迭代
// function flatten(node) {
//   while (node) {
//     if (node.left) {
//       const next = node.left
//       let last = node.left
//       while (last.right) {
//         last = last.right
//       }

//       last.right = node.right
//       node.left = null
//       node.right = next
//     }
//     node = node.right
//   }
// }
// @lc code=end
