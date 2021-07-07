/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
  // 解码
  const decodeStr = (char, num) => {
    let bracket = ''
    for (let j = 0; j < num; j++) {
      bracket += char
    }
    return bracket
  }

  const charStack = []
  const numStack = []

  let result = ''
  let numStr = ''

  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) { // 数字
      numStr += s[i]
    } else if (s[i] === '[') { // 进栈
      numStack.push(+numStr)
      charStack.push(result)

      numStr = ''
      result = ''
    } else if (s[i] === ']') { // 出栈
      // 解码字符
      const bracket = decodeStr(result, numStack.pop())
      result = charStack.pop() + bracket
    } else {
      result += s[i]
    }
  }

  return result
}
// @lc code=end
