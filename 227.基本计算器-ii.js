/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  const numStack = [] // 数字栈
  let sign = '+'
  let num = 0
  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(+s[i]) && s[i] !== ' ') {
      num = num * 10 + (+s[i])
    }

    if ((Number.isNaN(+s[i]) && s[i] !== ' ') || i === s.length - 1) {
      switch (sign) {
        case '+':
          numStack.push(num)
          break
        case '-':
          numStack.push(-num)
          break
        case '*':
          numStack.push(numStack.pop() * num)
          break
        case '/':
          numStack.push(parseInt(numStack.pop() / num, 10))
          break
      }
      sign = s[i]
      num = 0
    }
  }

  while (numStack.length) {
    result += numStack.pop()
  }

  return result
}
// @lc code=end
