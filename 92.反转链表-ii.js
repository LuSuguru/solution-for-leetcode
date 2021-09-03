/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  const hair = {
    val: 0,
    next: null
  }
  hair.next = head

  let pre = hair
  let i = 1
  while (i < left) {
    pre = head
    head = head.next
    i++
  }

  let tail = head
  while (i < right) {
    tail = tail.next
    i++
  }

  [head, tail] = reverse(head, tail)
  pre.next = head

  return hair.next
}

function reverse(head, tail) {
  let prev = tail.next
  let p = head

  while (prev !== tail) {
    const nex = p.next
    p.next = prev
    prev = p
    p = nex
  }
  return [tail, head]
}
// @lc code=end
