/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
  const stack = []

  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  let result = ''
  for (const s of stack) {
    result += s
  }

  return result
}
// @lc code=end
