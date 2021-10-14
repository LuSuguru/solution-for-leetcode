/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = []

  for (let i = 0; i < tokens.length; i++) {
    if (['+', '-', '*', '/'].includes(tokens[i])) {
      const num2 = stack.pop()
      const num1 = stack.pop()

      switch (tokens[i]) {
        case '+':
          stack.push(num1 + num2)
          break
        case '-':
          stack.push(num1 - num2)
          break
        case '*':
          stack.push(num1 * num2)
          break
        case '/':
          stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2))
          break
      }
    } else {
      stack.push(+tokens[i])
    }
  }

  return stack.pop()
}
// @lc code=end
