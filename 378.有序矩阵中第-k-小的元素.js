/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第 K 小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
  const { length } = matrix

  const check = (mid) => {
    let i = length - 1
    let j = 0
    let num = 0

    while (i >= 0 && j <= length - 1) {
      if (matrix[i][j] <= mid) {
        num += i + 1
        j++
      } else {
        i--
      }
    }
    return num
  }

  let left = matrix[0][0]
  let right = matrix[length - 1][length - 1]

  while (left < right) {
    const mid = (left + right) >> 1

    if (check(mid) >= k) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
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

function kthSmallest(matrix, k) {
  const { length } = matrix
  const heap = new Heap()

  for (let i = 0; i < length; i++) {
    heap.insert({ val: matrix[i][0], x: i, y: 0 })
  }

  let num = 0
  let result = 0
  while (num < k) {
    const { val, x, y } = heap.deleteMin()
    result = val

    if (y < length - 1) {
      heap.insert({ val: matrix[x][y + 1], x, y: y + 1 })
    }
    num++
  }

  return result
}
// @lc code=end
