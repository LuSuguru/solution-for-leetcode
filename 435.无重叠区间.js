/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  // 右区间排序
  intervals.sort((a, b) => a[1] - b[1])

  let res = 1
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (end <= intervals[i][0]) {
      end = intervals[i][1]
      res++
    }
  }

  return intervals.length - res
}
// @lc code=end
