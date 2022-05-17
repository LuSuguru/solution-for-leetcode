/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const memo = new Array(26)

  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt() - 'a'.charCodeAt()

    if (memo[code]) {
      memo[code].push(i)
    } else {
      memo[code] = [i]
    }
  }

  let res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < memo.length; i++) {
    if (memo[i]?.length === 1) {
      res = Math.min(memo[i][0], res)
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? -1 : res
}
// @lc code=end
