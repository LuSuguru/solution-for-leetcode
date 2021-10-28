/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
  const starStack = []
  const leftStack = []

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        leftStack.push(i)
        break
      case '*':
        starStack.push(i)
        break
      case ')':
        if (leftStack.length) {
          leftStack.pop()
        } else if (starStack.length) {
          starStack.pop()
        } else {
          return false
        }
        break
    }
  }

  while (starStack.length && leftStack.length) {
    if (leftStack[leftStack.length - 1] > starStack[starStack.length - 1]) {
      return false
    }
    starStack.pop()
    leftStack.pop()
  }

  return !leftStack.length
}

function checkValidString(s) {
  let low = 0 // 未匹配的左括号的最小数量
  let high = 0 // 未匹配的右括号的最大数量

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        low++
        high++
        break
      case '*':
        low = Math.max(low - 1, 0)
        high++
        break
      case ')':
        low = Math.max(low - 1, 0)
        high--
        if (high < 0) {
          return false
        }
        break
    }
  }
  return low === 0
}
// @lc code=end
