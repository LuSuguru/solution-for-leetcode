/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const getcurrentPalindromeLength = (s, left, right) => {
    while ((left >= 0 && right < s.length) && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }

  let start = 0
  let end = 0

  for (let i = 0; i < s.length; i++) {
    const len1 = getcurrentPalindromeLength(s, i, i)
    const len2 = getcurrentPalindromeLength(s, i, i + 1)

    const len = Math.max(len1, len2)

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor((len) / 2)
    }
  }

  return s.substring(start, end + 1)
}
// @lc code=end
