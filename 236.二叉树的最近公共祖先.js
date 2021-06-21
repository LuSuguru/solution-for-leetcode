/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归+深度优先遍历
function lowestCommonAncestor(root, p, q) {
  let ans
  const dfs = (root, p, q) => {
    if (root === null) return false
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      ans = root
    }
    return lson || rson || (root.val === p.val || root.val === q.val)
  }
  dfs(root, p, q)
  return ans
}

function lowestCommonAncestor(root, p, q) {
  const stack = []
  let node = root
  // 记录每个节点的父节点
  const parent = new Map()
  // 记录访问过的节点
  const visited = new Map()

  while (node || stack?.length) {
    if (node) {
      stack.push(node)
      if (node?.left) {
        parent.set(node.left.val, node)
      }

      node = node.left
    } else {
      node = stack.pop()
      if (node?.right) {
        parent.set(node.right.val, node)
      }
      node = node.right
    }
  }

  while (p != null) {
    // 从底往上将访问过的节点都记录下来
    visited.set(p.val, true)
    p = parent.get(p.val)
  }
  while (q != null) {
    // 如果访问过，说明是最近的节点
    if (visited.get(q.val)) {
      return q
    }
    q = parent.get(q.val)
  }
  return null
}
// @lc code=end
