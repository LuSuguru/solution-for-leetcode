/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const arr = path.split('/')
  const stack = []

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] || arr[i] === '.') {
      continue
    } else if (arr[i] === '..') {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }

  return '/' + stack.join('/')
}
// @lc code=end
