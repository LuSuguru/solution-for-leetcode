/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
function isPalindrome(head) {
  if (!head) {
    return false
  }

  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null
  let curr = slow
  while (curr !== null) {
    const next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  let p1 = head
  let p2 = prev

  while (p2 !== null) {
    if (p1.val !== p2.val) {
      return false
    }

    p1 = p1.next
    p2 = p2.next
  }

  return true
}
// @lc code=end
