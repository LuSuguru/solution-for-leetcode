/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
function oddEvenList(head) {
  let node = head

  let oddTail = null // 奇数尾结点
  let evenHead = null // 偶数头结点
  let evenTail = null // 偶数尾结点

  let flag = true // true:奇数，false:偶数

  while (node) {
    if (flag) {
      if (!oddTail) {
        oddTail = node
        node = node.next
      } else {
        oddTail.next = node
        oddTail = node
        node = node.next
        oddTail.next = evenHead
      }
    } else if (!evenHead && !evenTail) {
      evenHead = node
      evenTail = node
      node = node.next
    } else {
      evenTail.next = node
      evenTail = node

      node = node.next
      evenTail.next = null
    }

    flag = !flag
  }

  if (evenHead === evenTail && evenHead && evenTail) {
    evenHead.next = null
    evenTail.next = null
  }

  return head
}

function oddEvenList(head) {
  if (!head || !head.next) {
    return head
  }

  let o = head // 奇数链表头
  const p = head.next // 偶数链表头
  let e = p // 偶数链表尾

  while (o.next && e.next) {
    o.next = e.next
    o = o.next

    e.next = o.next
    e = e.next
  }
  o.next = p
  return head
}
// @lc code=end
