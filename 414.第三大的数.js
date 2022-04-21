/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
  let first = Number.MIN_SAFE_INTEGER
  let second = Number.MIN_SAFE_INTEGER
  let third = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= first) {
      if (nums[i] === first) {
        continue
      }
      third = second
      second = first
      first = nums[i]
    } else if (nums[i] >= second) {
      if (nums[i] === second) {
        continue
      }
      third = second
      second = nums[i]
    } else if (nums[i] >= third) {
      third = nums[i]
    }
  }

  if (third !== Number.MIN_SAFE_INTEGER) {
    return third
  }
  return first
}
// @lc code=end
