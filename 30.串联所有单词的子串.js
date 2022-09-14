/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  const wordLength = words[0].length
  const num = words.length
  const wordsLength = wordLength * num

  if (s.length < wordsLength) return []

  const map = words.reduce((pre, word, index) => {
    if (pre[word]?.length) {
      pre[word].push(index)
    } else {
      pre[word] = [index]
    }

    return pre
  }, {})

  const visited = new Array(num).fill(false)

  const result = []

  for (let i = 0; i <= s.length - wordsLength; i++) {
    for (let n = 0; n < visited.length; n++) {
      visited[n] = false
    }

    let j = 0

    for (j; j < num; j++) {
      const char = s.substring(i + j * wordLength, i + (j + 1) * wordLength)

      if (map[char]?.length) {
        let index = -1

        map[char].forEach(item => {
          if (!visited[item]) {
            index = item
          }
        })

        if (index !== -1) {
          visited[index] = true
        } else {
          break
        }
      } else {
        break
      }
    }

    if (j === num) {
      result.push(i)
    }
  }

  return result
}
// @lc code=end
