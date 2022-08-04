/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  if (nums.length === 1) {
    return [nums[0] ** 2]
  }

  let l = 0
  let r = nums.length - 1

  const result = []

  while (l <= r) {
    const lNum = nums[l] ** 2
    const rNum = nums[r] ** 2

    if (lNum < rNum) {
      result.unshift(rNum)
      r--
    } else {
      result.unshift(lNum)
      l++
    }
  }

  return result
}
// @lc code=end
