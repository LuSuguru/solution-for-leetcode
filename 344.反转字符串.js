/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  let i = 0
  let j = s.length - 1

  while (i <= j) {
    const mid = s[i]
    s[i] = s[j]
    s[j] = mid

    i++
    j--
  }

  return s
}
// @lc code=end
