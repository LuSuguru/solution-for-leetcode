/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  if (needle === '') {
    return ''
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = i + 1
      let k = 1
      while (haystack[j] === needle[k] && k < needle.length) {
        j++
        k++
      }

      if (k === needle.length) {
        return i
      }
    }
  }
  return -1
}
// @lc code=end
