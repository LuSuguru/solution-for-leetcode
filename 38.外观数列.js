/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

function countAndSay(n) {
  if (n === 1) return '1'
  const pre = countAndSay(n - 1)

  let result = ''
  let number = 1
  let prevChar = pre[0]

  for (let i = 1; i < pre.length; i++) {
    if (prevChar !== pre[i]) {
      result += `${number}${prevChar}`

      number = 1
      prevChar = pre[i]
    } else {
      number++
    }
  }
  result += `${number}${prevChar}`

  return result
}
// @lc code=end
