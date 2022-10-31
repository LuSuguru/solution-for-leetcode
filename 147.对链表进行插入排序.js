/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
  if (head === null || head.next === null) return head

  let node = head.next
  let first = head
  head.next = null

  while (node) {
    const next = node.next

    if (node.val <= first.val) {
      node.next = first
      first = node
    } else {
      let compareNode = first
      let insert = null

      while (compareNode) {
        if (node.val > compareNode.val) {
          insert = compareNode
        }
        compareNode = compareNode.next
      }

      node.next = insert.next
      insert.next = node
    }

    node = next
  }
  return first
}

// @lc code=end
