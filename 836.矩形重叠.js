/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
function isRectangleOverlap(rec1, rec2) {
  // 不是矩形
  if (rec1[0] === rec1[2] || rec1[1] === rec1[3] || rec2[0] === rec2[2] || rec2[1] === rec2[3]) {
    return false
  }

  return !(
    rec2[2] <= rec1[0] // left
    || rec2[0] >= rec1[2] // right
    || rec2[3] <= rec1[1] // bottom
    || rec2[1] >= rec1[3] // top
  )
}

function isRectangleOverlap(rec1, rec2) {
  return (
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
    && Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0])
  )
}
// @lc code=end
