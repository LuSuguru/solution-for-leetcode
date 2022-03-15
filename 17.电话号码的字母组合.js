/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (!digits) {
    return []
  }

  const map = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  const result = []

  const dfs = (i = 0, str = '') => {
    if (i === digits.length) {
      result.push(str)
      return
    }

    const strArr = map[digits[i] - 2]

    for (let j = 0; j < strArr.length; j++) {
      dfs(i + 1, str + strArr[j])
    }
  }

  dfs()

  return result
}
// @lc code=end
