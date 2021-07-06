/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// map
function majorityElement(nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const memoNum = (map.get(num) || 0) + 1

    if (memoNum > nums.length / 2) {
      return num
    }

    map.set(num, memoNum)
  }
}

// 摩尔投票法
function majorityElement(nums) {
  let count = 0
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      result = nums[i]
      count++
    } else {
      result === nums[i] ? count++ : count--
    }
  }
  return result
}

// @lc code=end
