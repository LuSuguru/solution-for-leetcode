/*
 * @lc app=leetcode.cn id=1235 lang=javascript
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
function jobScheduling(startTime, endTime, profit) {
  // 将 3 个数组凑成 [开始时间，结束时间，收益] 的元组
  const nodes = startTime.map((start, i) => ([start, endTime[i], profit[i]]))
  nodes.sort((x, y) => x[1] - y[1]) // 按结束时间从小到大排序

  // dp[i] 表示 包括 i 号工作之前的最大收益
  const dp = new Array(startTime.length)
  dp[0] = nodes[0][2]

  for (let i = 1; i < startTime.length; i++) {
    // pre表示i号工作之前最近能做的工作
    const pre = binarySearch(nodes, i)
    dp[i] = Math.max(dp[i - 1], (pre >= 0 ? dp[pre] : 0) + nodes[i][2])
  }

  return dp[nodes.length - 1]
}

function binarySearch(nodes, i) {
  let l = 0
  let r = i - 1

  while (l < r) {
    // eslint-disable-next-line no-bitwise
    const mid = (l + r + 1) >> 1
    if (nodes[mid][1] <= nodes[i][0]) {
      l = mid
    } else {
      r = mid - 1
    }
  }

  if (l < i && nodes[l][1] <= nodes[i][0]) {
    return l
  }

  return -1
}

// @lc code=end
