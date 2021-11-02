/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
  const n = nums.length
  const stack = []
  const result = new Array(n).fill(-1)

  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i % n]) {
      result[stack.pop()] = nums[i % n]
    }
    stack.push(i % n)
  }

  return result
}
// @lc code=end
