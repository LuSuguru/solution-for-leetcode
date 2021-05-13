/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// function reverseWords(s) {
//   const arr = s.match(/(?<=\s*)(\S+)/g)

//   if (!arr.length) {
//     return ''
//   }

//   return arr.reverse().join(' ')
// }

function reverseWords(s) {
  let result = ''

  let word = ''
  for (let i = 0; i < s.length + 1; i++) {
    const cur = s[i] || ' '
    const prev = s[i - 1] || ' '

    if (prev == ' ' && cur !== ' ') {
      word = cur
    }

    if (prev !== ' ' && cur !== ' ') {
      word += cur
    }

    if (prev !== ' ' && cur === ' ') {
      if (result) {
        result = `${word} ${result}`
      } else {
        result = word
      }
      word = ''
    }

    if (prev === ' ' && cur === ' ') {
      continue
    }
  }

  return result
}
// @lc code=end
