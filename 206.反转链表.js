/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 迭代
function reverseList(head) {
  let current = head
  let last = null

  while (current) {
    const nex = current.next
    current.next = last
    last = current
    current = nex
  }
  return last
}

// 递归
function reverseList(head) {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null

  return newHead
}
// @lc code=end
