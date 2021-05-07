/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 阶梯数 f(x) = f(x - 1) + f(x - 2)
 * */
function climbStairs(n) {
  if (n <= 1) {
    return 1
  }

  // n-1
  let first = 1
  // n-2
  let second = 1
  // 结果
  let result

  for (let i = 2; i <= n; i++) {
    result = first + second
    first = second
    second = result
  }

  return result
}
// @lc code=end
