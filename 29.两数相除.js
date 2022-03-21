/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 二分法
function divide(dividend, divisor) {
  const MIN = (-2) ** 31
  const MAX = 2 ** 31 - 1
  if (dividend === 0) return 0
  if (divisor === 1) return dividend

  if (divisor === -1) {
    if (dividend > MIN) return -dividend
    return MAX
  }

  let sign = 1
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    sign = -1
  }

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  const res = div(dividend, divisor)
  if (sign > 0) {
    return res > MAX ? MAX : res
  }

  return -res
}

const div = (a, b) => {
  if (a < b) return 0
  let count = 1
  let tb = b // 在后面的代码中不更新b
  while ((tb + tb) <= a) {
    count += count // 最小解翻倍
    tb += tb // 当前测试的值也翻倍
  }
  return count + div(a - tb, b)
}

// @lc code=end
