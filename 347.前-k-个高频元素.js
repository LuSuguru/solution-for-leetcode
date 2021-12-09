/* eslint-disable no-bitwise */
/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++
    } else {
      map[nums[i]] = 1
    }
  }

  const arr = Object.entries(map).sort((a, b) => b[1] - a[1])

  const result = []

  for (let i = 0; i < k; i++) {
    result.push(arr.shift()[0])
  }

  return result
}

// @lc code=end
