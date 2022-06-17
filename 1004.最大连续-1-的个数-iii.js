/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function longestOnes(nums, k) {
  let a = 0
  let b = 0

  let result = 0

  while (b < nums.length) {
    if (nums[b] === 0) {
      if (k === 0) {
        while (nums[a] !== 0) {
          a++
        }
        a++
      } else {
        k--
      }
    }
    b++
    result = Math.max(b - a, result)
  }

  return result
}
// @lc code=end
