/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfFour(n) {
  if (n === 1) return true
  if (n < 4) return false

  let i = 1
  while (i < n) {
    i *= 4
    if (i === n) {
      return true
    }
  }
  return false
}

function isPowerOfFour(n) {
  return n > 0
    && (n & (n - 1)) == 0 // 是否是2的幂
    && n % 3 == 1 // 4的幂除以3的余数一定为1
}
// @lc code=end
