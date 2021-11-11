/*
 * @lc app=leetcode.cn id=1669 lang=javascript
 *
 * [1669] 合并两个链表
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeInBetween(list1, a, b, list2) {
  let node1 = list1
  let node2 = list1.next
  let n = 1

  // 接上头
  while (n !== a) {
    node1 = node2
    node2 = node2.next
    n++
  }

  node1.next = list2

  // 接上尾
  let tail = list2
  while (tail.next) {
    tail = tail.next
  }

  while (n !== b + 1) {
    node2 = node2.next
    n++
  }
  tail.next = node2

  return list1
}
// @lc code=end
