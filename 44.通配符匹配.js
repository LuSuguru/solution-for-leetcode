/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 动态规划
function isMatch(s, p) {
  const m = s.length
  const n = p.length

  // 二维状态数组，m 代表前 m 个字符串，n 代表前 n 个 配置字符
  const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false))
  // dp[0][0]=True，即当字符串 s 和模式 p 均为空时，匹配成功
  // dp[i][0]=False，即空模式无法匹配非空字符串
  // dp[0][j] 需要分情况讨论：因为星号才能匹配空字符串，所以只有当模式 p 的前 j 个字符均为星号时，dp[0][j] 才为真
  dp[0][0] = true

  for (let i = 1; i <= n; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = true
    } else {
      break
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') { // * 情况下
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
      } else if (p[j - 1] == '?' || s[i - 1] == p[j - 1]) { // ？或者普通字符
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }
  return dp[m][n]
}

// 贪心
function isMatch(s, p) {
  const charMatch = (u, v) => u === v || v === '?'

  let sRight = s.length
  let pRight = p.length

  // 如果结尾不是*，需要找到结尾第一个*
  while (sRight > 0 && pRight > 0 && p[pRight - 1] !== '*') {
    if (charMatch(s[sRight - 1], p[pRight - 1])) {
      --sRight
      --pRight
    } else {
      return false
    }
  }

  if (pRight === 0) {
    return sRight === 0
  }

  let sIndex = 0
  let pIndex = 0
  let sRecord = -1
  let pRecord = -1

  while (sIndex < sRight && pIndex < pRight) {
    if (p[pIndex] === '*') {
      ++pIndex
      sRecord = sIndex
      pRecord = pIndex
    } else if (charMatch(s[sIndex], p[pIndex])) {
      sIndex++
      pIndex++
    } else if (sRecord !== -1 && sRecord + 1 < sRight) {
      ++sRecord
      sIndex = sRecord
      pIndex = pRecord
    } else {
      return false
    }
  }

  for (let i = pIndex; i < pRight; ++i) {
    if (p.charAt(i) != '*') {
      return false
    }
  }
  return true
}
// @lc code=end
