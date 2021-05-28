/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 */
// 我的憨憨解法
function sumNumbers(root) {
  if (!root) {
    return 0
  }

  const stack = [root]

  let result = 0

  while (stack.length) {
    const node = stack.pop()

    if (!node.right && !node.left) { // 叶子节点
      result += node.val
    }

    if (node.right) {
      node.right.val = node.val * 10 + node.right.val
      stack.push(node.right)
    }

    if (node.left) {
      node.left.val = node.val * 10 + node.left.val
      stack.push(node.left)
    }
  }
  return result
}

// 递归，DFS
function sumNumbers(root) {
  const sum = (node, num) => {
    if (!node) {
      return 0
    }

    num = 10 * num + node.val
    if (!node.left && !node.right) {
      return num
    }

    return sum(node.left, num) + sum(node.right, num)
  }

  return sum(root, 0)
}

// 队列，BFS
function sumNumbers(root) {
  if (!root) {
    return 0
  }

  let sum = 0
  const nodeQueue = [root]
  const numQueue = [root.val]

  while (nodeQueue.length) {
    const node = nodeQueue.shift()
    const num = numQueue.shift()

    if (!node.left && !node.right) {
      sum += num
    }

    if (node.left) {
      nodeQueue.push(node.left)
      numQueue.push(num * 10 + node.left.val)
    }

    if (node.right) {
      nodeQueue.push(node.right)
      numQueue.push(num * 10 + node.right.val)
    }
  }

  return sum
}
// @lc code=end
