/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  const max = Math.ceil(x / 2)

  let diff = Number.MAX_SAFE_INTEGER
  let res = 0

  for (let i = 0; i <= max; i++) {
    const cal = x - i * i

    if (cal < 0) {
      return res
    }

    if (cal < diff) {
      res = i
      diff = cal
    }
  }
  return res
}

function mySqrt(x) {
  if (x === 0 || x === 1) {
    return x
  }

  let left = 0
  let right = x
  let mid = 0

  while (left <= right) {
    mid = left + ((right - left) >> 1)

    if (mid > x / mid) {
      right = mid - 1
    } else if (mid < x / mid) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
}
// @lc code=end
