/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
function maximumSwap(num) {
  const str = (num + '').split('')

  for (let i = 0; i < str.length; i++) {
    let maxBit = str[i]
    let index = -1

    for (let j = i + 1; j < str.length; j++) {
      if (str[j] >= maxBit) {
        maxBit = str[j]
        index = j
      }
    }

    if (maxBit !== str[i]) {
      const mid = str[i]
      str[i] = str[index]
      str[index] = mid

      return +str.join('')
    }
  }

  return num
}
// @lc code=end
