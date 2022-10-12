/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function partitionDisjoint(nums) {
  const { length } = nums

  const max = new Array(length)

  let leftMax = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < length; i++) {
    leftMax = Math.max(leftMax, nums[i])
    max[i] = leftMax
  }

  let rightMin = Number.MAX_SAFE_INTEGER
  let result = length - 1

  for (let j = length - 1; j >= 0; j--) {
    rightMin = Math.min(rightMin, nums[j])
    leftMax = max[j - 1]

    if (leftMax <= rightMin) {
      result = j
    }
  }

  return result
}

function partitionDisjoint(nums) {
  const n = nums.length
  // [0, i]的最大值
  let max = nums[0]
  // [0, pos]的最大值 也就是它是左边阵营的最大值
  let leftMax = nums[0]
  // 分界点
  let pos = 0

  for (let i = 1; i < n; i++) {
    max = Math.max(max, nums[i])
    // 如果当前元素小于等于左边阵营的最大值，那当前元素可以收归麾下
    if (nums[i] < leftMax) {
      // 将当前阵地范围扩大并重新计算最大值（因为右边阵营的所有值都会大于左边阵营的所有值）
      leftMax = max
      pos = i
    }
  }
  return pos + 1
}

// @lc code=end
