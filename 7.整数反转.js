/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const str = x + ''
  const strArr = str.match(/\d/g)

  let newNum = 0
  for (let i = 0; i < strArr.length; i++) {
    newNum += 10 ** i * strArr[i]
  }

  if (x < 0) {
    newNum = -newNum
  }

  if (newNum < -(2 ** 31) || newNum > 2 ** 31 - 1) {
    return 0
  }

  return newNum
}
// @lc code=end
