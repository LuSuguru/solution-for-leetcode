/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  // 元素和 sum
  // 添加 -号的元素集合为 neg
  // 添加 + 号的元素集合为 sum - neg
  // 则 (sum - neg) - neg = target
  // neg = (sum - target) / 2
  const sum = nums.reduce((pre, cur) => pre + cur, 0)

  const diff = sum - target

  if (diff < 0 || diff % 2 !== 0) {
    return 0
  }

  const neg = Math.floor(diff / 2)

  // 转化为 0，1背包问题，背包容量为 neg，物品为 nums

  const dp = new Array(neg + 1).fill(0)
  dp[0] = 1

  for (const num of nums) {
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num]
    }
  }
  return dp[neg]
}
// @lc code=end
