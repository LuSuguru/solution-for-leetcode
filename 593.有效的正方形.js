/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
function validSquare(p1, p2, p3, p4) {
  return isRightTriangle(p1, p2, p3)
    && isRightTriangle(p1, p3, p4)
    && isRightTriangle(p1, p2, p4)
    && isRightTriangle(p2, p3, p4)
}

function isRightTriangle([x1, y1], [x2, y2], [x3, y3]) {
  const d1 = (y2 - y1) ** 2 + (x2 - x1) ** 2
  const d2 = (y3 - y2) ** 2 + (x3 - x2) ** 2
  const d3 = (y1 - y3) ** 2 + (x1 - x3) ** 2

  return (
    d1 > d2 && d2 === d3 && d2 + d3 === d1
    || d2 > d1 && d1 === d3 && d1 + d3 === d2
    || d3 > d1 && d1 === d2 && d1 + d2 === d3
  )
}
// @lc code=end
