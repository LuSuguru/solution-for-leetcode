/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

// 我的憨批解法
function corpFlightBookings(bookings, n) {
  const result = new Array(n).fill(0)

  for (let i = 0; i < bookings.length; i++) {
    const [first, last, seats] = bookings[i]

    for (let j = first - 1; j < last; j++) {
      result[j] += seats
    }
  }

  return result
}

// 前缀和
function corpFlightBookings(bookings, n) {
  const result = new Array(n).fill(0)

  for (let i = 0; i < bookings.length; i++) {
    const [first, last, seats] = bookings[i]

    result[first - 1] += seats

    if (last < n) {
      result[last] -= seats
    }
  }

  for (let i = 1; i < result.length; i++) {
    result[i] += result[i - 1]
  }

  return result
}
// @lc code=end
