/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const arr = new Array(n)

  let count = 0
  for (let i = 2; i < n; i++) {
    if (!arr[i]) {
      count++

      for (let j = i * i; j < n; j += i) {
        arr[j] = 1
      }
    }
  }

  return count
}
// @lc code=end
