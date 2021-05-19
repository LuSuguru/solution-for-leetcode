/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function merge(intervals) {
  const result = []

  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < intervals.length; i++) {
    if (!intervals[i - 1]) {
      result.push(intervals[i])
      continue
    }

    const lastIndex = result.length - 1

    const [lastStart, lastEnd] = result[lastIndex]
    const [curStart, curEnd] = intervals[i]

    if (lastStart <= curStart && curStart <= lastEnd) {
      result[lastIndex][0] = Math.min(lastStart, curStart)
      result[lastIndex][1] = Math.max(lastEnd, curEnd)
    } else {
      result.push(intervals[i])
    }
  }
  return result
}
// @lc code=end
