/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

// 我的憨憨解封
function isValidSerialization(preorder) {
  const strArr = preorder.split(',')

  if (strArr.length % 2 === 0) return false

  const stack = [new TreeNode(strArr.shift())]

  while (stack.length) {
    const node = stack[stack.length - 1]

    if ((node.left && node.right) || node.val === '#') {
      stack.pop()
      continue
    }

    if (strArr.length === 0) {
      return false
    }

    if (!node.left) {
      const val = strArr.shift()
      const newNode = new TreeNode(val)

      node.left = newNode
      stack.push(newNode)
    } else {
      const val = strArr.shift()
      const newNode = new TreeNode(val)

      node.right = newNode
      stack.push(newNode)
    }
  }

  return stack.length === 0 && strArr.length === 0
}

// 插槽加栈优化
function isValidSerialization(preorder) {
  let i = 0
  // 计时器，标记槽位，遇到#，槽位减 1，遇到非空数字，槽位减 1 再加 2
  let slot = 1

  while (i < preorder.length) {
    if (slot === 0) {
      return false
    }

    if (preorder[i] === ',') {
      i++
    } else if (preorder[i] === '#') {
      slot--
      i++
    } else {
      // 读数字
      while (i < preorder.length && preorder[i] !== ',') {
        i++
      }
      slot++
    }
  }
  return slot === 0
}
// @lc code=end
