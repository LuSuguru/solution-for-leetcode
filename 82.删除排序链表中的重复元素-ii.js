/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
function deleteDuplicates(head) {
  const header = new ListNode(1000, head)

  let pre = header
  let node = header.next

  while (node?.next) {
    if (node.val === node.next.val) {
      while (node.val === node?.next?.val) {
        node = node.next
      }
      pre.next = node.next
      node = node.next
    } else {
      pre = node
      node = node.next
    }
  }

  return header.next
}
// @lc code=end
