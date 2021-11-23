/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 个人解法
function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }

  const val = preorder[0]
  const index = inorder.indexOf(val)
  const leftPreorder = preorder.slice(1, index + 1)
  const rightPreorder = preorder.slice(index + 1)

  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1)

  const newNode = {
    val,
    left: buildTree(leftPreorder, leftInorder),
    right: buildTree(rightPreorder, rightInorder)
  }

  return newNode
}

// 优化版省空间递归
function buildTree(preorder, inorder) {
  // 用值做key，数组位置做value创建一个map，便于查找
  const map = {}
  const { length } = inorder
  
  for (let i = 0; i < length; i++) {
    map[inorder[i]] = i
  }

  const build = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) {
      return null
    }

    const val = preorder[preStart]
    const inIndex = map[val]
    const leftLength = inIndex - inStart

    return {
      val,
      left: build(preStart + 1, preStart + leftLength, inStart, inIndex - 1),
      right: build(preStart + leftLength + 1, preEnd, inIndex + 1, inEnd)
    }
  }

  return build(0, length - 1, 0, length - 1)
}

// 循环
// 我们用一个栈和一个指针辅助进行二叉树的构造。初始时栈中存放了根节点（前序遍历的第一个节点），指针指向中序遍历的第一个节点；

// 我们依次枚举前序遍历中除了第一个节点以外的每个节点。如果 index 恰好指向栈顶节点，那么我们不断地弹出栈顶节点并向右移动 index，并将当前节点作为最后一个弹出的节点的右儿子；如果 index 和栈顶节点不同，我们将当前节点作为栈顶节点的左儿子；

// 无论是哪一种情况，我们最后都将当前的节点入栈。

function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }

  const root = {
    val: preorder[0],
    left: null,
    right: null
  }

  const stack = []
  stack.push(root)
  let inorderIndex = 0

  for (let i = 1; i < preorder.length; i++) {
    const preVal = preorder[i]
    let node = stack[stack.length - 1]

    if (node.val !== inorder[inorderIndex]) {
      node.left = {
        val: preVal,
        left: null,
        right: null
      }
      stack.push(node.left)
    } else {
      while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
        node = stack.pop()
        inorderIndex++
      }
      node.right = {
        val: preVal,
        left: null,
        right: null
      }
      stack.push(node.right)
    }
  }

  return root
}

// @lc code=end
