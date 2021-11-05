/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const set = new Set()

  let result = 0
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num
      let count = 1

      while (set.has(current + 1)) {
        current++
        count++
      }
      result = Math.max(count, result)
    }
  }

  return result
}

function longestConsecutive(nums) {
  const map = new Map()
  let result = 0

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) continue

    const left = map.get(nums[i] - 1) || 0
    const right = map.get(nums[i] + 1) || 0

    const length = left + right + 1
    result = Math.max(length, result)

    map.set(nums[i] - left, length)
    map.set(nums[i], length)
    map.set(nums[i] + right, length)
  }

  return result
}
// @lc code=end
