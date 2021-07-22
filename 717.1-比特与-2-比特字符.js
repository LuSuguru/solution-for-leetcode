/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
function isOneBitCharacter(bits) {
  let i = 0

  while (i < bits.length - 1) {
    if (bits[i] === 0) {
      i++
    }

    if (bits[i] == 1) {
      i += 2
    }
  }

  return i === bits.length - 1
}

function isOneBitCharacter(bits) {
  let i = bits.length - 2

  let count = 0
  while (i >= 0 && bits[i--] === 1) {
    count++
  }

  return count % 2 === 0
}
// @lc code=end
