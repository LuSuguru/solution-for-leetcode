/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
function swapPairs(head) {
  const hair = new ListNode(null, head)

  let node = hair
  while (node?.next?.next) {
    const left = node.next
    const right = node.next.next

    const tail = right.next

    left.next = tail
    right.next = left
    node.next = right
    node = left
  }

  return hair.next
}
// @lc code=end
