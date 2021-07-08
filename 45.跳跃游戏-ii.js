/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 从后往前的贪婪算法
function jump(nums) {
  let position = nums.length - 1
  let step = 0

  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i
        step++
        break
      }
    }
  }
  return step
}

// 从前往后的贪婪
function jump(nums) {
  let max = 0
  let end = 0
  let step = 0

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i)

    if (i === end) {
      end = max
      step++
    }
  }

  return step
}
// @lc code=end
