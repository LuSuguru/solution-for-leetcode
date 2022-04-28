/* eslint-disable no-bitwise */
/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
function swimInWater(grid) {
  const { length } = grid
  if (length == 1) {
    return 0
  }

  const heap = new Heap()
  heap.insert({ val: grid[0][0], x: 0, y: 0 })
  let t = grid[0][0]
  // 访问过的节点置为 -1
  grid[0][0] = -1

  // 方向
  const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  while (true) {
    while (heap.getMin().val <= t) {
      const { x, y } = heap.deleteMin()

      if ((x === length - 1) && (y === length - 1)) {
        return t
      }

      for (let i = 0; i < direction.length; i++) {
        const newX = x + direction[i][0]
        const newY = y + direction[i][1]

        if (grid?.[newX]?.[newY] >= 0) {
          heap.insert({ val: grid[newX][newY], x: newX, y: newY })
          grid[newX][newY] = -1
        }
      }
    }
    t++
  }
}

// 堆
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

  getMin() {
    return this.heap[1]
  }
}
// @lc code=end
