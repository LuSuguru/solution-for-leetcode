/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
function lexicalOrder(n) {
  const result = []

  let cur = 1

  for (let i = 0; i < n; i++) {
    result[i] = cur

    if (cur * 10 <= n) {
      cur *= 10
    } else {
      if (cur >= n) cur = parseInt(cur / 10, 10)
      cur++

      while (cur % 10 === 0) {
        cur = parseInt(cur / 10, 10)
      }
    }
  }
  return result
}
// @lc code=end
