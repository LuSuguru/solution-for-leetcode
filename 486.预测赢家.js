/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function PredictTheWinner(nums) {
  const pk = (start = 0, end = nums.length - 1) => {
    if (start > end) {
      return 0
    }

    const planA = nums[start] - pk(start + 1, end)
    const planB = nums[end] - pk(start, end - 1)

    return Math.max(planA, planB)
  }

  return pk() >= 0
}

function PredictTheWinner(nums) {
  const { length } = nums

  // dp 代表当前子序列的最优解
  const dp = new Array(length).fill(0).map(() => new Array(length).fill(0))

  // 子序列就1个数时最优解就是本身
  for (let i = 0; i < nums.length; i++) {
    dp[i][i] = nums[i]
  }

  // 从 两个数的子序列开始
  for (i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  return dp[0][length - 1] >= 0
}
// @lc code=end
