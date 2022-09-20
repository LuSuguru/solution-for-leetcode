/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const map = new Map()

  words.forEach(word => map.set(word, (map.get(word) || 0) + 1))

  const arr = [...map].sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1]
    }

    return a[0].localeCompare(b[0])
  })

  return arr.splice(0, k).map(item => item[0])
}
// @lc code=end
