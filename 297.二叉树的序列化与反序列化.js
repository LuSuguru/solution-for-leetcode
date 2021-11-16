/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// BFS
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  const queue = [root]

  const result = []
  while (queue.length) {
    let { length } = queue
    while (length--) {
      const node = queue.shift()
      if (!node) {
        result.push(null)
      } else {
        result.push(node.val)

        queue.push(node.left)
        queue.push(node.right)
      }
    }
  }

  while (result[result.length - 1] === null) {
    result.pop()
  }

  return result.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  const arr = data.split(',')
  if (!arr?.[0]) return null

  const root = {
    val: arr.shift(),
    left: null,
    right: null
  }

  const queue = [root]

  while (arr.length) {
    let { length } = queue

    while (length--) {
      const node = queue.shift()

      if (node !== null) {
        const leftVal = arr.shift()
        const rightVal = arr.shift()

        let leftNode = null
        if (leftVal) {
          leftNode = {
            val: leftVal,
            left: null,
            right: null
          }
          queue.push(leftNode)
        }
        node.left = leftNode

        let rightNode = null
        if (rightVal) {
          rightNode = {
            val: rightVal,
            left: null,
            right: null
          }
          queue.push(rightNode)
        }
        node.right = rightNode
      }
    }
  }

  return root
}

// BFS
function serialize(root) {
  return rserialize(root, '')
}

function deserialize(data) {
  const dataArray = data.split(',')
  return rdeserialize(dataArray)
}

const rserialize = (root, str) => {
  if (root === null) {
    str += 'None,'
  } else {
    str += root.val + ','
    str = rserialize(root.left, str)
    str = rserialize(root.right, str)
  }
  return str
}

const rdeserialize = (dataList) => {
  if (dataList[0] === 'None') {
    dataList.shift()
    return null
  }

  const root = {
    val: dataList[0],
    left: null,
    right: null
  }
  dataList.shift()
  root.left = rdeserialize(dataList)
  root.right = rdeserialize(dataList)

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
