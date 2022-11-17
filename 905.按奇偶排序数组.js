/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    while (i < j && nums[i] % 2 === 0) i++
    while (i < j && nums[j] % 2 !== 0) j--

    const mid = nums[j]
    nums[j] = nums[i]
    nums[i] = mid
    i++
    j--
  }

  return nums
}
// @lc code=end
