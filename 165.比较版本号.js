/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const reg = /\d+(?=\.?)/g

  const v1Arr = version1.match(reg)
  const v2Arr = version2.match(reg)

  let i = 0

  const length = Math.max(v1Arr.length, v2Arr.length)

  for (i = 0; i < length; i++) {
    const v1Num = +v1Arr[i] || 0
    const v2Num = +v2Arr[i] || 0

    if (v1Num > v2Num) {
      return 1
    } if (v1Num < v2Num) {
      return -1
    }
  }

  return 0
}
// @lc code=end
