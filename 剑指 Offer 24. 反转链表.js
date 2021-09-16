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
function reverseList(head) {
  let last = null

  while (head) {
    const mid = head.next

    head.next = last
    last = head
    head = mid
  }

  return last
}

function reverseList(head) {
  if (!head || !head.next) {
    return head
  }

  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null

  return newHead
}
