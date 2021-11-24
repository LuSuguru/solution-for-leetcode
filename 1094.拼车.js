/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  // 按出发点排序
  trips.sort((a, b) => {
    if (a[1] - b[1] !== 0) {
      return a[1] - b[1]
    }
    return a[2] - b[2]
  })

  let currentPassengers = 0
  const inTheCar = []

  for (let i = 0; i < trips.length; i++) {
    const [passengers, startLocation, endLocation] = trips[i]

    // 小于当前起始站的下车
    while (inTheCar.length > 0 && inTheCar[0][1] <= startLocation) {
      currentPassengers -= inTheCar.shift()[0]
    }

    // 更新当前车上数量
    currentPassengers += passengers

    if (currentPassengers > capacity) {
      return false
    }

    // 上车
    const index = inTheCar.findIndex(([, end]) => end > endLocation)
    if (index !== -1) {
      inTheCar.splice(index, 0, [passengers, endLocation])
    } else {
      inTheCar.push([passengers, endLocation])
    }
  }

  return true
}

function carPooling(trips, capacity) {
  const arr = []

  for (let i = 0; i < trips.length; i++) {
    arr[trips[i][1]] = (arr[trips[i][1]] || 0) + trips[i][0]
    arr[trips[i][2]] = (arr[trips[i][2]] || 0) - trips[i][0]
  }

  let passengers = 0
  for (let i = 0; i < arr.length; i++) {
    passengers += arr[i] || 0
    if (passengers > capacity) return false
  }
  return true
}
// @lc code=end
