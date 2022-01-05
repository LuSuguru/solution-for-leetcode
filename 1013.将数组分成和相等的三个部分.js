/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canThreePartsEqualSum(arr) {
  let sum = arr.reduce((pre, cur) => pre + cur, 0)

  if (sum % 3 !== 0) {
    return false
  }
  sum /= 3

  let n = 0
  let part = 0
  for (let i = 0; i < arr.length - 1; i++) {
    part += arr[i]

    if (part === sum) {
      n++

      if (n === 2) {
        return true
      }
      part = 0
    }
  }

  return false
}
// @lc code=end
