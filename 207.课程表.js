/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 拓扑排序 + bfs
function canFinish(numCourses, prerequisites) {
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

  while (queue.length > 0) {
    const i = queue.shift()
    numCourses--

    const next = adjacency.get(i) || []
    for (let i = 0; i < next.length; i++) {
      indegree[next[i]]--
      if (indegree[next[i]] === 0) {
        queue.push(next[i])
      }
    }
  }

  return numCourses === 0
}

// 拓扑排序 + dfs
function canFinish(numCourses, prerequisites) {
  const flags = new Array(numCourses)

  const adjacency = new Map()
  for (let i = 0; i < prerequisites.length; i++) {
    if (adjacency.has(prerequisites[i][1])) {
      adjacency.get(prerequisites[i][1]).push(prerequisites[i][0])
    } else {
      adjacency.set(prerequisites[i][1], [prerequisites[i][0]])
    }
  }

  // flag 标志位
  // flag = -1: 说明当前访问节点已被其他节点启动的 DFS 访问，无需再重复搜索，直接返回 True
  // flag = 1:说明在本轮 DFS 搜索中节点 i 被第 2 次访问，即 课程安排图有环 ，直接返回 False
  const dfs = (i) => {
    if (flags[i] === 1) return false
    if (flags[i] === -1) return true

    flags[i] = 1
    const next = adjacency.get(i) || []
    for (let j = 0; j < next.length; j++) {
      if (!dfs(next[j])) return false
    }
    flags[i] = -1

    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false
  }

  return true
}
// @lc code=end
