/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function shortestPalindrome(s) { // s：ananab
  const { length } = s
  const rev = s.split('').reverse().join('')// rev：banana

  for (let i = length; i >= 0; i--) {
    if (s.substring(0, i) == rev.substring(length - i)) {
      return rev.substring(0, length - i) + s // 返回 b + ananab
    }
  }
}

// TODO: kmp，需要学习
function shortestPalindrome(s) {
  const rev_s = s.split('').reverse().join('')
  const str = s + '#' + rev_s
  const next = new Array(str.length).fill(0)
  // 抽出来，方便学习记忆，这是我写的模板
  const kmp = (next, str) => {
    next[0] = 0
    let len = 0
    let i = 1
    while (i < str.length) {
      if (str[i] == str[len]) {
        len++
        next[i] = len
        i++
      } else if (len == 0) {
        next[i] = 0
        i++
      } else {
        len = next[len - 1]
      }
    }
  }
  kmp(next, str)
  const maxLen = next[str.length - 1] // 最长回文前缀的长度
  const add = s.substring(maxLen).split('').reverse().join('')
  return add + s
}

// @lc code=end
