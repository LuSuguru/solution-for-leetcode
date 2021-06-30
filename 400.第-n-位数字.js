/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function findNthDigit(n) {
  let digit = 1
  let start = 1
  let indexCount = 9 * start * digit
  while (n > indexCount) {
    n -= indexCount

    digit++
    start *= 10
    indexCount = 9 * start * digit
  }

  // 找出位数属于哪个数字
  const num = start + (n - 1) / digit
  // 当前数的第几位
  const index = (n - 1) % digit

  return ('' + num)[index]
}
// @lc code=end
