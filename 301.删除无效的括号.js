/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function removeInvalidParentheses(s) {
  let left = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++
    }

    if (s[i] === ')') {
      if (left > 0) {
        left--
      } else {
        right++
      }
    }
  }

  const l = s.length - left - right

  const set = new Set()

  const dfs = (text, i, curLeft, left, right) => {
    if (left === 0 && right === 0 && curLeft === 0 && text.length === l) {
      set.add(text)
    }

    if (i >= s.length) {
      return
    }

    if (s[i] === '(') {
      if (left > 0) {
        dfs(text, i + 1, curLeft, left - 1, right)
      }

      dfs(text + '(', i + 1, curLeft + 1, left, right)
    } else if (s[i] === ')') {
      if (right > 0) {
        dfs(text, i + 1, curLeft, left, right - 1)
      }

      if (curLeft > 0) {
        dfs(text + ')', i + 1, curLeft - 1, left, right)
      }
    } else {
      dfs(text + s[i], i + 1, curLeft, left, right)
    }
  }

  dfs('', 0, 0, left, right)
  return [...set]
}
// @lc code=end
