/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */

// 1  2  3  4
// 12 13 14 5
// 16 0  15 6
// 10 9  8  7
function generateMatrix(n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))

  let num = 0
  let start = 0
  let end = n - 1

  while (num !== n * n) {
    for (let i = start; i <= end; i++) {
      num++
      matrix[start][i] = num
    }

    for (let i = start + 1; i <= end; i++) {
      num++
      matrix[i][end] = num
    }

    for (let i = end - 1; i >= start; i--) {
      num++
      matrix[end][i] = num
    }

    for (let i = end - 1; i >= start + 1; i--) {
      num++
      matrix[i][start] = num
    }

    start++
    end--
  }
  return matrix
}
// @lc code=end
