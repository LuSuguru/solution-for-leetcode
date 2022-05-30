/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  const { length } = nums
  const dp = [...nums]

  for (let i = 0; i < length - 1; i++) {
    let accu = nums[i]
    for (let j = i + 1; j < length; j++) {
      accu *= nums[j]
      dp[j] = Math.max(dp[j], accu)
    }
  }

  let result = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < dp.length; i++) {
    result = Math.max(result, dp[i])
  }

  return result
}

function maxProduct(nums) {
  let max = 1
  let min = 1
  let result = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      const tmp = max
      max = min
      min = tmp
    }

    max = Math.max(max * nums[i], nums[i])
    min = Math.min(min * nums[i], nums[i])

    result = Math.max(max, result)
  }

  return result
}
// @lc code=end
