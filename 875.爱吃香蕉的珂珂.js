/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  // 最小速度
  let low = 1
  // 最大速度
  let high = piles.reduce((pre, cur) => Math.max(pre, cur), Number.MIN_SAFE_INTEGER)

  while (low < high) {
    const speed = (low + high) >> 1
    const time = piles.reduce((pre, cur) => pre + Math.floor((cur + speed - 1) / speed), 0)

    if (time <= h) {
      high = speed
    } else {
      low = speed + 1
    }
  }
  return low
}
// @lc code=end
