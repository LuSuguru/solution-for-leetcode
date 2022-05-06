/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
function findMinDifference(timePoints) {
  const times = timePoints.map((time) => {
    const [hours, minutes] = time.split(':')
    return (+hours) * 60 + (+minutes)
  })

  times.sort((a, b) => a - b)

  let result = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < times.length; i++) {
    const a = times[i]

    let b = times[i + 1]
    if (i === times.length - 1) {
      b = times[0] + 1440
    }

    result = Math.min(result, b - a)
  }

  return result
}
// @lc code=end
