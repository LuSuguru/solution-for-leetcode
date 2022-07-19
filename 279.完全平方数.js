/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const dp = new Array(n + 1)

  const dfs = (n) => {
    if (dp[n]) {
      return dp[n]
    }

    const num = Math.sqrt(n)

    if (Number.isInteger(num)) {
      dp[n] = 1
      return 1
    }

    let result = Number.MAX_SAFE_INTEGER
    for (let i = Math.floor(num); i > 0; i--) {
      result = Math.min(dfs(n - i ** 2) + 1, result)
    }

    dp[n] = result
    return result
  }

  return dfs(n)
}

function numSquares(n) {
  const f = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    let minn = Number.MAX_VALUE
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, f[i - j * j])
    }
    f[i] = minn + 1
  }
  return f[n]
}

// @lc code=end
