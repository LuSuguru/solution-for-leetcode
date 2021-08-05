/*
 * @lc app=leetcode.cn id=1498 lang=javascript
 *
 * [1498] 满足条件的子序列数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function numSubseq(nums, target) {
  // 排序
  nums.sort((a, b) => a - b)

  // 2^n次方可能超出最大值，所以对于每一次，都取模
  const mod = 10 ** 9 + 7
  const pow = new Array(nums.length)
  pow[0] = 1
  for (let i = 1; i < nums.length; i++) {
    pow[i] = pow[i - 1] * 2 % mod
  }

  let i = 0
  let j = nums.length - 1
  let result = 0

  // 双指针
  while (i <= j) {
    // 取得满足条件的子序列，如 [3,5,6,7],9,满足的是[3,5]
    // 对于3，取5，6的子序列所有数量 = c20+c21+c22 = 2^2 = 4
    // 小的指针往后一位，若满足，继续算 [i+1,j]的组合总数2^(j-i)
    // 不满足则大的指针往前一位
    if (nums[i] + nums[j] <= target) {
      result += pow[j - i]
      result %= mod
      i++
    } else {
      j--
    }
  }

  return result
}
// @lc code=end
