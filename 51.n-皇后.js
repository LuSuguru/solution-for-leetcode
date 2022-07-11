/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
  const result = []

  const backtracking = (j, tmp = []) => {
    if (j === n) {
      result.push(tmp.reduce((pre, [, y]) => {
        pre.push('.'.repeat(y) + 'Q' + '.'.repeat(n - y - 1))
        return pre
      }, []))
      return
    }

    for (let i = 0; i < n; i++) {
      const notSet = tmp.some(([y, x]) => i === x || (i + j === x + y) || (i - j === x - y))

      if (!notSet) {
        tmp.push([j, i])

        backtracking(j + 1, tmp)

        tmp.pop([j, i])
      }
    }
  }

  backtracking(0)

  return result
}
// @lc code=end
