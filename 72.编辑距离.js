/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const n = word1.length
  const m = word2.length

  if (n === 0 || m === 0) {
    return Math.max(n, m)
  }

  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))

  for (let i = 0; i <= n; i++) {
    dp[i][0] = i
  }

  for (let j = 0; j <= m; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
      }
    }
  }

  return dp[n][m]
}
// @lc code=end
