/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  const result = []
  let part = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      part += s[i]
    } else {
      result.unshift(part)
      part = ''
    }
  }

  if (part) {
    result.unshift(part)
  }

  return result.join(' ')
}
// @lc code=end
