/*
 * @lc app=leetcode.cn id=1171 lang=javascript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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
function removeZeroSumSublists(head) {
  const preSum = []

  let node = head
  while (node) {
    const last = preSum[preSum.length - 1] || 0
    let j

    for (j = preSum.length - 2; j >= -1; j--) {
      if (last - (preSum[j] || 0) + node.val === 0) {
        preSum.splice(j + 1)
        break
      }
    }

    if (j === -2 && node.val !== 0) {
      preSum.push((preSum[preSum.length - 1] || 0) + node.val)
    }
    node = node.next
  }

  head = null
  node = null

  for (let i = 0; i < preSum.length; i++) {
    const val = preSum[i] - (preSum[i - 1] || 0)

    if (i === 0) {
      head = new ListNode(val, null)
      node = head
    } else {
      node.next = new ListNode(val, null)
      node = node.next
    }
  }

  return head
}

function removeZeroSumSublists(head) {
  const map = new Map()
  const hair = new ListNode(0, head)

  let node = hair
  let sum = 0
  for (let d = hair; d != null; d = d.next) {
    sum += d.val;
    map.set(sum, d);
  }

  // 第二遍遍历 若当前节点处sum在下一处出现了则表明两结点之间所有节点和为0 直接删除区间所有节点
  sum = 0;
  for (let d = hair; d != null; d = d.next) {
    sum += d.val;
    d.next = map.get(sum).next;
  }

  return hair.next
}
// @lc code=end
