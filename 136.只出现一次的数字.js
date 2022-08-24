/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  nums.sort((a, b) => a - b)

  let i = 0
  while (i < nums.length) {
    const pre = nums[i]
    const index = i

    while (nums[i + 1] === pre) {
      i++
    }
    if (index === i) {
      return pre
    }
    i++
  }
  return null
}

// 位运算
// 1. 交换律：a ^ b ^ c <=> a ^ c ^ b
// 2. 任何数与 0 异或为任何数 0 ^ n => n
// 3. 相同的数异或为0: n ^ n => 0
function singleNumber(nums) {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}
// @lc code=end
