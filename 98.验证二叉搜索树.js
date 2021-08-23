/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// 我的憨憨解法
function isValidBST(root) {
  if (!root) return true

  const dfs = (node) => {
    const { val, left, right } = node
    let leftChecked = false
    let rightChecked = false

    let min = 0
    let max = 0

    if (!left) {
      leftChecked = true
      min = val
    } else if (left.val < val) {
      const validObj = dfs(left)
      min = validObj.min

      if (validObj.checked) {
        leftChecked = validObj.max < val
      }
    }

    if (!right) {
      rightChecked = true
      max = val
    } else if (right.val > val) {
      const validObj = dfs(right)
      max = validObj.max

      if (validObj.checked) {
        rightChecked = validObj.min > val
      }
    }

    return { checked: leftChecked && rightChecked, min, max }
  }

  return dfs(root).checked
}

// 递归
function isValidBST(root) {
  const dfs = (root, min, max) => {
    if (!root) {
      return true
    }

    if (root.val <= min || root.val >= max) {
      return false
    }

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
  }

  return dfs(root, -Infinity, Infinity)
}

// 中序遍历
function isValidBST(root) {
  const stack = []
  let inorder = -Infinity

  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    if (root.val <= inorder) {
      return false
    }
    inorder = root.val
    root = root.right
  }
  return true
}
// @lc code=end
