/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  // 去掉无用的前导空格
  [, s] = s.match(/^\s*([\S|\s]*)/)

  // 判断正负号
  let isPositive = true
  if (/^[\-|\+]/.test(s)) {
    const symbol = s[0]
    s = s.substring(1)
    if (symbol === '-') {
      isPositive = false
    }
  }

  // 获取数字，拼接成数字字符串
  let numStr = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (/\d/.test(char)) {
      numStr += char
    } else {
      break
    }
  }

  // 如果没有数字字符串，则返回0
  if (!numStr) {
    return 0
  }

  // 将数字字符串转化为数字，加上正负号
  if (!isPositive) {
    numStr = `-${numStr}`
  }
  const num = +numStr

  // 判断边界
  const MIN_NUM = -(2 ** 31)
  const MAX_NUM = 2 ** 31 - 1

  return Math.min(Math.max(num, MIN_NUM), MAX_NUM)
}
// @lc code=end
