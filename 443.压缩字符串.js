/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  const { length } = chars

  let number = 0
  for (let i = 0, count = 1; i < length; i++, count++) {
    const next = chars[i + 1]
    const cur = chars[i]

    if (next !== cur || i + 1 === length) {
      chars[number++] = cur

      if (count > 1) {
        const countStr = count + ''
        for (let j = 0; j < countStr.length; j++) {
          chars[number++] = countStr[j]
        }
      }
      count = 0
    }
  }

  return number
}
// @lc code=end
