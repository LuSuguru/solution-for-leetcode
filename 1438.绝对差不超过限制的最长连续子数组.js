/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
function longestSubarray(nums, limit) {
  const minQueue = []
  const maxQueue = []

  let left = 0
  let result = 1

  for (let right = 0; right < nums.length; right++) {
    while (minQueue.length && nums[minQueue[minQueue.length - 1]] >= nums[right]) {
      minQueue.pop()
    }
    minQueue.push(right)

    while (maxQueue.length && nums[maxQueue[maxQueue.length - 1]] <= nums[right]) {
      maxQueue.pop()
    }
    maxQueue.push(right)

    while (left < right && (nums[maxQueue[0]] - nums[minQueue[0]]) > limit) {
      left++
      while (maxQueue[0] < left) {
        maxQueue.shift()
      }
      while (minQueue[0] < left) {
        minQueue.shift()
      }
    }

    result = Math.max(result, right - left + 1)
  }
  return result
}

// @lc code=end
