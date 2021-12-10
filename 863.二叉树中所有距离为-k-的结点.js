/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
  const map = {}
  const dfs = (node, parent) => {
    if (!node) {
      return
    }

    if (parent) {
      map[node.val] = parent
    }

    if (node === target) {
      return
    }

    dfs(node.left, node)
    dfs(node.right, node)
  }

  dfs(root)
  const visited = {}

  const bfs = (node, depth) => {
    if (!node) return []
    const queue = [node]
    const result = []

    while (queue.length > 0) {
      let { length } = queue

      while (length--) {
        const node = queue.shift()

        if (visited[node.val]) {
          continue
        }
        visited[node.val] = true

        if (depth === 0) {
          result.push(node.val)
        }

        if (node.left) {
          queue.push(node.left)
        }

        if (node.right) {
          queue.push(node.right)
        }

        if (map[node.val]) {
          queue.push(map[node.val])
        }
      }

      if (depth === 0) {
        break
      }
      depth--
    }
    return result
  }

  const result = bfs(target, k)
  return result
}

// @lc code=end
