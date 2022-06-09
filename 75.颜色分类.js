/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  let a = 0
  let b = 0
  let c = 0

  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        nums[a++] = 2
        nums[b++] = 1
        nums[c++] = 0
        break
      case 1:
        nums[a++] = 2
        nums[b++] = 1
        break
      case 2:
        nums[a++] = 2
        break
    }
  }
}

function sortColors(nums) {
  let left = 0
  let right = nums.length - 1
  let target = 0

  while (target <= right) {
    if (nums[target] === 0) {
      nums[target] = nums[left]
      nums[left] = 0
      target++
      left++
    } else if (nums[target] === 2) {
      nums[target] = nums[right]
      nums[right] = 2
      right--
    } else {
      target++
    }
  }
}
// @lc code=end
