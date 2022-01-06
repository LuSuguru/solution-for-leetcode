/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (s === t) {
    return t
  }

  if (s.length < t.length) {
    return ''
  }

  const charMap = {}
  for (let i = 0; i < t.length; i++) {
    charMap[t[i]] = (charMap[t[i]] || 0) + 1
  }

  // 双指针+滑动窗口
  let left = 0
  let right = 0

  let start = 0
  let size = Number.MAX_SAFE_INTEGER

  let count = t.length

  while (right < s.length) {
    const c = s[right]

    if (charMap[c] > 0) {
      count--
    }

    if (Reflect.has(charMap, c)) {
      charMap[c]--
    }

    if (count === 0) {
      // 左窗口右移
      while (!Reflect.has(charMap, s[left]) || charMap[s[left]] < 0) {
        if (Reflect.has(charMap, s[left])) {
          charMap[s[left]]++
        }
        left++
      }

      if (right - left < size) {
        size = right - left
        start = left
      }

      // 左窗口一定指向 t 里的元素，所以要跳过
      charMap[s[left]]++
      left++

      count++
    }

    // 右窗口右移
    right++
  }

  return size == Number.MAX_SAFE_INTEGER ? '' : s.substring(start, start + size + 1)
}
// @lc code=end
