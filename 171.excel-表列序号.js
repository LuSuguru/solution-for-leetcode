/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */

function titleToNumber(columnTitle) {
  const { length } = columnTitle

  let result = 0
  for (let i = 0; i < length; i++) {
    result += (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1) * 26 ** (length - 1 - i)
  }

  return result
}
// @lc code=end
