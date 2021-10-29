/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
//   ' r a b b b i t
// ' 1 1 1 1 1 1 1 1
// r 0 1 1 1 1 1 1 1
// a 0 0 1 1 1 1 1 1
// b 0 0 0 1 2 3 3 3
// b 0 0 0 0 1 3 3 3
// i 0 0 0 0 0 0 3 3
// t 0 0 0 0 0 0 0 3

//   a a b b
// a 1 2 2 2
// b 0 0 2 4

function numDistinct(s, t) {
  if (s === t) return 1
  if (t.length > s.length) return 0

  const dp = new Array(t.length + 1).fill(0)
    .map((item, index) => {
      if (index === 0) {
        return new Array(s.length + 1).fill(1)
      }
      return new Array(s.length + 1).fill(0)
    })

  for (let i = 1; i < t.length + 1; i++) {
    for (let j = 1; j < s.length + 1; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[t.length][s.length]
}
// @lc code=end
