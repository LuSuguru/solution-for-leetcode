/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 我的憨憨解法
function sortedListToBST(head) {
  if (!head) return null

  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  const generateTree = (start, end) => {
    const mid = Math.floor((end - start) / 2)

    const treeNode = { val: arr[start + mid], left: null, right: null }

    if ((start + mid - 1) >= start) {
      treeNode.left = generateTree(start, start + mid - 1)
    }

    if (end >= (start + mid + 1)) {
      treeNode.right = generateTree(start + mid + 1, end)
    }

    return treeNode
  }

  return generateTree(0, arr.length - 1)
}

// 双指针+dfs
function sortedListToBST(head) {
  if (!head) {
    return null
  } if (!head.next) {
    return { val: head.val, left: null, right: null }
  }

  let pre = head
  let p = head.next
  let q = p.next

  while (q && q.next) {
    pre = pre.next
    p = pre.next
    q = q.next.next
  }

  pre.next = null
  const root = { val: p.val, left: null, right: null }
  root.left = sortedListToBST(head)
  root.right = sortedListToBST(p.next)

  return root
}
// @lc code=end
