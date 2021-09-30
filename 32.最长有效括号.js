/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 计数法
function longestValidParentheses(s) {
  const { length } = s

  let result = 0

  let left = 0
  let right = 0

  for (let i = 0; i < length; i++) {
    if (s[i] === '(') {
      left++
    } else {
      right++
    }

    if (left === right) {
      result = Math.max(result, right * 2)
    } else if (right > left) {
      left = 0
      right = 0
    }
  }

  left = 0
  right = 0
  for (let i = length - 1; i > -1; i--) {
    if (s[i] === '(') {
      left++
    } else {
      right++
    }

    if (left === right) {
      result = Math.max(result, left * 2)
    } else if (left > right) {
      left = 0
      right = 0
    }
  }

  return result
}

// 动态规划
function longestValidParentheses(s) {
  const { length } = s

  // 以下标 i 字符结尾的最长有效括号的长度
  const dp = new Array(length).fill(0)

  let result = 0

  for (let i = 1; i < length; i++) {
    // 左括号为 0
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = i >= 2 ? dp[i - 2] + 2 : 2
      } if (s[i - 1] === ')') {
        const j = i - dp[i - 1] - 1

        if (j >= 0 && s[j] === '(') {
          if (j - 1 >= 0) {
            dp[i] = dp[j - 1] + dp[i - 1] + 2
          } else {
            dp[i] = dp[i - 1] + 2
          }
        }
      }
    }

    result = Math.max(result, dp[i])
  }

  return result
}

// 栈
function longestValidParentheses(s) {
  const { length } = s
  let result = 0

  // 最后一个没有被匹配的括号的下标，初始时放入 -1 作为没有被匹配的下标
  const stack = [-1]

  for (let i = 0; i < length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()

      if (stack.length === 0) {
        stack.push(i)
      } else {
        result = Math.max(result, i - stack[stack.length - 1])
      }
    }
  }
  return result
}
// @lc code=end
