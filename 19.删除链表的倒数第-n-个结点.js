/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// 用了一个map，我的憨憨解法
function removeNthFromEnd(head, n) {
  const arr = []

  let node = head
  while (node) {
    arr.push(node)
    node = node.next
  }

  const index = arr.length - n
  if (index <= 0) {
    return head.next
  }

  node = arr[index - 1]
  node.next = node.next?.next || null

  return head
}

// 双指针，好巧妙，很气
function removeNthFromEnd(head, n) {
  let slow = head
  let fast = head

  for (let i = 1; i <= n; i++) {
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next?.next || null
  return head
}
// @lc code=end
