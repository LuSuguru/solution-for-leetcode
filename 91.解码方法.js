/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  const dp = new Array(s.length + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i < s.length + 1; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }

    if (i > 1 && s[i - 2] !== '0' && (s[i - 2] * 10 + +s[i - 1]) <= 26) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[s.length]
}
// @lc code=end
