/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
  const map = {}
  const result = []

  for (let i = 10; i <= s.length; i++) {
    const part = s.substring(i - 10, i)

    if (map[part]) {
      map[part]++
    } else {
      map[part] = 1
    }

    if (map[part] === 2) {
      result.push(part)
    }
  }

  return result
}
// @lc code=end
