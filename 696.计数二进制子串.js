/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 我的憨批解法
function countBinarySubstrings(s) {
  const { length } = s
  let result = 0

  for (let i = 0; i < length - 1; i++) {
    if (s[i] === s[i + 1]) {
      continue
    }

    result++

    let left = i - 1
    let right = i + 2
    while (left >= 0 || right <= length - 1) {
      if ((s[left] === s[left + 1]) && s[right] === s[right - 1]) {
        result++
        left--
        right++
      } else {
        break
      }
    }
  }

  return result
}

function countBinarySubstrings(s) {
  let i = 0
  const { length } = s
  let result = 0
  let last = 0

  while (i < length) {
    const cur = s[i]
    let count = 0

    while (i < length && s[i] === cur) {
      i++
      count++
    }

    result += Math.min(count, last)
    last = count
  }

  return result
}
// @lc code=end
