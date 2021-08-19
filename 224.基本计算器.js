/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  let op = 1
  let ans = 0
  let num = 0
  const stack = [1]

  const calc = () => {
    ans += num * op
    num = 0
  }

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ' ':
        break
      case '+':
      case '-':
        calc()
        op = s[i] === '+' ? stack[stack.length - 1] : -stack[stack.length - 1]
        break
      case '(':
      case ')':
        calc()
        s[i] === '(' ? stack.push(op) : stack.pop(op)
        break
      default:
        num = num * 10 + (+s[i])
        break
    }
  }

  return ans + num * op
}
// @lc code=end
