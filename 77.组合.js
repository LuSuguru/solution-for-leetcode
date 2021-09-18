/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const result = []

  const backtracking = (i = 1, tmp = []) => {
    if (tmp.length >= k) {
      result.push(tmp)
      return
    }

    // 优化
    for (i; i <= n - (k - tmp.length) + 1; i++) {
      backtracking(i + 1, [...tmp, i])
    }
  }

  backtracking()

  return result
}

// @lc code=end
