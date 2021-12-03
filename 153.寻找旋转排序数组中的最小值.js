/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// function findMin(nums) {
//   if (nums.length === 1) return nums[0]

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] <= nums[i - 1]) {
//       return nums[i]
//     }
//   }

//   return nums[0]
// }

// 我的憨批二分
function findMin(nums) {
  const { length } = nums
  let start = 0
  let end = length - 1

  while (end - start > 1) {
    // eslint-disable-next-line no-bitwise
    const rightStart = start + ((end - start) >> 1)
    const leftEnd = rightStart - 1

    if (nums[rightStart] > nums[start]) {
      if (nums[rightStart] > nums[end]) {
        start = rightStart
      } else {
        end = leftEnd
      }
    }

    if (nums[rightStart] < nums[start]) {
      if (nums[rightStart] < nums[leftEnd]) {
        return nums[rightStart]
      }

      end = leftEnd
    }
  }

  return Math.min(nums[start], nums[end])
}

function findMin(nums) {
  const { length } = nums
  let start = 0
  let end = length - 1

  while (end - start > 1) {
    // eslint-disable-next-line no-bitwise
    const mid = start + ((end - start) >> 1)

    if (nums[mid] < nums[end]) {
      end = mid
    } else {
      start = mid + 1
    }
  }

  return Math.min(nums[start], nums[end])
}
// @lc code=end
