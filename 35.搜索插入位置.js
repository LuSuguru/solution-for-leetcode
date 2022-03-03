/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 我的憨批二分法
function searchInsert(nums, target) {
  const binarySearch = (start, end) => {
    if (start === end) {
      if (target <= nums[start]) {
        return start
      }
      return start + 1
    }

    const mid = start + Math.floor((end - start) / 2)

    if (target == nums[mid]) {
      return mid
    }

    if (target < nums[mid]) {
      if (start === mid) {
        if (target <= nums[start]) {
          return start
        }
        return start + 1
      }
      return binarySearch(start, mid - 1)
    }
    return binarySearch(mid + 1, end)
  }

  return binarySearch(0, nums.length - 1)
}

function searchInsert(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return right + 1
}
// @lc code=end
