/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0)
  const adjacency = new Map()

  for (let i = 0; i < prerequisites.length; i++) {
    indegree[prerequisites[i][0]]++

    if (adjacency.has(prerequisites[i][1])) {
      adjacency.get(prerequisites[i][1]).push(prerequisites[i][0])
    } else {
      adjacency.set(prerequisites[i][1], [prerequisites[i][0]])
    }
  }

  const queue = []
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i)
    }
  }

  const result = []

  while (queue.length > 0) {
    const i = queue.shift()
    result.push(i)
    numCourses--

    const next = adjacency.get(i) || []
    for (let i = 0; i < next.length; i++) {
      indegree[next[i]]--
      if (indegree[next[i]] === 0) {
        queue.push(next[i])
      }
    }
  }

  if (numCourses === 0) {
    return result
  }
  return []
}
// @lc code=end
