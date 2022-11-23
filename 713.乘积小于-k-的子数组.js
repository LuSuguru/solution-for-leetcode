/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function numSubarrayProductLessThanK(nums, k) {
  const { length } = nums
  if (length === 1) return nums[0] < k ? 1 : 0
  if (k === 0 || k === 1) return 0

  let i = 0
  let accu = 1
  let result = 0

  for (let j = 0; j < nums.length; j++) {
    accu *= nums[j]

    while (accu >= k) {
      accu /= nums[i]
      i++
    }
    result += j - i + 1
  }

  return result
}
// @lc code=end
