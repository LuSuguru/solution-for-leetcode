/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  // 右端点排序
  points.sort((a, b) => a[1] - b[1])

  let result = 1

  // 记录最小的右端点
  let end = points[0][1]

  for (let i = 0; i < points.length; i++) {
    // 从最小的右端点射出一支箭，去掉被射爆的气球
    if (end < points[i][0]) {
      result++
      // 更新右端点
      end = points[i][1]
    }
  }

  return result
}
// @lc code=end
