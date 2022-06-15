/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function nextGreaterElement(n) {
  const strArr = (n + '').split('')

  for (let i = strArr.length - 2; i >= 0; i--) {
    if (strArr[i] < strArr[i + 1]) {
      for (let j = strArr.length - 1; j > i; j--) {
        if (strArr[j] > strArr[i]) {
          const tmp = strArr[j]
          strArr[j] = strArr[i]
          strArr[i] = tmp

          const next = strArr.splice(i + 1).sort((a, b) => a - b)
          strArr.push(...next)
          const result = +strArr.join('')
          return result >= 2 ** 31 ? -1 : result
        }
      }
    }
  }
  return -1
}
// @lc code=end
