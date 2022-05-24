/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  const map = new Map()

  const newHead = new Node(undefined, null, null)

  let node = head
  let newNode = newHead

  while (node) {
    newNode.next = new Node(node.val, node.next, null)
    map.set(node, newNode.next)

    newNode = newNode.next
    node = node.next
  }

  node = head
  newNode = newHead.next

  while (node) {
    if (map.get(node?.random)) {
      newNode.random = map.get(node.random)
    }

    node = node.next
    newNode = newNode.next
  }

  return newHead.next
}

// 1 -> 1' -> 2 -> 2' -> 3 -> 3'
function copyRandomList(head) {
  if (head === null) {
    return null
  }

  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null)
    node.next = nodeNew
  }

  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next
    nodeNew.random = (node.random !== null) ? node.random.next : null
  }

  const headNew = head.next
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next
    node.next = node.next.next
    nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null
  }
  return headNew
}

// @lc code=end
