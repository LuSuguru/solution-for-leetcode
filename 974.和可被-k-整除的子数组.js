/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 死脑筋做法
function subarraysDivByK(nums, k) {
  if (nums.length === 1) {
    if (nums[0] % k === 0) {
      return 1
    }
    return 0
  }
  const { length } = nums

  const sums = new Array(length)

  let result = 0
  for (let i = 0; i < length; i++) {
    sums[i] = (sums[i - 1] || 0) + nums[i]

    if (sums[i] % k === 0) {
      result++
    }
  }

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if ((sums[i] - sums[j]) % k === 0) {
        result++
      }
    }
  }
  return result
}

function subarraysDivByK(nums, k) {
  const { length } = nums
  let sum = 0
  let result = 0

  // (sums[i] -sums[j]) % k == 0 
  // => sums[i] % k - sums[j] % k == 0  
  // => sums[i] % k === sums[j] % k
  // 以 sum[i] % K 作为键值统计其出现的频率，从而对于每个下标 j 可以立即获得能和它组成满足要求的子数组的开始下标 i 的数量
  const map = {}
  map[0] = 1

  for (let i = 0; i < length; i++) {
    sum += nums[i]

    // sum 有可能为负数，通过 +k 取正
    const key = (sum % k + k) % k
    result += (map[key] || 0)
    map[key] = (map[key] || 0) + 1
  }

  return result
}
// @lc code=end
