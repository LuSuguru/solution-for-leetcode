/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 * 我的解法
 */
function reverseKGroup(head, k) {
  // 用一个队列来存储每次的K个链表节点
  let queue = []

  let current = head
  // 记录上一次反转子链表后子链表的最后节点
  let last = null

  while (current) {
    queue.push(current)
    current = current.next

    // 从队列头取出元素，依次连接起来
    let partHead = current
    // 子链表的尾结点
    let partLast = null
    if (queue.length === k) {
      ([partLast] = queue)

      while (queue.length > 0) {
        const node = queue.shift()

        if (partHead) {
          node.next = partHead
        } else {
          node.next = null
        }
        partHead = node
      }

      // 将子链表的头节点拼到原链表上
      if (last) {
        last.next = partHead
      } else {
        head = partHead
      }

      last = partLast
    }
  }

  queue = []
  current = null

  return head
}

function reverseKGroup(head, k) {
  // 链表反转
  const myReverse = (head, tail) => {
    let prev = tail.next
    let p = head
    while (prev !== tail) {
      const nex = p.next
      p.next = prev
      prev = p
      p = nex
    }
    return [tail, head]
  }

  // 创造一个头结点，用来做最后的头定位，非常的巧妙
  const hair = {
    val: 0,
    next: null
  };

  hair.next = head;
  let pre = hair;

  while (head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }

    [head, tail] = myReverse(head, tail);

    pre.next = head;

    pre = tail;
    head = tail.next;
  }
  return hair.next;
}
// @lc code=end
