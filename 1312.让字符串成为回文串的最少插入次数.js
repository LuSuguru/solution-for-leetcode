/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function minInsertions(s) {
  const { length } = s

  const dp = new Array(length + 1)
    .fill(0)
    .map(() => new Array(length + 1).fill(0))

  for (let i = 1; i < length + 1; i++) {
    for (let j = length; j >= 0; j--) {
      if (s[i - 1] === s[j - 1]) {
        dp[i][length + 1 - j] = dp[i - 1][length - j] + 1
      } else {
        dp[i][length + 1 - j] = Math.max(dp[i - 1][length + 1 - j], dp[i][length - j])
      }
    }
  }

  return length - dp[length][length]
}
// @lc code=end
