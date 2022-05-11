/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const roman2IntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const carryMap = {
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C'
  }

  let i = s.length - 1

  let result = 0
  while (i >= 0) {
    if (i - 1 >= 0 && carryMap[s[i]] === s[i - 1]) {
      result = result + roman2IntMap[s[i]] - roman2IntMap[s[i - 1]]
      i -= 2
    } else {
      result += roman2IntMap[s[i]]
      i--
    }
  }

  return result
}

function romanToInt(s) {
  const roman2IntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && roman2IntMap[s[i]] < roman2IntMap[s[i + 1]]) {
      result -= roman2IntMap[s[i]]
    } else {
      result += roman2IntMap[s[i]]
    }
  }
  return result
}
// @lc code=end
