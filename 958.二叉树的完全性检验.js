/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
 * @return {boolean}
 */

function isCompleteTree(root) {
  const queue = [root]
  let depth = 0

  while (queue.length) {
    const { length } = queue
    let flag = false

    for (let i = length; i > 0; i--) {
      const node = queue.shift()

      if (!node.left && node.right) {
        return false
      }

      if (node.left && node.right) {
        if (flag) {
          return false
        }

        queue.push(node.left)
        queue.push(node.right)
        continue
      }

      if (node.left && !node.right) {
        if (flag) {
          return false
        }
        queue.push(node.left)

        flag = true
        continue
      }

      flag = true
    }

    if (queue.length && 2 ** depth !== length) {
      return false
    }
    depth++
  }
  return true
}

function isCompleteTree(root) {
  const queue = [root]
  let isStop = false

  while (queue.length) {
    const node = queue.shift()

    if (node === null) {
      isStop = true
      continue
    }

    if(isStop) {
      return false
    }

    queue.push(node.left)
    queue.push(node.right)
  }

  return true
}
// @lc code=end
