/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const { length } = s
  const reg = /[a-zA-Z0-9]/

  let i = 0
  let j = length - 1

  while (i < j) {
    while (i < j && !reg.test(s[i])) {
      i++
    }

    while (i < j && !reg.test(s[j])) {
      j--
    }

    if (reg.test(s[i]) && reg.test(s[j])) {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) return false

      i++
      j--
    }
  }

  return true
}
// @lc code=end
