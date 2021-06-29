/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// dfs
function isSymmetric(root) {
  const dfs = (left, right) => {
    if (!left && !right) return true
    if (!left || !right) return false

    return left.val === right.val
      && dfs(left.left, right.right)
      && dfs(left.right, right.left)
  }

  return dfs(root.left, root.right)
}

// bfs
function isSymmetric(root) {
  const queue = []

  queue.push(root.left)
  queue.push(root.right)

  while (queue.length) {
    const u = queue.shift()
    const v = queue.shift()

    if (!u && !v) continue
    if ((!u || !v) || (u.val !== v.val)) return false

    queue.push(u.left)
    queue.push(v.right)

    queue.push(u.right)
    queue.push(v.left)
  }
  return true
}

// 我的憨憨解法
function isSymmetric(root) {
  const dfs = (node, depth = 1) => {
    const arr = []
    if (!node) return arr
    if (node.left) {
      arr.unshift(...dfs(node.left, depth + 1))
    }

    // 确保同层比较
    arr.push({ val: node.val, depth })

    if (node.right) {
      arr.push(...dfs(node.right, depth + 1))
    }
    return arr
  }
  const valList = dfs(root)

  if (valList.length % 2 === 0) return false

  for (let i = 0, j = valList.length - 1; i !== j; i++, j--) {
    const left = valList[i]
    const right = valList[j]

    if (left.val !== right.val || left.depth !== right.depth) return false
  }
  return true
}

// bfs，我的憨憨解法
function isSymmetric(root) {
  const queue = []
  let arr = []

  if (root.left) {
    queue.push(root.left)
    arr.push(root.left.val)
  } else {
    // 空的节点用 0 占位
    arr.push(0)
  }

  if (root.right) {
    queue.push(root.right)
    arr.push(root.right.val)
  } else {
    // 空的节点用 0 占位
    arr.push(0)
  }

  while (queue.length) {
    let { length } = queue

    if (length % 2 !== 0) return false

    // 判断每层节点值数组是否为回文数组
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      const left = arr[i]
      const right = arr[j]

      if (left !== right) return false
    }
    arr = []

    while (length) {
      const node = queue.shift()

      if (node.left) {
        queue.push(node.left)
        arr.push(node.left.val)
      } else {
        arr.push(0)
      }

      if (node.right) {
        queue.push(node.right)
        arr.push(node.right.val)
      } else {
        arr.push(0)
      }

      length--
    }
  }

  return true
}
// @lc code=end
