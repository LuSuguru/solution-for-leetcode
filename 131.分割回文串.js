/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const visited = new Map()

  const result = []

  const check = (i, j) => {
    while (i <= j) {
      if (s[i] !== s[j]) return false

      i++
      j--
    }
    return true
  }

  const temp = []

  const backTracking = (index = 0) => {
    if (index === s.length) {
      result.push([...temp])
      return
    }

    for (let i = index; i < s.length; i++) {
      const key = `${index}${i}`

      let isCheck = false
      if (visited.has(key)) {
        isCheck = visited.get(key)
      } else {
        isCheck = check(index, i)
        visited.set(key, isCheck)
      }

      if (isCheck) {
        temp.push(s.substring(index, i + 1))
        backTracking(i + 1)
        temp.pop()
      }
    }
  }

  backTracking()

  return result
}
// @lc code=end
