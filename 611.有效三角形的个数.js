/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
  // 从小到大排序
  nums.sort((a, b) => a - b)

  const { length } = nums

  if (length < 3) {
    return 0
  }

  let result = 0

  for (let a = length - 1; a >= 2; a--) {
    let b = 0
    let c = a - 1

    while (b < c) {
      // 满足该条件，说明从 num[b] 到 num[c] 的数都满足要求，结果直接加上 c - b
      if (nums[b] + nums[c] > nums[a]) {
        result += c - b
        c--
      } else {
        b++
      }
    }
  }

  return result
}
// @lc code=end
