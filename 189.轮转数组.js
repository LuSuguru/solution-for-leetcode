/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const step = k % nums.length

  nums.unshift(...nums.splice(nums.length - step, step))
}

function rotate(nums, k) {
  const reverse = (begin, end) => {
    while (begin < end) {
      const temp = nums[end]
      nums[end] = nums[begin]
      nums[begin] = temp

      begin++
      end--
    }
  }

  reverse(0, nums.length - 1)
  console.log(nums)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
}

// @lc code=end
