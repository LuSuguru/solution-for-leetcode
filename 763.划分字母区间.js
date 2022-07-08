/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
// abaccbdeffed
// a [0,2]
// b [1,5]
// c [3,4]
// d [6,11]
// e [7,10]
// f [8,9]
//
function partitionLabels(s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.get(s[i])[1] = i
    } else {
      map.set(s[i], [i, i])
    }
  }

  const sections = [...map.values()].sort((a, b) => a[0] - b[0])

  const result = [sections[0]]
  for (let i = 1; i < sections.length; i++) {
    const lastIndex = result.length - 1

    const [lastStart, lastEnd] = result[lastIndex]
    const [curStart, curEnd] = sections[i]

    if (lastStart <= curStart && curStart <= lastEnd) {
      result[lastIndex][0] = Math.min(lastStart, curStart)
      result[lastIndex][1] = Math.max(lastEnd, curEnd)
    } else {
      result[lastIndex] = lastEnd - lastStart + 1
      result.push(sections[i])
    }
  }

  const lastIndex = result.length - 1

  const [lastStart, lastEnd] = result[lastIndex]
  result[lastIndex] = lastEnd - lastStart + 1

  return result
}

// 贪心
function partitionLabels(s) {
  const last = new Map()
  const { length } = s

  for (let i = 0; i < length; i++) {
    last.set(s[i], i)
  }

  const result = []
  let start = 0
  let end = 0

  for (let i = 0; i < length; i++) {
    end = Math.max(end, last.get(s[i]))

    if (i === end) {
      result.push(end - start + 1)
      start = end + 1
    }
  }
  return result
}
// @lc code=end
