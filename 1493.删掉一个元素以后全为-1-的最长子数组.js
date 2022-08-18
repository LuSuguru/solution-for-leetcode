/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function longestSubarray(nums) {
  let result = Number.MIN_VALUE

  let a = 0
  let b = 0

  let current = 0
  let hasZero = false

  while (b < nums.length) {
    if (nums[b] === 1 || (nums[b] === 0 && hasZero === false)) {
      if (nums[b] === 1) {
        current++
      } else {
        hasZero = true
      }

      b++
    } else if (a < b) {
      while (a < b) {
        if (nums[a] === 1) {
          current--
          a++
        } else {
          hasZero = false
          a++
          break
        }
      }
    } else {
      a++
      b++
    }

    result = Math.max(result, current)
  }

  return result === nums.length ? result - 1 : result
}

function longestSubarray(nums) {
  let result = 0
  let p0 = 0
  let p1 = 0

  nums.forEach((item) => {
    if (item === 0) {
      p1 = p0
      p0 = 0
    } else {
      p0++
      p1++
    }
    result = Math.max(result, p1)
  })

  return result === nums.length ? result - 1 : result
}
// @lc code=end
