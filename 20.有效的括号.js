/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const bracketMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])

  const brackstStack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if ([...bracketMap.keys()].includes(char)) {
      brackstStack.push(bracketMap.get(char))
    } else if (char !== brackstStack.pop()) {
      return false
    }
  }

  if (brackstStack.length === 0) {
    return true
  }
  return false
}

function isValid(s) {
  const reg = /{}|\(\)|\[\]/
  while (reg.test(s)) {
    s = s.replace(reg, '')
  }

  return s === ''
}
// @lc code=end
