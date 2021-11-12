/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let left = 1
  let right = 1

  const { length } = nums
  const result = new Array(length).fill(1)

  for (let i = 0; i < length; i++) {
    result[i] *= left
    left *= nums[i]

    result[length - 1 - i] *= right
    right *= nums[length - 1 - i]
  }
  return result
}
// @lc code=end
