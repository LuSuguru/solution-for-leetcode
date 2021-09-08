/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 我的憨憨解法
function canPlaceFlowers(flowerbed, n) {
  let zeroNum = 1

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 1) {
      if (zeroNum >= 3) {
        n -= Math.floor((zeroNum - 3) / 2) + 1
      }

      zeroNum = 0
    } else {
      zeroNum++
    }
  }

  n -= Math.floor(zeroNum / 2, 10)

  return n <= 0
}
// @lc code=end
