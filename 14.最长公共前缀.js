/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs == null || strs.length == 0) {
    return ''
  }

  const { length } = strs[0]
  for (let i = 0; i < length; i++) {
    const c = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== c) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}
// @lc code=end
