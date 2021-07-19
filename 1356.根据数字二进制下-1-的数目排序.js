/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
  const get1Number = (number) => {
    let res = 0
    while (number !== 0) {
      res += number % 2
      number = Math.floor(number / 2)
    }

    return res
  }

  arr.sort((a, b) => {
    const a1 = get1Number(a)
    const b1 = get1Number(b)

    if (a1 - b1 !== 0) return a1 - b1
    return a - b
  })

  return arr
}
// @lc code=end
