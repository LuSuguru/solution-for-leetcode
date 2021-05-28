/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 * 递归+栈，深度优先遍历
 */
function pathSum(root, targetSum) {
  const result = []
  const path = [] // 存储经过的路径

  const partPathSum = (node, target) => {
    if (!node) {
      return
    }

    path.push(node.val)

    if (!node.left && !node.right) { // 叶子节点
      if (node.val === target) {
        result.push([...path])
      }
    }

    partPathSum(node.left, target - node.val)
    partPathSum(node.right, target - node.val)
    path.pop()
  }

  partPathSum(root, targetSum)
  return result
}

// 队列,哈希表 循环，BFS
function pathSum(root, targetSum) {
  if (!root) {
    return []
  }

  const result = []

  const nodeQueue = [root]
  const numQueue = [targetSum]
  const nodeMap = new Map()

  const getPath = (node) => {
    const list = []

    while (node) {
      list.push(node.val)
      node = nodeMap.get(node)
    }

    result.push(list.reverse())
  }

  while (nodeQueue.length) {
    const node = nodeQueue.shift()
    const num = numQueue.shift()

    if (!node.left && !node.right) { // 叶子节点
      if (node.val === num) {
        getPath(node)
      }
    }

    if (node.left) {
      nodeQueue.push(node.left)
      numQueue.push(num - node.val)
      nodeMap.set(node.left, node)
    }

    if (node.right) {
      nodeQueue.push(node.right)
      numQueue.push(num - node.val)
      nodeMap.set(node.right, node)
    }
  }

  return result
}
// @lc code=end
