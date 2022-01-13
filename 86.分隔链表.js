/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  const header = new ListNode(0, head)
  let left = header

  let rightHead = null
  let right = null

  while (left?.next) {
    if (left.next?.val >= x) {
      right = left.next
      rightHead = right
      break
    }
    left = left.next
  }

  while (right?.next) {
    if (right.next && right.next.val < x) {
      left.next = right.next
      left = left.next

      right.next = right.next.next
    } else {
      right = right.next
    }
  }

  left.next = rightHead
  return header.next
}

function partition(head, x) {
  const head1 = new ListNode(0)
  const head2 = new ListNode(0)

  let node1 = head1
  let node2 = head2

  while (head) {
    if (head.val < x) {
      node1.next = head
      node1 = node1.next

      head = head.next
      node1.next = null
    } else {
      node2.next = head
      node2 = node2.next

      head = head.next
      node2.next = null
    }
  }

  node1.next = head2.next

  return head1.next
}

// @lc code=end
