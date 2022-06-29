/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

function longestPalindromeSubseq(s) {
  const { length } = s

  // dp[i][j] 代表 i-j 的回文子串最大长度
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))

  for (let i = length - 1; i >= 0; i--) {
    dp[i][i] = 1

    for (let j = i + 1; j < length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][length - 1]
}
// @lc code=end
