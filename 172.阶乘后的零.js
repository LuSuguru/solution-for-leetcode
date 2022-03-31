/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
  let result = 0

  const getZeros = (number) => {
    number = Math.floor(number / 5)
    result += number

    if (number >= 5) {
      getZeros(number)
    }
  }

  getZeros(n)
  return result
}
// @lc code=end
