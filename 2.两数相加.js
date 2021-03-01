/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const createNewNode = () => ({
  val: 0,
  next: null
})

var addTwoNumbers = function (l1, l2) {
  // 合计的链表
  let plusNode = null

  // 当前链表的节点
  let currentL1 = l1
  let currentl2 = l2
  let currentPlus = plusNode

  // 进位
  let carry = 0

  while (currentL1 || currentl2 || carry) {
    const newPlusNode = createNewNode()

    const val1 = currentL1 ? currentL1.val : 0
    const val2 = currentl2 ? currentl2.val : 0

    const plusVal = val1 + val2 + carry

    newPlusNode.val = plusVal % 10
    carry = Math.floor(plusVal / 10)

    currentL1 = currentL1 ? currentL1.next : null
    currentl2 = currentl2 ? currentl2.next : null

    if (!currentPlus) {
      currentPlus = plusNode = newPlusNode
    } else {
      currentPlus.next = newPlusNode
      currentPlus = newPlusNode
    }
  }

  return plusNode
};
// @lc code=end

