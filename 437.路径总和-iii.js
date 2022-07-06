/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
function pathSum(root, targetSum) {
  let result = 0

  const partPathSum = (node, target) => {
    if (!node) {
      return
    }

    target -= node.val

    if (target === 0) {
      result++
    }

    partPathSum(node.left, target)
    partPathSum(node.right, target)
  }

  const globalPathSum = (node, target) => {
    if (node === null) {
      return
    }

    partPathSum(node, target)

    // 把每个节点当成根节点
    globalPathSum(node.left, target)
    globalPathSum(node.right, target)
  }

  globalPathSum(root, targetSum)

  return result
}

// 前缀和
function pathSum(root, targetSum) {
  if (root === null) {
    return 0
  }

  const map = new Map()
  map.set(0, 1)

  const dfs = (node, curr) => {
    if (node == null) {
      return 0
    }

    let res = 0
    curr += node.val

    res += map.get(curr - targetSum) || 0
    map.set(curr, (map.get(curr) || 0) + 1)

    res += dfs(node.left, curr)
    res += dfs(node.right, curr)

    map.set(curr, map.get(curr) - 1)

    return res
  }

  return dfs(root, 0)
}
// @lc code=end
