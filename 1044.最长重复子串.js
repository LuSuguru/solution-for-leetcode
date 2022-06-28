/*
 * @lc app=leetcode.cn id=1044 lang=javascript
 *
 * [1044] 最长重复子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function longestDupSubstring(s) {
  const MOD = 1000000007 // 大质数
  const B1 = 26 // constant
  const B2 = 31 // constant
  let ans = ''

  let left = 0; let
    right = s.length - 1
  while (left < right) {
    // 要 +1
    const mid = (left + right + 1) >> 1
    const checkedAns = check(mid)
    if (checkedAns.length > 0) {
      left = mid
      ans = checkedAns
    } else {
      right = mid - 1
    }
  }
  return ans

  function check(len) {
    let hashCode1 = 0
    let hashCode2 = 0
    const set1 = new Set()
    const set2 = new Set()
    let maxTerm1 = 1
    let maxTerm2 = 1
    for (let i = 0; i < s.length; i++) {
      if (i < len) {
        maxTerm1 = maxTerm1 * B1 % MOD
        maxTerm2 = maxTerm2 * B2 % MOD
        hashCode1 = (hashCode1 * B1 + s[i].charCodeAt(0)) % MOD
        hashCode2 = (hashCode2 * B2 + s[i].charCodeAt(0)) % MOD
      } else {
        hashCode1 = (hashCode1 * B1 + s[i].charCodeAt(0) - s[i - len].charCodeAt(0) * maxTerm1) % MOD
        // 减法之后有可能h1或者h2小于0，所以要+MOD
        if (hashCode1 < 0) hashCode1 += MOD
        hashCode2 = (hashCode2 * B2 + s[i].charCodeAt(0) - s[i - len].charCodeAt(0) * maxTerm2) % MOD
        if (hashCode2 < 0) hashCode2 += MOD
      }
      if (set1.has(hashCode1) && set2.has(hashCode2)) return s.slice(i + 1 - len, i + 1)
      if (i >= len - 1) {
        set1.add(hashCode1)
        set2.add(hashCode2)
      }
    }
    return ''
  }
}

// @lc code=end
