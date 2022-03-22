/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  // 记录横向
  const row = new Array(9).fill(false).map(() => new Array(9).fill(false))
  // 记录纵向
  const col = new Array(9).fill(false).map(() => new Array(9).fill(false))
  // 记录每个9宫格
  const block = new Array(9).fill(false).map(() => new Array(9).fill(false))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const num = +board[i][j] - 1

        if (row[i][num] || col[j][num] || block[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num]) {
          return false
        }

        row[i][num] = true
        col[j][num] = true
        block[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true
      }
    }
  }
  return true
}
// @lc code=end
