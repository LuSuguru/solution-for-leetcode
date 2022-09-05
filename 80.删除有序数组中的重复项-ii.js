/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let i = 0
  let j = 0

  let result = 0
  let count = 0

  while (i < nums.length) {
    while (nums[i] === nums[j]) {
      if (count < 2) {
        count++
        result++
        j++
      } else {
        nums.splice(j, 1)
      }
    }
    count = 0
    i = j
  }

  return result
}
// @lc code=end
