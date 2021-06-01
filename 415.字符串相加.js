/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 我的解法
function addStrings(num1, num2) {
  const length1 = num1.length
  const length2 = num2.length
  const length = Math.max(length1, length2)

  let result = ''

  let carry = 0
  for (let i = 0; i < length; i++) {
    const char1 = +num1[length1 - 1 - i] || 0
    const char2 = +num2[length2 - 1 - i] || 0

    const newStr = (char1 + char2 + carry) % 10
    carry = Math.floor((char1 + char2 + carry) / 10)

    result = `${newStr}${result}`
  }

  if (carry) {
    result = `${carry}${result}`
  }

  return result
}

// 高效解法
function addStrings(num1, num2) {
  let carry = 0
  let i = num1.length - 1
  let j = num2.length - 1
  let result = ''

  while (i >= 0 || j >= 0 || carry !== 0) {
    if (i >= 0) carry += +num1[i--] || 0
    if (j >= 0) carry += +num2[j--] || 0
    result = `${carry % 10}${result}`
    carry = Math.floor(carry / 10)
  }
  return result
}
// @lc code=end
