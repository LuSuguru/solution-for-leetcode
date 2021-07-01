/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  if (a.length < b.length) {
    const mid = a
    a = b
    b = mid
  }

  let carry = 0
  let result = ''
  for (let i = 0; i < a.length; i++) {
    const num1 = +a[a.length - 1 - i] || 0
    const num2 = +b[b.length - 1 - i] || 0

    result = `${(num1 + num2 + carry) % 2}${result}`
    carry = Math.floor((num1 + num2 + carry) / 2)
  }

  if (carry) {
    return `${carry}${result}`
  }
  return result
}
// @lc code=end
