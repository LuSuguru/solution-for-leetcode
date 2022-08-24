/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let result = 0

  // 将所有的数转换为 32 位数
  for (let i = 0; i < 32; i++) {
    // 转换成 32 位后，每一位数的总和
    let total = 0
    nums.forEach(num => {
      total += ((num >> i) & 1)
    })

    // 出现 3 次的数，当前位数的综合除以 3 等于 0
    if (total % 3 !== 0) {
      result |= (1 << i)
    }
  }

  return result
}
// @lc code=end
