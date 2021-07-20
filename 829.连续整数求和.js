/*
 * @lc app=leetcode.cn id=829 lang=javascript
 *
 * [829] 连续整数求和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 每一个子序列都是等差数列的通项公式，可以根据通项公式来判断
function consecutiveNumbersSum(n) {
  let result = 0
  // n = kx+ k(k+1)/2
  // 2n = k(2x+k+1)
  // 1<=k<=2n
  // 计算x，x为整数，说明存在一个子序列相加等于n
  for (let k = 1; k <= 2 * n; k++) {
    if (2 * n % k === 0) {
      const y = 2 * n / k - k - 1

      if (y % 2 === 0 && y >= 0) {
        result++
      }
    }
  }
  return result
}

// 子序列长度为1的有 {1,2,3,4,5,6,7...}
// 子序列长度为2的有 {3,5,7,9...}
// 子序列长度为3的有 {6,9,12}
// 子序列长度为4的有 {10,14}
// 子序列长度为length的是 (1+2+3+...+length) + length*x = n
// 判断 x 是否为整数，则可以判定是否包含有长度为N的子序列
function consecutiveNumbersSum(n) {
  let start = 1
  let length = 2
  let result = 1

  while (start < n) {
    start += length
    if ((n - start) % length === 0) {
      result++
    }
    length++
  }
  return result
}
// @lc code=end
