/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const stack1 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  const stack2 = []
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let pos = 0
  let head = null
  while (stack1.length !== 0 || stack2.length !== 0 || pos !== 0) {
    const n = (stack1.pop() || 0) + (stack2.pop() || 0) + pos

    head = new ListNode(n % 10, head)
    pos = Math.floor(n / 10)
  }

  return head
}
// @lc code=end
