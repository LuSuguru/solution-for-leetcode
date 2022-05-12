/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
function intervalIntersection(firstList, secondList) {
  if (firstList.length === 0 || secondList.length === 0) {
    return []
  }

  let a = 0
  let b = 0

  const result = []
  while (a < firstList.length && b < secondList.length) {
    const [start1, end1] = firstList[a]
    const [start2, end2] = secondList[b]

    if (!(start1 > end2 || start2 > end1)) {
      result.push([
        Math.max(start1, start2),
        Math.min(end1, end2)
      ])
    }

    const nextStart1 = firstList[a + 1]?.[0] || Number.MAX_SAFE_INTEGER
    const nextStart2 = secondList[b + 1]?.[0] || Number.MAX_SAFE_INTEGER

    if (nextStart1 < nextStart2) {
      a++
    } else {
      b++
    }
  }
  return result
}
// @lc code=end
