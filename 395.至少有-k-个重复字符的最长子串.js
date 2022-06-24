/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function longestSubstring(s, k) {
  const { length } = s

  if (k == 1) return length
  if (length < k || length === 0) return 0

  const map = {}
  let i
  for (i = 0; i < length; i++) {
    if (map[s[i]]) {
      map[s[i]]++
    } else {
      map[s[i]] = 1
    }
  }

  for (i = 0; i < length; i++) {
    if (map[s[i]] < k) {
      return Math.max(
        longestSubstring(s.substring(0, i), k),
        longestSubstring(s.substring(i + 1), k)
      )
    }
  }
  return length
}
// @lc code=end
