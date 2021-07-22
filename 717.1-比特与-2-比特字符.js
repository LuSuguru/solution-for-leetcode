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

// 当数组中有0时，说明前面一定是可以解析的，所以只要保证最后1个0之前有偶数个1，说明最后一位一定可以解析成 1 比特
function isOneBitCharacter(bits) {
  let i = bits.length - 2

  let count = 0
  while (i >= 0 && bits[i--] === 1) {
    count++
  }

  return count % 2 === 0
}
// @lc code=end
