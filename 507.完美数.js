/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num) {
  if (num === 1) return false
  let i = 1
  let j = num

  let sum = 1
  while (i < j) {
    if (num % i === 0) {
      j = num / i

      if (j < num) {
        sum += i
        sum += j
      }
    }
    i++
  }

  return sum === num
}
// @lc code=end
