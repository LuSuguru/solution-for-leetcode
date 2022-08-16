/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 判断不同字符数 滑动窗口 + map
function checkInclusion(s1, s2) {
  let { length } = s1

  const map = {}
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = (map[s1[i]] || 0) + 1
  }

  let a = 0
  let b = 0

  while (b < s2.length) {
    if (map[s2[b]] > 0) {
      map[s2[b]]--
      length--

      b++
    } else if (a < b) {
      map[s2[a]]++
      length++

      a++
    } else {
      a++
      b++
    }

    if (length === 0) {
      return true
    }
  }

  return length === 0
}

// 判断长度是否达标 滑动窗口 + map
function checkInclusion(s1, s2) {
  const n = s1.length
  const m = s2.length
  if (n > m) {
    return false
  }
  const cnt = new Array(26).fill(0)
  for (let i = 0; i < n; ++i) {
    --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()]
  }
  let left = 0
  for (let right = 0; right < m; ++right) {
    const x = s2[right].charCodeAt() - 'a'.charCodeAt()
    ++cnt[x]
    while (cnt[x] > 0) {
      --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()]
      ++left
    }
    if (right - left + 1 === n) {
      return true
    }
  }
  return false
}
// @lc code=end
