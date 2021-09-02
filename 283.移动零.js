/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  const { length } = nums
  let i = 0
  let j = 0

  for (; i < length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }

  for (; j < length; j++) {
    nums[j] = 0
  }

  return nums
}
// @lc code=end
