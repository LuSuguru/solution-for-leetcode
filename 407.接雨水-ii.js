/*
 * @lc app=leetcode.cn id=407 lang=javascript
 *
 * [407] 接雨水 II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
function trapRainWater(heightMap) {
  const m = heightMap.length
  const n = heightMap[0].length

  if (m < 3 || n < 3) return 0

  // 存储所有边界，用最小堆存储
  const heap = new Heap()
  // 访问过的节点
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))

  for (let i = 0; i < n; i++) {
    heap.insert({ x: 0, y: i, val: heightMap[0][i] })
    heap.insert({ x: m - 1, y: i, val: heightMap[m - 1][i] })

    visited[0][i] = true
    visited[m - 1][i] = true
  }

  for (let i = 1; i < m - 1; i++) {
    heap.insert({ x: i, y: 0, val: heightMap[i][0] })
    heap.insert({ x: i, y: n - 1, val: heightMap[i][n - 1] })

    visited[i][0] = true
    visited[i][n - 1] = true
  }

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let result = 0

  // 广度优先遍历最小边界点的邻边点
  while (!heap.isEmpty()) {
    const { x, y, val } = heap.deleteMin()

    for (let i = 0; i < dirs.length; i++) {
      const nx = x + dirs[i][0]
      const ny = y + dirs[i][1]

      if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue

      if (visited[nx][ny]) continue

      // 邻边点可以存水，记录值
      if (val > heightMap[nx][ny]) {
        result += val - heightMap[nx][ny]
      }

      // 更新邻边点的值，并作为新边界插入到堆中
      heap.insert({ x: nx, y: ny, val: Math.max(heightMap[nx][ny], val) })
      visited[nx][ny] = true
    }
  }

  return result
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
