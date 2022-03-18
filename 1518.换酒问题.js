/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
  let result = numBottles

  let curr = numBottles
  while (curr >= numExchange) {
    const newBottles = Math.floor(curr / numExchange)
    result += newBottles

    curr = newBottles + curr % numExchange
  }
  return result
}
// @lc code=end
