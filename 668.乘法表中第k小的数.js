/*
 * @lc app=leetcode.cn id=668 lang=javascript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function findKthNumber(m, n, k) {
  let left = 1
  let right = m * n

  while (left < right) {
    const x = left + Math.floor((right - left) / 2)
    let count = Math.floor(x / n) * n

    for (let i = Math.floor(x / n) + 1; i <= m; ++i) {
      count += Math.floor(x / i)
    }
    if (count >= k) {
      right = x
    } else {
      left = x + 1
    }
  }
  return left
}
// @lc code=end
