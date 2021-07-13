/*
 * @lc app=leetcode.cn id=1410 lang=javascript
 *
 * [1410] HTML 实体解析器
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
function entityParser(text) {
  const keyMap = {
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&frasl;': '/'
  }

  let char = ''
  let result = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '&') {
      if (char) {
        result += char
        char = ''
      }
      char += '&'
    } else if (text[i] === ';') {
      if (char) {
        char += ';'

        const key = keyMap[char]
        result += key || char

        char = ''
      } else {
        result += ';'
      }
    } else if (char) {
      char += text[i]
    } else {
      result += text[i]
    }
  }

  result += char
  return result
}
// @lc code=end
