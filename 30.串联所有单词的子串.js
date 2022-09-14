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
// 我的解法
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

// 官方，滑动窗口
function findSubstring(s, words) {
  const res = []
  const m = words.length;
  const n = words[0].length;
  const ls = s.length

  for (let i = 0; i < n; i++) {
    if (i + m * n > ls) {
      break
    }

    const differ = new Map()

    for (let j = 0; j < m; j++) {
      const word = s.substring(i + j * n, i + (j + 1) * n)
      differ.set(word, (differ.get(word) || 0) + 1)
    }

    for (const word of words) {
      differ.set(word, (differ.get(word) || 0) - 1)
      if (differ.get(word) === 0) {
        differ.delete(word)
      }
    }

    for (let start = i; start < ls - m * n + 1; start += n) {
      if (start !== i) {
        let word = s.substring(start + (m - 1) * n, start + m * n)
        differ.set(word, (differ.get(word) || 0) + 1)

        if (differ.get(word) === 0) {
          differ.delete(word)
        }

        word = s.substring(start - n, start)
        differ.set(word, (differ.get(word) || 0) - 1)
        if (differ.get(word) === 0) {
          differ.delete(word)
        }
      }

      if (differ.size === 0) {
        res.push(start)
      }
    }
  }
  return res
}
// @lc code=end
