/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
function sortList(head) {
  if (head === null || head.next === null) {
    return head
  }
  let slow = head
  let fast = head.next

  // 快慢指针，遍历完成后慢指针指向链表中点
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  const right = sortList(slow.next) // 递归处理后半段
  slow.next = null // 从中间切断链表
  const left = sortList(head) // 递归处理前半段
  return merge(left, right)
}

function merge(left, right) {
  const h = new ListNode()
  let p = h
  while (left != null && right != null) {
    if (left.val < right.val) {
      p.next = left
      left = left.next
    } else {
      p.next = right
      right = right.next
    }
    p = p.next
  }
  p.next = left == null ? right : left
  return h.next
}
// @lc code=end
