/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 我的渣渣解法
function isSubsequence(s, t) {
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i]

    const curIndex = t.indexOf(sChar)

    if (curIndex === -1) {
      return false
    }
    t = t.slice(curIndex + 1)
  }

  return true
}

// 双指针
function isSubsequence(s, t) {
  let i = 0
  let j = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === s.length
}

// 动态规划
function isSubsequence(s, t) {
  const n = s.length
  const m = t.length

  // a的编码位置
  const aCharCode = 'a'.charCodeAt()

  //
  /**
   * 构造字符串t的状态表，用二维数组f[i][j]表示，i表示t中的位置，j表示字母a-z
   * 从最后一位开始，当前位置的字母位为当前位置i,其余的为上一位字母，如对于ahbgdc
   *   a b c d e f g h i j k l m n o p q r s t u v w x y z
   * 0 0 2 5 4 m m 3 1 m m m m m m m m m m m m m m m m m m
   * 1 m 2 5 4 m m 3 1 m m m m m m m m m m m m m m m m m m
   * 2 m 2 5 4 m m 3 m m m m m m m m m m m m m m m m m m m
   * 3 m m 5 4 m m 3 m m m m m m m m m m m m m m m m m m m
   * 4 m m 5 4 m m m m m m m m m m m m m m m m m m m m m m
   * 5 m m 5 m m m m m m m m m m m m m m m m m m m m m m m
   * 6 m m m m m m m m m m m m m m m m m m m m m m m m m m
   *
   *
   */
  const f = new Array(m + 1)

  for (let i = 0; i < f.length; i++) {
    f[i] = new Array(26)
  }

  for (let i = 0; i < 26; i++) {
    f[m][i] = m
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      if (t[i].charCodeAt() === j + aCharCode) {
        f[i][j] = i
      } else {
        f[i][j] = f[i + 1][j]
      }
    }
  }

  // 由于每个字符的位置在表中都有，通过一个指针，直接往下走
  let add = 0
  for (let i = 0; i < n; i++) {
    const code = s[i].charCodeAt() - aCharCode
    if (f[add][code] == m) {
      return false
    }
    add = f[add][code] + 1
  }
  return true
}
// @lc code=end
