/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
function superEggDrop(k, n) {
  if (k === 1) return n
  if (n === 1) return 1

  // dp[n][k] 代表 n 层 k 个鸡蛋确定 F 层的最小次数
  const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(0))

  // 当楼层数为一时
  for (let i = 1; i <= k; i++) {
    dp[i][1] = 1
  }

  // 当鸡蛋只有一颗时
  for (let i = 1; i <= n; i++) {
    dp[1][i] = i
  }

  for (let i = 2; i <= k; i++) {
    for (let j = 2; j <= n; j++) {
      // 未使用二分的解法 x为所选楼层
      // let min = Integer.MAX_VALUE;
      // for(let x=1; x<=j; x++){
      //     min = Math.min(min, Math.max(dp[i-1][x-1], dp[i][j-x]));
      // }
      // dp[i][j] = 1 + min;

      // 改用二分查找
      let left = 1
      let right = j
      while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2)// 在mid层扔鸡蛋
        const down = dp[i - 1][mid - 1] // 鸡蛋碎了 (单调递增)
        const up = dp[i][j - mid] // 鸡蛋没碎 （单调递减）
        if (down > up) { // 单调递增的太大（往低处走）
          right = mid
        } else if (down < up) { // 单调递减的太大 （往高处走）
          left = mid
        } else { // 当down == up 代表找到了
          left = right = mid
        }
      }
      /// / 将范围缩小到 right - left <= 1
      const leftVal = Math.max(dp[i - 1][left - 1], dp[i][j - left])
      const rightVal = Math.max(dp[i - 1][right - 1], dp[i][j - right])
      dp[i][j] = 1 + Math.min(leftVal, rightVal)
    }
  }

  return dp[k][n]
}

// dp[t][k]  t 次操作 k 个鸡蛋所能确定的最高层数
function superEggDrop(k, n) {
  if (n === 1) {
    return 1
  }

  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0))

  for (let i = 1; i <= k; i++) {
    dp[1][i] = 1
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i - 1][j]
    }

    if (dp[i][k] >= n) {
      return i
    }
  }
}
// @lc code=end
