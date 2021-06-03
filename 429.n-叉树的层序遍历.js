/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
// 我的广度优先遍历
function levelOrder(root) {
  if (!root) {
    return []
  }

  const queue = [root]

  const result = []

  while (queue.length) {
    const { depth, children } = queue.shift()

    while (children.length) {
      const node = children.shift()

      if (result[depth]) {
        result[depth].push(node.val)
      } else {
        result[depth] = [node.val]
      }

      if (node.children && node.children.length) {
        queue.push({ depth: depth + 1, children: node.children })
      }
    }
  }
  return result
}

// BFS
function levelOrder(root) {
  if (!root) {
    return []
  }

  const queue = [root]
  const result = []

  while (queue.length) {
    let { length } = queue

    const vals = []
    while (length--) {
      const node = queue.shift()
      vals.push(node.val)

      if (node.children) {
        queue.push(...node.children)
      }
    }
    result.push(vals)
  }
  return result
}

// DFS
function levelOrder(root) {
  if (!root) {
    return []
  }

  const result = []
  function dfs(node, depth = 0) {
    if (result[depth]) {
      result[depth].push(node.val)
    } else {
      result[depth] = [node.val]
    }

    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i], depth + 1)
      }
    }
  }

  dfs(root)

  return result
}
// @lc code=end
