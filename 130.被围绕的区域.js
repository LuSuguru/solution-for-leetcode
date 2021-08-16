/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// dfs
function solve(board) {
  const m = board.length
  const n = board[0].length

  const dfs = (i, j) => {
    // 是否到边界
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1 || board[i][j] !== 'O') {
      return
    }

    board[i][j] = '-'

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  for (let i = 0; i < m; i++) {
    dfs(i, 0)
    dfs(i, n - 1)
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j)
    dfs(m - 1, j)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      switch (board[i][j]) {
        case '-':
          board[i][j] = 'O'
          break
        case 'O':
          board[i][j] = 'X'
          break
      }
    }
  }
}

// bfs
function solve(board) {
  const m = board.length
  const n = board[0].length

  const queue = []

  const changePos = (i, j) => {
    queue.push([i, j])
    board[i][j] = '-'
  }
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      changePos(i, 0)
    }

    if (board[i][n - 1] === 'O') {
      changePos(i, n - 1)
    }
  }

  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      changePos(0, j)
    }

    if (board[m - 1][j] === 'O') {
      changePos(m - 1, j)
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift()

    if (i - 1 >= 0 && board[i - 1][j] === 'O') {
      changePos(i - 1, j)
    }

    if (i + 1 < m && board[i + 1][j] === 'O') {
      changePos(i + 1, j)
    }

    if (j - 1 >= 0 && board[i][j - 1] === 'O') {
      changePos(i, j - 1)
    }

    if (j + 1 < n && board[i][j + 1] === 'O') {
      changePos(i, j + 1)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      switch (board[i][j]) {
        case '-':
          board[i][j] = 'O'
          break
        case 'O':
          board[i][j] = 'X'
          break
      }
    }
  }
}
// @lc code=end
