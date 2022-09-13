/*
 * @lc app=leetcode.cn id=149 lang=javascript
 *
 * [149] 直线上最多的点数
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// function maxPoints(points) {
//   const { length } = points

//   if (length < 3) return length

//   let result = 0

//   for (let i = 0; i < length; i++) {
//     let same = 1

//     for (let j = i + 1; j < length; j++) {
//       if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
//         same++
//       } else {
//         let count = 1

//         const xAxis = points[j][0] - points[i][0]
//         const yAxis = points[j][1] - points[i][1]

//         for (let k = j + 1; k < length; k++) {
//           if (xAxis * (points[i][1] - points[k][1]) === yAxis * (points[i][0] - points[k][0])) {
//             count++
//           }
//         }

//         result = Math.max(result, count + same)
//       }
//     }

//     if (result > length / 2) return result
//   }
//   return result
// }

function maxPoints(points) {
  const n = points.length
  if (n <= 2) {
    return n
  }
  let ret = 0
  for (let i = 0; i < n; i++) {
    if (ret >= n - i || ret > n / 2) {
      break
    }

    const map = new Map()
    for (let j = i + 1; j < n; j++) {
      let x = points[i][0] - points[j][0]
      let y = points[i][1] - points[j][1]

      const gcdXY = gcd(x, y)
      x /= gcdXY
      y /= gcdXY

      const key = x + '_' + y
      map.set(key, (map.get(key) || 0) + 1)
    }

    let maxn = 0
    for (const num of map.values()) {
      maxn = Math.max(maxn, num + 1)
    }
    ret = Math.max(ret, maxn)
  }

  return ret
}

const gcd = (a, b) => (b != 0 ? gcd(b, a % b) : a)
// @lc code=end
