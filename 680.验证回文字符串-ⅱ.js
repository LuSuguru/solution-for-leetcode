/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
  // isRoot 是否是根循环
  const isValid = (i, j, isRoot) => {
    if ((j - i + 1 === 0) || (j - i + 1 === 1)) return true

    while (i < j) {
      if (s[i] === s[j]) {
        i++
        j--
      } else if (isRoot) {
        return isValid(i + 1, j) || isValid(i, j - 1)
      } else {
        return false
      }
    }

    return true
  }

  return isValid(0, s.length - 1, true)
}
// @lc code=end
