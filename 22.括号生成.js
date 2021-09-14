/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  if (n === 1) {
    return ['()']
  }

  const result = []

  const dfs = (ans, left = 0, right = 0) => {
    if (left > n || right > n) return

    if (left === n && right === n) {
      result.push(ans)
      return
    }

    if (left >= right) {
      dfs(ans + '(', left + 1, right)
      dfs(ans + ')', left, right + 1)
    }
  }

  dfs('')
  return result
}
// @lc code=end
