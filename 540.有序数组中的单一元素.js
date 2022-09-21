/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
  const { length } = nums

  let left = 0
  let right = length

  while (left < right) {
    const mid = (left + right) >> 1

    if (mid % 2 === 0) {
      if (mid + 1 < length && nums[mid] === nums[mid + 1]) {
        left = mid + 1
      } else {
        right = mid
      }
    } else if (mid - 1 >= 0 && nums[mid - 1] === nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}
// @lc code=end
