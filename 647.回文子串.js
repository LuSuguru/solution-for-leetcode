/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  const { length } = s
  if (length === 1) {
    return 1
  }

  // 动态规划 ，i-j 是否为回文子串
  const dp = new Array(length).fill(0).map(() => new Array(length).fill(0))

  let result = 0

  for (let j = 0; j < length; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true
        result++
      }
    }
  }

  return result
}

function countSubstrings(s) {
  const { length } = s
  let result = 0
  // 中心扩散左边点为 i/2
  // 中心扩散右点为 i/2+ i % 2

  for (let i = 0; i < 2 * length - 1; i++) {
    let left = i >> 1
    let right = left + i % 2

    while (left >= 0 && right < length && s[left] === s[right]) {
      left--
      right++
      result++
    }
  }

  return result
}
// @lc code=end
