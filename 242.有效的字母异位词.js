/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 解法1：map
function isAnagram(s, t) {
  if (s?.length !== t?.length) return false

  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
    map.set(t[i], (map.get(t[i]) || 0) - 1)
  }

  for (const value of map.values()) {
    if (value) {
      return false
    }
  }
  return true
}

// 解法2：sort
function isAnagram(s, t) {
  if (s?.length !== t?.length) return false

  s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  t = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false
    }
  }

  return true
}

// 解法三
function isAnagram(s, t) {
  if (s?.length !== t?.length) return false
  const num = new Array(26).fill(0)

  let i
  for (i = 0; i < s.length; i++) {
    num[s[i].charCodeAt() - 'a'.charCodeAt()]++
    num[t[i].charCodeAt() - 'a'.charCodeAt()]--
  }

  for (i = 0; i < 26; i++) {
    if (num[i]) {
      return false
    }
  }
  return true
}
// @lc code=end
