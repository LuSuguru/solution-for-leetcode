/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
function isRectangleCover(rectangles) {
  let left = Number.MAX_VALUE
  let right = Number.MIN_VALUE
  let top = Number.MIN_VALUE
  let bottom = Number.MAX_VALUE

  const map = new Map()

  let area = 0
  for (let i = 0; i < rectangles.length; i++) {
    // 获取4个顶点
    left = Math.min(left, rectangles[i][0])
    bottom = Math.min(bottom, rectangles[i][1])
    right = Math.max(right, rectangles[i][2])
    top = Math.max(top, rectangles[i][3])

    // 计算所有小矩形的总和
    area += (rectangles[i][3] - rectangles[i][1]) * (rectangles[i][2] - rectangles[i][0])

    const lt = rectangles[i][0] + '' + rectangles[i][3]
    const lb = rectangles[i][0] + '' + rectangles[i][1]
    const rt = rectangles[i][2] + '' + rectangles[i][3]
    const rb = rectangles[i][2] + '' + rectangles[i][1]

    // 除了4个顶点不重合，其余的坐标都需要重叠2次或者4次
    map.has(lt) ? map.delete(lt) : map.set(lt, true)
    map.has(lb) ? map.delete(lb) : map.set(lb)
    map.has(rt) ? map.delete(rt) : map.set(rt)
    map.has(rb) ? map.delete(rb) : map.set(rb)
  }

  // 保留下来的只有4个顶点
  if (
    map.size === 4
    && map.has(left + '' + bottom)
    && map.has(left + '' + top)
    && map.has(right + '' + top)
    && map.has(right + '' + bottom)
  ) {
    return area === (right - left) * (top - bottom)
  }

  return false
}
// @lc code=end
