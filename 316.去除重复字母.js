/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicateLetters(s) {
  const countMap = {} // 记录每个字符出现的个数

  for (let i = 0; i < s.length; i++) {
    if (countMap[s[i]]) {
      countMap[s[i]]++
    } else {
      countMap[s[i]] = 1
    }
  }

  const visited = {} // 在栈中的元素 Map
  const stack = [] // 单调栈

  for (let i = 0; i < s.length; i++) {
    if (!visited[s[i]]) {
      while (
        stack.length > 0 // 栈有元素
        && stack[stack.length - 1].charCodeAt() > s[i].charCodeAt() // 维护单调性
        && countMap[stack[stack.length - 1]] > 0 // 后续还有该元素
      ) {
        visited[stack[stack.length - 1]] = false
        stack.pop()
      }

      visited[s[i]] = true
      stack.push(s[i])
    }
    countMap[s[i]]--
  }
  return stack.join('')
}
// @lc code=end
