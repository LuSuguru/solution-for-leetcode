/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
function KthLargest(k, nums) {
  this.k = k
  this.heap = new Heap()
  for (let i = 0; i < nums.length; i++) {
    this.heap.insert(nums[i])
  }

  while (this.heap.size() > k) {
    this.heap.deleteMin()
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const { k, heap } = this

  if (heap.size() < k) {
    this.heap.insert(val)
  } else if (heap.peek() < val) {
    this.heap.deleteMin()
    this.heap.insert(val)
  }

  return this.heap.peek()
}

class Heap {
  constructor() {
    this.heap = [Number.MIN_SAFE_INTEGER]
  }

  insert(node) {
    const { heap } = this

    if (heap.length === 1) {
      heap.push(node)
      return
    }

    let i = heap.length
    while (heap[i >> 1] > node) {
      heap[i] = heap[i >> 1]
      i >>= 1
    }
    heap[i] = node
  }

  peek() {
    return this.heap[1]
  }

  size() {
    return this.heap.length - 1
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
      if (child !== heap.length && heap[child + 1] < heap[child]) {
        child++
      }

      if (last > heap[child]) {
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

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
