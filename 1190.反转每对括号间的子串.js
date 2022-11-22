/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

function reverseParentheses(s) {
  const stack = []
  let part = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(part)
      part = ''
    } else if (s[i] === ')') {
      const last = stack.pop() || ''
      part = last + part.split('').reverse().join('')
    } else {
      part += s[i]
    }
  }

  return part
}
// @lc code=end
