/*
 * @lc app=leetcode.cn id=410 lang=javascript
 *
 * [410] 分割数组的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
function splitArray(nums, m) {
  const { length } = nums

  // 如果 m = length,最大值为 nums 里最大值
  let left = 0
  // 如果 m=1,最大值为 nums 的总和
  let right = 0
  for (let i = 0; i < length; i++) {
    left = Math.max(left, nums[i])
    right += nums[i]
  }
  // m 在 [1,length], 最大值在 [left,right] 中

  while (left < right) {
    const mid = (left + right) >> 1
    let sum = 0
    let count = 1

    for (let i = 0; i < length; i++) {
      sum += nums[i]

      if (sum > mid) {
        sum = nums[i]
        count++
      }
    }

    if (count > m) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}
// @lc code=end
