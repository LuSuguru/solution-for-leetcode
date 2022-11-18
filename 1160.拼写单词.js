/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
  const charMap = new Map()

  for (let i = 0; i < chars.length; i++) {
    charMap.set(chars[i], (charMap.get(chars[i]) || 0) + 1)
  }

  let result = 0
  for (let i = 0; i < words.length; i++) {
    const wordMap = new Map()

    const word = words[i]
    let flag = true
    for (let j = 0; j < word.length; j++) {
      wordMap.set(word[j], (wordMap.get(word[j]) || 0) + 1)

      if ((charMap.get(word[j]) || 0) < wordMap.get(word[j])) {
        flag = false
        break
      }
    }

    if (flag) {
      result += word.length
    }
  }

  return result
}
// @lc code=end
