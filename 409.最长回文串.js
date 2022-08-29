/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 我的憨批解法
function longestPalindrome(s) {
  const arr = new Array(58).fill(0)

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'A'.charCodeAt()
    arr[index]++
  }

  arr.sort((a, b) => b - a)
  let isOdd = true

  let result = 0

  arr.forEach(item => {
    if (item % 2 === 0) {
      result += item
    } else if (isOdd) {
      result += item
      isOdd = false
    } else {
      result = result + item - 1
    }
  })

  return result
}

// 巧妙解法
function longestPalindrome(s) {
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }

  const result = s.length - set.size

  return set.size === 0 ? result : result + 1
}
// @lc code=end
