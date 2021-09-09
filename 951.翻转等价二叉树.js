/*
 * @lc app=leetcode.cn id=951 lang=javascript
 *
 * [951] 翻转等价二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// bfs
function flipEquiv(root1, root2) {
  const stack1 = [root1]
  const stack2 = [root2]

  while (stack1.length > 0) {
    let { length } = stack1

    while (length > 0) {
      const node1 = stack1.pop()
      const node2 = stack2.pop()
      length--

      if (!node1 && !node2) {
        continue
      }

      if (!node1 || !node2 || node1.val !== node2.val) {
        return false
      }

      if (node1.left?.val === node2.left?.val && node1.right?.val === node2.right?.val) {
        stack1.push(node1.left)
        stack1.push(node1.right)

        stack2.push(node2.left)
        stack2.push(node2.right)
      } else if (node1.left?.val === node2.right?.val && node1.right?.val === node2.left?.val) {
        stack1.push(node1.left)
        stack1.push(node1.right)

        stack2.push(node2.right)
        stack2.push(node2.left)
      } else {
        return false
      }
    }
  }

  return true
}

// dfs
function flipEquiv(root1, root2) {
  if (!root1 && !root2) {
    return true
  }

  if (!root1 || !root2 || (root1.val !== root2.val)) {
    return false
  }

  return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) || (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
}
// @lc code=end
