/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  let sum = 0
  let result = 0

  const map = new Map()
  map.set(0, 0)

  for (let i = 0; i < nums.length; i++) {
    sum += 2 * nums[i] - 1

    if (map.has(sum)) {
      result = Math.max(result, i + 1 - map.get(sum))
    } else {
      map.set(sum, i + 1)
    }
  }

  return result
}
// @lc code=end
