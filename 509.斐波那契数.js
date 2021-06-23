/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  let first = 0
  let second = 1

  let result = 0
  for (let i = 2; i < n + 1; i++) {
    result = first + second
    first = second
    second = result
  }
  return result
}
// @lc code=end
