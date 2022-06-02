/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  let maxWord = Number.MIN_SAFE_INTEGER

  wordDict.forEach(item => {
    maxWord = Math.max(maxWord, item.length)
  })

  const wordDictSet = new Set(wordDict)

  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= s.length; i++) {
    for (let j = Math.max(i - maxWord, 0); j < i; j++) {
      if (wordDictSet.has(s.slice(j, i))) {
        dp[i] = dp[j]
        if (dp[i]) {
          break
        }
      }
    }
  }

  return dp[s.length]
}
// @lc code=end
