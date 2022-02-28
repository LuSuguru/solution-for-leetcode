/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let result = 0

  let bit = 0

  while (n > 0) {
    if (n % 2 === 1) {
      result += 2 ** (31 - bit)
    }

    n = Math.floor(n / 2)
    bit++
  }

  return result
}
// @lc code=end
