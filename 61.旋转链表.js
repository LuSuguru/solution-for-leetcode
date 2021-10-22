/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// 我的憨憨解法
function rotateRight(head, k) {
  if (head === null) return null

  // 真正的迁移量
  let index = 0
  // 前面的节点
  let front = head
  while (k > 0) {
    if (front.next) {
      front = front.next
      k--
      index++
    } else {
      front = head
      k--
      index = 0
    }
  }

  if (front === head) {
    return head
  }

  let cur = head
  const queue = []
  while (cur) {
    queue.push(front.val)

    if (index > 0) {
      front.val = cur.val
      index--
    } else {
      front.val = queue.shift()
    }

    cur = cur.next
    if (front.next) {
      front = front.next
    } else {
      front = head
    }
  }

  return head
}

// 官方解法
function rotateRight(head, k) {
  if (k === 0 || !head || !head.next) {
    return head
  }

  let cur = head
  let n = 1
  while (cur.next) {
    cur = cur.next
    n++
  }

  let add = n - k % n

  if (add === n) {
    return head
  }

  cur.next = head
  while (add) {
    cur = cur.next
    add--
  }

  const result = cur.next
  cur.next = null
  return result
}
// @lc code=end
