/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1
    }
  }
  return nums[0] === 0 ? nums.length : 0
}

function missingNumber(nums) {
  const sum = nums.reduce((pre, cur) => pre + cur, 0)
  const { length } = nums
  return (1 + length) * length / 2 - sum
}

function missingNumber(nums) {
  return nums.reduce((pre, cur, index) => pre ^ cur ^ index, nums.length)
}
// @lc code=end
