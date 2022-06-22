/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  const m = s.length
  const n = p.length

  const matches = (i, j) => {
    if (i === 0) {
      return false
    }
    if (p[j - 1] === '.') {
      return true
    }
    return s[i - 1] === p[j - 1]
  }

  const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))
  dp[0][0] = true

  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]
        if (matches(i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]
        }
      } else if (matches(i, j)) {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }

  return dp[m][n]
}
// @lc code=end
