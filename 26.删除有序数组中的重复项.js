/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 我的憨憨解法
function removeDuplicates(nums) {
  let i = 0
  let { length } = nums

  while (i < length) {
    const num = nums[i]

    let j = i + 1
    while (nums[j] === num) {
      j++
    }

    nums.splice(i + 1, j - i - 1)
    length -= (j - 1 - i)
    i++
  }
  return length
}

function removeDuplicates(nums) {
  let i = 0
  let j = 1
  let { length } = nums

  while (j < length) {
    if (nums[i] === nums[j]) {
      j++
    } else {
      i++
      nums[i] = nums[j]
      j++
    }
  }

  return i + 1
}
// @lc code=end
