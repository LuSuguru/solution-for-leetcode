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
    const prev = chars[i - 1]
    const cur = chars[i]

    if (prev !== cur || i === length) {
      chars[number] = cur
      chars[num]

      prev = cur
      number = i
    } else {
      number++
    }
  }

  return
}
// @lc code=end
