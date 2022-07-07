/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  nums.sort((a, b) => a - b)

  const result = []
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      result.push(nums[i])
    }
  }

  return result
}

function findDuplicates(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i])

    if (nums[num - 1] < 0) {
      result.push(num)
    } else {
      nums[num - 1] = - nums[num - 1]
    }
  }
  return result
}
// @lc code=end
