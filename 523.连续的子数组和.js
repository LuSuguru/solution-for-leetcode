/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function checkSubarraySum(nums, k) {
  if (nums.length < 2) return false

  // 前缀和 + 哈希 + 同余定理
  const map = new Map([[0, -1]])

  let reminder = 0
  for (let i = 0; i < nums.length; i++) {
    reminder = (reminder + nums[i]) % k

    if (map.has(reminder)) {
      if (i - map.get(reminder) >= 2) {
        return true
      }
    } else {
      map.set(reminder, i)
    }
  }
  return false
}
// @lc code=end
