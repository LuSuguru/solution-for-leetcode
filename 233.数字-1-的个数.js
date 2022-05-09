/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

function countDigitOne(n) {
  let mulk = 1

  let result = 0
  while (n >= mulk) {
    result += Math.floor(n / (mulk * 10)) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk)
    mulk *= 10
  }
  return result
}
// @lc code=end
