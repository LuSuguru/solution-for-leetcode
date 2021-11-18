/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  const wordDictMap = {}
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < wordDict.length; i++) {
    wordDictMap[wordDict[i]] = 1

    min = Math.min(min, wordDict[i].length)
    max = Math.max(max, wordDict[i].length)
  }

  const result = []
  const dfs = (s, tmp) => {
    if (s === '') {
      result.push(tmp)
      return
    }

    if (s.length < min) {
      return
    }

    for (let i = min; i <= Math.min(s.length, max); i++) {
      const word = s.substr(0, i)

      if (wordDictMap[word]) {
        dfs(s.substr(i), tmp ? `${tmp} ${word}` : word)
      }
    }
  }

  dfs(s)

  return result
}

// @lc code=end
