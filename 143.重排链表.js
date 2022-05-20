/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  let node = head
  const stack = []
  while (node) {
    stack.push(node)
    node = node.next
  }

  node = new ListNode(0, null)

  let start = stack.length ? stack.shift() : null
  let end = stack.length ? stack.pop() : null
  while (start || end) {
    node.next = start
    start.next = end

    node = end
    start = stack.length ? stack.shift() : null
    end = stack.length ? stack.pop() : null
  }

  if (node) {
    node.next = null
  }

  return head
}

function reorderList(head) {
  let slow = head
  let fast = head

  // 快慢双指针切割链表
  while (slow.next && fast.next?.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // 反转链表
  let tail = slow.next
  slow.next = null
  tail = reserve(tail)

  // 合并
  while (head && tail) {
    const headNext = head.next
    const tailNext = tail.next

    head.next = tail
    tail.next = headNext

    head = headNext
    tail = tailNext
  }

  return head
}

function reserve(head) {
  let prev = null

  while (head) {
    const { next } = head

    head.next = prev
    prev = head
    head = next
  }

  return prev
}
// @lc code=end
