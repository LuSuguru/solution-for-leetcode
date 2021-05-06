/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 栈实现
function inorderTraversal(root) {
  if (root === null) {
    return []
  }

  const nums = []
  // 访问节点深度的栈，从上往下
  const stack = []

  let current = root
  while (current) {
    // 左边
    if (!current.visitLeft) {
      // 当前节点的左节点是否访问过的 flag
      current.visitLeft = true
      if (current.left) {
        stack.push(current)
        current = current.left
        continue
      }
    }

    // 中间
    if (current.visitLeft && !current.visitRight) {
      nums.push(current.val)
    }

    // 右边
    if (!current.visitRight) {
      // 当前节点的右节点是否访问过的 flag
      current.visitRight = true
      if (current.right) {
        stack.push(current)
        current = current.right
        continue
      }
    }

    // 返回父节点
    current = stack.pop()
  }

  return nums
}

// 递归
function inorderTraversal(root) {
  const list = []

  function traversal(treeNode) {
    if (treeNode === null) {
      return list
    }

    traversal(treeNode.left) // 左树
    list.push(treeNode.val) // 中间
    traversal(treeNode.right) // 右树
  }

  traversal(root)
  return list
}

// 迭代2
function inorderTraversal(root) {
  const list = []
  const stack = []

  let current = root
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    list.push(current.val)
    current = current.right
  }
  return list
}
// @lc code=end
