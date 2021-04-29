/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) {
    return s
  }
  // 最大偏移量
  const max = (numRows - 1) * 2

  let returnStr = ''
  for (let i = 0; i < numRows; i++) {
    const distance = i * 2

    for (let j = i, offset = distance; j < s.length; j += offset) {
      returnStr += s[j]

      if (distance === 0 || distance === max) {
        offset = max
      } else {
        offset = max - offset
      }
    }
  }
  return returnStr
}
// @lc code=end
