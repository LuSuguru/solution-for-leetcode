/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  const result = []
  nums.sort((a, b) => a - b)

  let i = 0
  while (i < nums.length) {
    const index = i

    while (nums[i + 1] === nums[i]) {
      i++
    }

    if (index === i) {
      result.push(nums[i])
    }
    i++
  }

  return result
}

function singleNumber(nums) {
  let num1 = 0
  let num2 = 0

  // mid 为 num1 和 num2 的异或结果
  let mid = 0
  for (let i = 0; i < nums.length; i++) {
    mid ^= nums[i]
  }

  // 从右找到第一位为 1 的数
  let bit_1 = 1;
  while ((mid & 1) === 0) {
    mid >>= 1
    bit_1 <<= 1
  }

  for (let i = 0; i < nums.length; i++) {
    // 如果标志位为1，与 num1 异或，反之与 num2 异或
    if ((nums[i] & bit_1) === 0) {
      num1 ^= nums[i]
    } else {
      num2 ^= nums[i]
    }
  }

  return [num1, num2]
}
// @lc code=end
