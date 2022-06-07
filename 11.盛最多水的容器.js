/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let left = 0
  let right = height.length - 1

  let result = 0

  while (left < right) {
    let area = 0
    if (height[left] < height[right]) {
      area = height[left] * (right - left)
      left++
    } else {
      area = height[right] * (right - left)
      right--
    }

    result = Math.max(result, area)
  }

  return result
}
// @lc code=end
