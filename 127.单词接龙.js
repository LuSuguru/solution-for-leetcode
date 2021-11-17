/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 双向 BFS
function ladderLength(beginWord, endWord, wordList) {
  const end = wordList.indexOf(endWord)
  if (end === -1) return 0

  wordList.push(beginWord)
  const start = wordList.length - 1

  // 队列，访问过的节点记录，start -> end 一份，end -> start 一份
  let queue1 = [start]
  let queue2 = [end]
  let visited1 = new Array(wordList.length)
  let visited2 = new Array(wordList.length)
  visited1[start] = true
  visited2[end] = true

  let step = 0

  while (queue1.length && queue2.length) {
    step++

    // 哪边分支条件少，用哪边
    if (queue1.length > queue2.length) {
      let tmp = queue1
      queue1 = queue2
      queue2 = tmp

      tmp = visited1
      visited1 = visited2
      visited2 = tmp
    }

    let { length } = queue1

    while (length--) {
      const word = wordList[queue1.shift()]

      for (let i = 0; i < wordList.length; i++) {
        if (visited1[i]) continue
        if (!canMarry(word, wordList[i])) continue

        if (visited2[i]) return step + 1

        queue1.push(i)
        visited1[i] = true
      }
    }
  }
  return 0
}

function canMarry(a, b) {
  let diff = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (++diff > 1) {
        return false
      }
    }
  }
  return diff === 1
}
// @lc code=end
