/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 我的做法
function searchRange(nums, target) {
  const result = [-1, -1]

  const search = (start, end) => {
    const mediumIndex = start + Math.floor((end - start) / 2)
    const medium = nums[mediumIndex]

    if (nums[mediumIndex] === target) {
      if (result[0] === -1) {
        result[0] = mediumIndex
        result[1] = mediumIndex
      }

      for (let i = mediumIndex; i >= 0; i--) {
        if (nums[i] === target) {
          result[0] = i
        } else {
          break
        }
      }

      for (let i = mediumIndex; i <= end; i++) {
        if (nums[i] === target) {
          result[1] = i
        } else {
          break
        }
      }
      return
    }

    if (target < nums[start] || nums[end] < target) {
      return
    }

    if (medium < target) {
      search(mediumIndex + 1, end)
    }

    if (medium > target) {
      search(start, mediumIndex - 1)
    }
  }

  search(0, nums.length - 1)

  return result
}

function searchRange(nums, target) {
  const binarySearch = (leftOrRight) => {
    let res = -1
    let left = 0
    let right = nums.length - 1
    let mid

    while (left <= right) {
      mid = left + Math.floor((right - left) / 2)
      if (target < nums[mid]) {
        right = mid - 1
      } else if (target > nums[mid]) {
        left = mid + 1
      } else {
        res = mid
        if (leftOrRight) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
    }
    return res
  }

  return [
    binarySearch(true),
    binarySearch(false)
  ]
}
// @lc code=end
