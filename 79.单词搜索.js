/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const dfs = (i, j, k) => {
    if (k >= word.length) return true

    if (i < 0 || i >= board.length || j < 0 || j > board[0].length || board[i][j] !== word[k]) {
      return false
    }

    const cur = board[i][j]
    board[i][j] = 0
    const result = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1)
    board[i][j] = cur

    return result
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }

  return false
}

// @lc code=end
