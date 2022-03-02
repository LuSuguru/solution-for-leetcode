/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 我的解法
function reorganizeString(s) {
  const res = []
  const pre = []

  for (let i = 0; i < s.length; i++) {
    if (res[res.length - 1] !== s[i]) {
      res.push(s[i])

      if (pre.length > 0) {
        res.push(pre.pop())
      }
    } else if (res[0] !== s[i]) {
      res.unshift(s[i])
      if (pre.length > 0) {
        res.unshift(s[i])
      }
    } else {
      pre.push(s[i])
    }
  }

  while (pre.length > 0) {
    const c = pre.pop()

    for (let i = 0; i < res.length - 1; i++) {
      if (res[i] !== c && res[i + 1] !== c) {
        res.splice(i + 1, 0, c)
        break
      }
    }
  }

  if (res.length === s.length) {
    return res.join('')
  }
  return ''
}

function reorganizeString(s) {
  const aph = new Array(26).fill(0)
  const { length } = s

  for (let i = 0; i < s.length; i++) {
    aph[s[i].charCodeAt() - 'a'.charCodeAt()]++
  }

  let idx = 0
  let max = Number.MIN_VALUE

  for (let i = 0; i < 26; i++) {
    if (aph[i] > max) {
      max = aph[i]
      idx = i

      // 超过字符串长度一半，则无法填满
      if (max > (length + 1) / 2) {
        return ''
      }
    }
  }

  const res = []

  // 位数
  let cnt = 0

  // 先用最多的字符把偶数位填满
  while (aph[idx]-- > 0) {
    res[cnt] = String.fromCharCode('a'.charCodeAt() + idx)
    cnt += 2
  }
  for (let i = 0; i < 26; i++) {
    while (aph[i]-- > 0) {
      if (cnt >= length) {
        cnt = 1
      }

      res[cnt] = String.fromCharCode('a'.charCodeAt() + i)
      cnt += 2
    }
  }
  return res.join('')
}
// @lc code=end
