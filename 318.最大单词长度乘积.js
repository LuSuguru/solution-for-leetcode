/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
function maxProduct(words) {
  const { length } = words
  const map = new Array(length)

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      map[i] |= 1 << (words[i][j].charCodeAt() - 'a'.charCodeAt())
    }
  }

  let result = 0
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((map[i] & map[j]) === 0) {
        result = Math.max(words[i].length * words[j].length, result)
      }
    }
  }

  return result
}

// @lc code=end
