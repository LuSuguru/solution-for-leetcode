/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
function reachNumber(target) {
  let sum = 0
  let step = 0
  target = Math.abs(target)

  while (sum < target) {
    step++
    sum += step
  }

  // 情况 1
  if ((sum - target) % 2 === 0) {
    return step
  }

  // sum-target 是奇数，且当前步数是偶数，下一步必定是奇数，那么可以多走一步变成情况1
  if (step % 2 === 0) {
    return step + 1
  }

  // 当前步数是奇数，下一步是偶数，需要多走两步才能变成情况1
  return step + 2
}
// @lc code=end
