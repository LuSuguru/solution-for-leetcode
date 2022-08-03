/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let carry = 0
  const header = new ListNode()
  let node = header

  while (l1 || l2 || carry) {
    let val = (l1?.val || 0) + (l2?.val || 0) + carry

    carry = Math.floor(val / 10)

    node.next = new ListNode(val %= 10)
    node = node.next

    l1 = l1?.next
    l2 = l2?.next
  }

  return header.next
}
