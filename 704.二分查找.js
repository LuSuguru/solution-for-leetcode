/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  // 用来判断切割后新数组起始项在原数组中的偏移量
  let offset = 0

  while (nums.length >= 1) {
    const mediumIndex = Math.floor(nums.length / 2)
    const medium = nums[mediumIndex]

    // 如果中位数与目标相等，直接返回中位数下标，加上偏移量，等于在原数组中的位置
    if (medium === target) {
      return mediumIndex + offset
    }

    // 切割前半段，由于新数组在上一个数组中的起始点未变，所以加偏移量
    if (medium > target) {
      nums = nums.slice(0, mediumIndex)
    } else { // 切割后半段
      nums = nums.slice(mediumIndex + 1)
      // 新的数组起始点是上一个数组的中位数后一位，需要计算偏移量
      offset += mediumIndex + 1
    }
  }

  if (nums.length === 0) {
    return -1
  }
}
// @lc code=end
