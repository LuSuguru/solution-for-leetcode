/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 走到尽头见不到你，于是走过你来时的路，等到相遇时才发现，你也走过我来时的路。
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null
  }

  let currentA = headA
  let currentB = headB

  while (currentA !== currentB) {
    currentA = currentA ? currentA.next : headB
    currentB = currentB ? currentB.next : headA
  }

  return currentA
}
// @lc code=end
