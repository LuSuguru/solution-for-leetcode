/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 分治
const maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  const { length } = nums
  const halfLength = Math.ceil(length / 2) // 分成左右两边

  // 递归计算左右两边最大值
  const leftMaxSum = maxSubArray(nums.slice(0, halfLength))
  const rightMaxSum = maxSubArray(nums.slice(halfLength))

  // 计算依靠左边的最大值
  let maxBorderLeftSum
  let borderLeftSum = 0
  for (let i = halfLength - 1; i >= 0; i--) {
    borderLeftSum += nums[i]
    if (!maxBorderLeftSum) {
      maxBorderLeftSum = borderLeftSum
    }
    maxBorderLeftSum = Math.max(maxBorderLeftSum, borderLeftSum)
  }

  // 计算依靠右边的最大值
  let maxBorderRightNum
  let borderRightSum = 0
  for (let i = halfLength; i < length; i++) {
    borderRightSum += nums[i]
    if (!maxBorderRightNum) {
      maxBorderRightNum = borderRightSum
    }
    maxBorderRightNum = Math.max(maxBorderRightNum, borderRightSum)
  }

  return Math.max(leftMaxSum, rightMaxSum, maxBorderLeftSum + maxBorderRightNum)
}

//动态规划
function maxSubArray(nums) {
  // dp 存储计算过数组的最大值
  const dp = [nums[0]]
  let maxNum = dp[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])

    maxNum = Math.max(maxNum, dp[i])
  }

  return maxNum
}
// @lc code=end
