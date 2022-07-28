/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  if (n === 1) {
    return true
  }

  let a = getNewNumber(n)
  let b = getNewNumber(getNewNumber(n))

  do {
    a = getNewNumber(a)
    b = getNewNumber(getNewNumber(b))
  } while (a !== b)

  if (b === 1) {
    return true
  }

  return false
}

function getNewNumber(n) {
  let result = 0
  while (n !== 0) {
    result += (n % 10) ** 2
    n = Math.floor(n / 10)
  }

  return result
}
// @lc code=end
