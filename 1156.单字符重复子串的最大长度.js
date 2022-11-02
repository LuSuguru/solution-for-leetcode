/*
 * @lc app=leetcode.cn id=1156 lang=javascript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
function maxRepOpt1(text) {
  if (text.length === 1) return 1
  let result = 0

  const arr = new Array(26).fill(0)

  for (let i = 0; i < text.length; i++) {
    const index = text[i].charCodeAt() - 'a'.charCodeAt()
    arr[index]++
  }

  for (let i = 0; i < text.length - 1; i++) {
    let used = i
    let j = i + 1

    for (j; j < text.length; j++) {
      if (text[i] !== text[j]) {
        if (used === i) {
          used = j
        } else {
          break
        }
      }
    }

    const num = j - i
    const index = text[i].charCodeAt() - 'a'.charCodeAt()

    // 滑动窗口到底了，且没有占用一个元素
    if (j === text.length && used === i) {
      if (arr[index] > num) {
        result = Math.max(num + 1, result)
      } else {
        result = Math.max(num, result)
      }
    } else if (arr[index] >= num) {
      result = Math.max(num, result)
    } else {
      result = Math.max(num - 1, result)
    }

    // 占用了一个不同的元素，从不同的元素开始
    if (used !== i) {
      i = used - 1
    }
  }

  return result
}
// @lc code=end
