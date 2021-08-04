/*
 * @lc app=leetcode.cn id=984 lang=javascript
 *
 * [984] 不含 AAA 或 BBB 的字符串
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
function strWithout3a3b(a, b) {
  let result = ''
  while (a > 0 && b > 0) {
    if (a >= b) {
      result += (a / b >= 2) ? 'aa' : 'a'
      result += 'b'
      a -= (a / b >= 2) ? 2 : 1
      b--
    } else {
      result += 'a'
      result += (b / a >= 2) ? 'bb' : 'b'
      b -= (b / a >= 2) ? 2 : 1
      a--
    }
  }

  result = result.padEnd(result.length + a, 'a')
  result = result.padStart(result.length + b, 'b')

  return result
}
// @lc code=end
