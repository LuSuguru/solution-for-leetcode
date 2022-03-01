/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
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

        row[i][num] = true
        col[j][num] = true
        block[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = true
      }
    }
  }

  const dfs = (i = 0, j = 0) => {
    while (board[i][j] !== '.') {
      if (++j >= 9) {
        i++
        j = 0
      }

      if (i >= 9) {
        return true
      }
    }

    for (let num = 0; num < 9; num++) {
      const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

      if (!row[i][num] && !col[j][num] && !block[blockIndex][num]) {
        board[i][j] = (num + 1) + ''

        row[i][num] = true
        col[j][num] = true
        block[blockIndex][num] = true

        if (dfs(i, j)) {
          return true
        }
        // 回溯
        row[i][num] = false
        col[j][num] = false
        block[blockIndex][num] = false
        board[i][j] = '.'
      }
    }
    return false
  }

  dfs()
}
// @lc code=end
