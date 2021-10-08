/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums) {
  const strNums = nums.map(item => item + '')

  strNums.sort((num1, num2) => parseInt((num2 + num1), 10) - parseInt((num1 + num2), 10))

  if (strNums[0] === '0') {
    return '0'
  }

  return strNums.join('')
}
// @lc code=end
