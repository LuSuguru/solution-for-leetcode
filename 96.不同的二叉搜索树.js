/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

function numTrees(n) {
  const dp = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const left = dp[j - 1] || 1
      const right = dp[i - j] || 1
      dp[i] += left * right
    }
  }

  return dp[n]
}
// @lc code=end
