/*
 * @lc app=leetcode.cn id=967 lang=javascript
 *
 * [967] 连续差相同的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

// dfs
function numsSameConsecDiff(n, k) {
  const result = []
  const dfs = (bit, target, num) => {
    if (Math.abs(target % 10 - num) !== k) {
      return
    }

    if (bit === 0) {
      result.push(target * 10 + num)
      return
    }

    for (let i = 0; i <= 9; i++) {
      dfs(bit - 1, target * 10 + num, i)
    }
  }

  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      dfs(n - 2, i, j)
    }
  }
  return result
}

// bfs
function numsSameConsecDiff(n, k) {
  const result = []
  const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  while (--n > 0 && queue.length) {
    let { length } = queue

    while (length--) {
      const prev = queue.shift()
      const last = prev % 10
      if (last - k >= 0) {
        queue.push(prev * 10 + last - k)
      }

      // 去重
      if (k === 0) {
        continue
      }

      if (last + k <= 9) {
        queue.push(prev * 10 + last + k)
      }
    }
  }
  return queue
}
// @lc code=end
