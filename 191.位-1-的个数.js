/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let res = 0
  while (n) {
    n &= n - 1
    res++
  }

  return res
}

function hammingWeight(n) {
  let res = 0

  for (let i = 1; i <= 32; i++) {
    res += n & 1
    n >>= 1
  }

  return res
}
// @lc code=end
