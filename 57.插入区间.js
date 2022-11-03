/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//  输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
//  输出：[[1,5],[6,9]]

//  输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出：[[1,2],[3,10],[12,16]]

// 输入：intervals = [], newInterval = [5,7]
// 输出：[[5,7]]

// 输入：intervals = [[1,5]], newInterval = [2,3]
// 输出：[[1,5]]

// 输入：intervals = [[1,5]], newInterval = [2,7]
// 输出：[[1,7]]
// function insert(intervals, newInterval) {
//   const [a, b] = newInterval
//   const { length } = intervals

//   if (intervals.length === 0) {
//     return [newInterval]
//   }

//   if (newInterval[0] > intervals[length - 1][1]) {
//     intervals.push(newInterval)
//     return intervals
//   }

//   if (newInterval[1] < intervals[0][0]) {
//     intervals.unshift(newInterval)
//     return intervals
//   }

//   const result = []
//   let left = -1
//   let right = -1
//   for (let i = 0; i < intervals.length; i++) {
//     const [partLeft, partRight] = intervals[i]

//     // 左边界
//     if (left < 0) {
//       if (a < partLeft) {
//         left = a
//       } else if (partLeft <= a && a <= partRight) {
//         left = partLeft
//       } else {
//         result.push(intervals[i])
//         continue
//       }
//     }

//     // 右边界
//     if (left >= 0 && right < 0) {
//       if (b < partLeft) {
//         right = b
//         result.push([left, right])
//         result.push(intervals[i])
//       } else if (partLeft <= b && b <= partRight) {
//         right = partRight
//         result.push([left, right])
//       } else if (i === intervals.length - 1) {
//         result.push([left, b])
//       }
//     } else if (left >= 0 && right >= 0) {
//       result.push(intervals[i])
//     }
//   }

//   return result
// }

function insert(intervals, newInterval) {
  let [left, right] = newInterval

  const result = []
  // 是否合并完成
  let placed = false

  intervals.forEach(interval => {
    if (right < interval[0]) {
      // 在插入区间的右侧且无交集
      if (!placed) {
        result.push([left, right])
        placed = true
      }
      result.push(interval)
    } else if (interval[1] < left) {
      // 在插入区间的左侧且无交集
      result.push(interval)
    } else {
      // 与插入区间有交集，更新它们的并集
      left = Math.min(left, interval[0])
      right = Math.max(right, interval[1])
    }
  })

  if (!placed) {
    result.push([left, right])
  }

  return result
}
// @lc code=end
