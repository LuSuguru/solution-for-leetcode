/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
function convertToTitle(columnNumber) {
  let result = ''
  const startCharCode = 'A'.charCodeAt() - 1

  while (columnNumber > 26) {
    result = String.fromCharCode(startCharCode + (columnNumber % 26 || 26)) + result
    columnNumber = Math.floor(columnNumber / 26) - (columnNumber % 26 ? 0 : 1)
  }

  result = String.fromCharCode(startCharCode + columnNumber) + result

  return result
// }

function convertToTitle(columnNumber) {
  let result = ''
  const startCharCode = 'A'.charCodeAt()

  while (columnNumber-- > 0) {
    result = String.fromCharCode(startCharCode + columnNumber % 26) + result
    columnNumber = Math.floor(columnNumber / 26)
  }

  return result
}
// @lc code=end
