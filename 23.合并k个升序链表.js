/* eslint-disable no-bitwise */
/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 堆
function mergeKLists(lists) {
  const heap = new Heap()
  const head = {
    val: 0,
    next: null
  }
  let tail = head

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      heap.insert(lists[i])
    }
  }

  while (!heap.isEmpty()) {
    const node = heap.deleteMin()
    tail.next = node
    tail = tail.next

    if (node.next !== null) {
      heap.insert(node.next)
    }
  }

  return head.next
}

class Heap {
  constructor() {
    this.heap = [{ val: Number.MIN_SAFE_INTEGER }]
  }

  insert(node) {
    const { heap } = this

    if (heap.length === 1) {
      heap.push(node)
      return
    }

    let i = heap.length
    while (heap[i >> 1].val > node.val) {
      heap[i] = heap[i >> 1]
      i >>= 1
    }
    heap[i] = node
  }

  isEmpty() {
    return this.heap.length === 1
  }

  deleteMin() {
    const { heap } = this
    const min = heap[1]
    const last = heap[heap.length - 1]

    let i = 1
    let child
    for (i = 1; i * 2 < heap.length; i = child) {
      child = i * 2
      if (child !== heap.length && heap[child + 1]?.val < heap[child]?.val) {
        child++
      }

      if (last.val > heap[child].val) {
        heap[i] = heap[child]
      } else {
        break
      }
    }
    heap[i] = last
    heap.pop()
    return min
  }
}

// 分治
function mergeKLists(lists) {
  function merge(l, r) {
    if (l > r) return null
    if (l === r) return lists[l]

    const mid = (l + r) >> 1
    return merge2List(merge(l, mid), merge(mid + 1, r))
  }

  function merge2List(l, r) {
    const res = {
      val: 0,
      next: null
    }

    let pre = res
    while (l && r) {
      if (l.val < r.val) {
        pre.next = l
        l = l.next
      } else {
        pre.next = r
        r = r.next
      }
      pre = pre.next
    }
    if (l) pre.next = l
    else pre.next = r
    return res.next
  }

  return merge(0, lists.length - 1)
}

// @lc code=end
