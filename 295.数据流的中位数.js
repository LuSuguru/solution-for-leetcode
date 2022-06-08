/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

const MedianFinder = function () {
  this.minHeap = new Heap('min')
  this.maxHeap = new Heap('max')
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const { minHeap, maxHeap } = this

  maxHeap.insert(num)
  minHeap.insert(maxHeap.deleteMinOrMax())

  if (minHeap.size() > maxHeap.size()) {
    maxHeap.insert(minHeap.deleteMinOrMax())
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const { minHeap, maxHeap } = this
  if (minHeap.size() == maxHeap.size()) {
    return (minHeap.peek() + maxHeap.peek()) / 2.0
  }
  return maxHeap.peek()
}

class Heap {
  constructor(type) {
    this.type = type
    this.heap = [type === 'min' ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER]
  }

  insert(val) {
    const { heap, type } = this

    if (heap.length === 1) {
      heap.push(val)
      return
    }

    let i = heap.length

    if (type === 'min') {
      while (heap[i >> 1] > val) {
        heap[i] = heap[i >> 1]
        i >>= 1
      }
    } else {
      while (heap[i >> 1] < val) {
        heap[i] = heap[i >> 1]
        i >>= 1
      }
    }
    heap[i] = val
  }

  isEmpty() {
    return this.heap.length === 1
  }

  size() {
    return this.heap.length
  }

  peek() {
    return this.heap[1]
  }

  deleteMinOrMax() {
    const { heap, type } = this
    const min = heap[1]
    const last = heap[heap.length - 1]

    let i = 1
    let child
    for (i = 1; i * 2 < heap.length; i = child) {
      child = i * 2
      if (child !== heap.length) {
        if ((type === 'min' && heap[child + 1] < heap[child]) || (type === 'max' && heap[child + 1] > heap[child])) {
          child++
        }
      }

      if ((type === 'min' && last > heap[child]) || (type === 'max' && last < heap[child])) {
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
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
