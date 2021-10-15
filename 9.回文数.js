/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 我的憨憨解法
function isPalindrome(x) {
  if (x < 0) return false

  if (x < 10) {
    return true
  }

  if (x % 10 === 0) return false

  let num = x
  let reverse = 0
  while (num >= 10) {
    reverse = reverse * 10 + num % 10
    num = Math.floor(num / 10)
  }

  reverse = reverse * 10 + num

  return x === reverse
}

// 官方题解
function isPalindrome(x) {
  if (x < 0) return false

  if (x < 10) {
    return true
  }

  if (x % 10 === 0) return false

  // 取一半
  let reverse = 0
  while (x > reverse) {
    reverse = reverse * 10 + x % 10
    x = Math.floor(x / 10)
  }

  return x === reverse || x === Math.floor(reverse / 10)
}
// @lc code=end
