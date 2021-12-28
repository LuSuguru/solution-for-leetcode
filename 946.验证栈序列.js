/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  const stack = []
  while ((pushed.length || stack.length) && popped.length) {
    if (pushed[0] !== popped[0]) {
      if (stack[stack.length - 1] === popped[0]) {
        stack.pop()
        popped.shift()
      } else {
        if (pushed.length === 0) {
          return false
        }
        stack.push(pushed.shift())
      }
    } else {
      pushed.shift()
      popped.shift()
    }
  }

  return true
}

function validateStackSequences(pushed, popped) {
  let j = 0
  const stack = []

  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])

    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }

  return !stack.length
}
// @lc code=end
