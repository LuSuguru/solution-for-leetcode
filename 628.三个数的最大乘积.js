/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumProduct(nums) {
  let min1 = Number.MAX_SAFE_INTEGER
  let min2 = Number.MAX_SAFE_INTEGER

  let max1 = Number.MIN_SAFE_INTEGER
  let max2 = Number.MIN_SAFE_INTEGER
  let max3 = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min1) {
      min2 = min1
      min1 = nums[i]
    } else if (nums[i] < min2) {
      min2 = nums[i]
    }

    if (nums[i] > max1) {
      max3 = max2
      max2 = max1
      max1 = nums[i]
    } else if (nums[i] > max2) {
      max3 = max2
      max2 = nums[i]
    } else if (nums[i] > max3) {
      max3 = nums[i]
    }
  }

  return Math.max(max1 * max2 * max3, min2 * min1 * max1)
}
// @lc code=end
