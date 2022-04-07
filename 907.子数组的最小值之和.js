/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
function sumSubarrayMins(arr) {
  const dp = []
  const mod = 1e9 + 7
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    let num = 1
    while (dp.length > 0 && dp[dp.length - 1].val > arr[i]) {
      num += dp[dp.length - 1].num
      dp.pop()
    }

    dp.push({ val: arr[i], num })

    for (let j = 0; j < dp.length; j++) {
      const { val, num } = dp[j]
      result = (result + val * num) % mod
    }
  }

  return result
}
// @lc code=end
