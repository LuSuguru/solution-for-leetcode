/* eslint-disable prefer-destructuring */
/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  // 首尾不能一起，因此分成包含首不包含尾的[1,n-1]和包含尾不包含头的[2,n]
  // 返回两种情况的最大值

  let last = 0
  let current = nums[0]
  let i

  // 计算 [1,n-1]的最大值
  for (i = 1; i < nums.length - 1; i++) {
    const mid = current
    current = Math.max(last + nums[i], current)
    last = mid
  }
  const left = current

  last = 0
  current = nums[1]

  // 计算[2,n]的最大值
  for (i = 2; i < nums.length; i++) {
    const mid = current
    current = Math.max(last + nums[i], current)
    last = mid
  }
  const right = current

  return Math.max(left, right)
}
// @lc code=end
