/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归
function hasPathSum(root, targetSum) {
  if (!root) {
    return false
  }

  // 到叶子节点
  if (!root.left && !root.right) {
    return root.val === targetSum
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

// 循环加队列
function hasPathSum(root, targetSum) {
  if (!root) {
    return false
  }

  const nodeQueue = [root]
  const numQueue = [targetSum]

  while (nodeQueue.length) {
    const node = nodeQueue.shift()
    const num = numQueue.shift()

    console.log(node, num)
    if (!node.left && !node.right) {
      if (node.val === num) {
        return true
      }
    }

    if (node.left) {
      nodeQueue.push(node.left)
      numQueue.push(num - node.val)
    }

    if (node.right) {
      nodeQueue.push(node.right)
      numQueue.push(num - node.val)
    }
  }

  return false
}
// @lc code=end
