/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  if (nums.length === 1) return 1

  let curLength = 1
  let maxLength = 1

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      curLength++
      maxLength = Math.max(maxLength, curLength)
    } else {
      curLength = 1
    }
  }

  return maxLength
}
// @lc code=end
