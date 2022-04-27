/*
 * @lc app=leetcode.cn id=1145 lang=javascript
 *
 * [1145] 二叉树着色游戏
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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
function btreeGameWinningMove(root, n, x) {
  let fatherNum = 0
  let leftNum = 0
  let rightNum = 0

  const dfs = (node) => {
    if (!node) {
      return 0
    }

    const leftNodes = node.left ? dfs(node.left) : 0
    const rightNodes = node.right ? dfs(node.right) : 0

    if (node.val === x) {
      fatherNum = n - leftNodes - rightNodes - 1
      leftNum = leftNodes
      rightNum = rightNodes
    }
    return leftNodes + rightNodes + 1
  }

  dfs(root)
  const select = Math.max(fatherNum, leftNum, rightNum)

  if (select > n - select) {
    return true
  }
  return false
}
// @lc code=end
