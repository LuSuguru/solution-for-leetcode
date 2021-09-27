/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 普通憨批解法
function findPeakElement(nums) {
  for (let i = 0; i < nums.length; i++) {
    const pre = i - 1 !== -1 ? nums[i - 1] : -Infinity
    const next = i + 1 !== nums.length ? nums[i + 1] : -Infinity

    if (nums[i] > pre && nums[i] > next) {
      return i
    }
  }
}


// 二分查找
function findPeakElement(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
// @lc code=end
