/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 我的憨憨二分
function findMin(nums) {
  const { length } = nums
  let start = 0
  let end = length - 1

  while (end - start > 1) {
    // eslint-disable-next-line no-bitwise
    const mid = start + ((end - start) >> 1)
    let leftMid = mid
    let rightMid = mid

    while (nums[rightMid] === nums[rightMid + 1]) {
      rightMid += 1
    }

    while (nums[leftMid] === nums[leftMid - 1]) {
      leftMid -= 1
    }

    if (rightMid === end) {
      end = leftMid
    } else if (leftMid === start) {
      start = rightMid
    } else if (nums[mid] < nums[end]) {
      end = leftMid
    } else {
      start = rightMid
    }
  }
  return Math.min(nums[start], nums[end])
}

function findMin(nums) {
  const { length } = nums
  let start = 0
  let end = length - 1

  while (end - start > 1) {
    const mid = start + ((end - start) >> 1)

    if (nums[mid] < nums[end]) {
      end = mid
    } else if (nums[mid] > nums[end]) {
      start = mid + 1
    } else {
      end--
    }
  }
  return Math.min(nums[start], nums[end])
}
// @lc code=end
