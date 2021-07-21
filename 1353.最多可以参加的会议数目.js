s/*
 * @lc app=leetcode.cn id=1353 lang=javascript
 *
 * [1353] 最多可以参加的会议数目
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
// 普通的贪婪算法
function maxEvents(events) {
  events.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]))

  const set = new Set()
  // k 用来缓存，优化遍历效率
  let k = 0

  for (let i = 0; i < events.length; i++) {
    if (i !== 0 && events[i][0] < events[i - 1][0]) {
      k = 0
    }

    for (let j = Math.max(k, events[i][0]); j <= events[i][1]; j++) {
      // 如果当前天没安排，就安排上
      if (!set.has(j)) {
        set.add(j)
        k = j
        break
      }
    }
  }

  return set.size
}

// 贪婪加堆 实现，js原生无堆的实现，这里假设下
function maxEvents(events) {
  events.sort((a, b) => (a[0] - b[0]))
  const priorityQueue = []

  let result = 0
  let i = 0
  let day = 1

  while (i < events.length || !priorityQueue.isEmpty()) {
    // 将 day 天能参加的会议全部加入到优先队列，按照结束时间排序
    while (i < events.length && events[i][0] == day) {
      priorityQueue.add(events[i][1])
      i++
    }
    // 将已经结束的会议全部删掉
    while (!queue.isEmpty() && priorityQueue.top() < day) {
      priorityQueue.pop()
    }
    // 一天只能参加一场会议将结束时间最早的安排了
    if (!queue.isEmpty()) {
      priorityQueue.pop()
      result++
    }
    // 安排下一天
    day++
  }
  return result
}
// @lc code=end
