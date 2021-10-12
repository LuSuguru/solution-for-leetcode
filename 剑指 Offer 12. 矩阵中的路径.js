/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function exist(board, word) {
  const n = board.length
  const m = board[0].length

  const dfs = (i, j, k) => {
    if (i < 0 || i > n - 1 || j < 0 || j > m - 1 || k > word.length - 1 || board[i][j] !== word[k]) {
      return false
    }

    if (k === word.length - 1) {
      return true
    }

    board[i][j] = ''
    const result = dfs(i + 1, j, k + 1)
      || dfs(i - 1, j, k + 1)
      || dfs(i, j - 1, k + 1)
      || dfs(i, j + 1, k + 1)
    board[i][j] = word[k]

    return result
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
