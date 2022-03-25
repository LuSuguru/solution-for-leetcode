/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    if (s.length % i === 0) {
      const partLength = s.length / i

      let j = 0
      for (j; j < partLength - 1; j++) {
        if (s.substring(j * i, (j + 1) * i) !== s.substring((j + 1) * i, (j + 2) * i)) {
          break
        }
      }

      if (j === partLength - 1) {
        return true
      }
    }
  }

  return false
}

// 假设给定字符串s可由一个子串x重复n次构成，即s=nx
// 现构造新字符串t=2s，即两个s相加，由于s=nx，则t=2nx
// 去掉t的开头与结尾两位，则这两处的子串被破坏掉，此时t中包含2n-2个子串。 由于t中包含2n-2个子串，s中包含n个子串，若t中包含s，则有2n-2>=n，可得n>=2
// 由此我们可知字符串s可由一个子串x重复至少2次构成，判定为true
// 反之，若t中不包含s，则有2n-2<n，可得n<2，n只能为1
// 由此我们可知字符串s=x，假定的子串就为s本身，判定为false

function repeatedSubstringPattern(s) {
  return (s + s).substr(1, s.length * 2 - 2).includes(s)
}
// @lc code=end
