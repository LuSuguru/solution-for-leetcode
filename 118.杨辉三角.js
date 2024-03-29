/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 我的憨憨解法
function generate(numRows) {
  const result = []
  let pre = []

  for (let i = 0; i < numRows; i++) {
    const now = [1]
    for (let j = 0; j < i; j++) {
      now.push((pre[j] || 0) + (pre[j + 1] || 0))
    }
    result.push(now)
    pre = now
  }
  return result
}

function generate(numRows) {
  const result = []

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)

    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j]
    }

    result.push(row)
  }
  return result
}
// @lc code=end
