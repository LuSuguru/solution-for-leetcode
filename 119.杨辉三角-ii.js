/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

function getRow(rowIndex) {
  const result = new Array(rowIndex + 1).fill(0)
  result[0] = 1

  for (let i = 1; i <= rowIndex; i++) {
    result[i] = result[i - 1] * (rowIndex - i + 1) / i
  }

  return result
}
// @lc code=end
