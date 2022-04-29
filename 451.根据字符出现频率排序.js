/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++
    } else {
      map[s[i]] = 1
    }
  }

  const arr = Object.entries(map).sort((a, b) => b[1] - a[1])

  let result = ''
  for (let i = 0; i < arr.length; i++) {
    let [char, num] = arr[i]

    while (num > 0) {
      result += char
      num--
    }
  }

  return result
}
// @lc code=end
