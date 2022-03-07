/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let a = 0
  let b = numbers.length - 1

  while (a < b) {
    const sum = numbers[a] + numbers[b]
    if (sum === target) {
      return [a + 1, b + 1]
    } if (sum > target) {
      b--
    } else {
      a++
    }
  }
}
// @lc code=end
