/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
  // 从小到大排序
  people = people.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })

  const queue = new Array(people.length)

  for (let i = 0; i < people.length; i++) {
    let num = 0
    for (let j = 0; j < queue.length; j++) {
      if (!queue[j]) {
        num++
      }

      if (num === people[i][1] + 1) {
        queue[j] = people[i]
        num = 0
        break
      }
    }
  }

  return queue
}
// @lc code=end
