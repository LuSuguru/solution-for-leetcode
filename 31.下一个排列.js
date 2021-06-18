/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  const reverse = (start) => {
    for (let i = start, j = nums.length - 1; i < j; i++, j--) {
      const target = nums[i]
      nums[i] = nums[j]
      nums[j] = target
    }
  }

  let k = -1
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i - 1] < nums[i]) {
      k = i - 1
      for (let j = nums.length - 1; j > k; j--) {
        // 从右往左找到大于目标数的最小值，由于是倒序
        if (nums[j] > nums[k]) {
          console.log(nums[j], nums[k])
          const target = nums[j]
          nums[j] = nums[k]
          nums[k] = target
          break
        }
      }

      reverse(k + 1)
      break
    }
  }

  if (k === -1) reverse(0)
}
// @lc code=end
