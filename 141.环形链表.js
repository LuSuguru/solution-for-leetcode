/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 占用空间 O(N)
function hasCycle(head) {
  const map = new Map()
  let node = head
  while (node) {
    if (map.get(node)) {
      return true
    }
    map.set(node, true)
    node = node.next
  }
  return false
};

// 占用空间 O(1)
function hasCycle(head) {
  if (!head?.next) {
    return false
  }

  // 定义双指针
  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (!fast?.next) {
      return false
    }

    slow = slow.next
    fast = fast.next.next
  }
  return true
}
// @lc code=end
