/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function findKthNumber(n, k) {
  let cur = 1
  k--

  while (k > 0) {
    const steps = getStep(cur, n)
    if (steps <= k) {
      k -= steps
      cur++
    } else {
      cur *= 10
      k--
    }
  }
  return cur
}

function getStep(cur, n) {
  let steps = 0
  let first = cur
  let last = cur

  while (first <= n) {
    steps += Math.min(last, n) - first + 1
    first *= 10
    last = last * 10 + 9
  }
  return steps
}
// @lc code=end
