/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
function detectCycle(head) {
  if (!head) {
    return null
  }

  // 定义双指针
  let slow = head
  let fast = head

  while (fast) {
    slow = slow.next
    if (fast.next) {
      fast = fast.next.next
    } else {
      return null
    }

    // a 起点到环起始点的距离 b为环起点到相遇点的距离 c为相遇点到环起点的距离
    // 慢 s = a+b
    // 快 s = a+b+c
    // 2(a+b) = a+b+c+b
    //  a = c
    if (fast === slow) {
      slow = head
      while (fast !== slow) {
        slow = slow.next
        fast = fast.next
      }
      return fast
    }
  }

  return null
}
// @lc code=end
