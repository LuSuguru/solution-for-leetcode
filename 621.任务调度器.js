/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// 我的憨批解法
function leastInterval(tasks, n) {
  if (n == 0) {
    return tasks.length
  }

  const map = new Map()
  for (let i = 0; i < tasks.length; i++) {
    map.set(tasks[i], (map.get(tasks[i]) || 0) + 1)
  }

  const arr = [...map.values()].sort((a, b) => b[1] - a[1])

  let result = 0

  while (arr.length) {
    const length = Math.min(arr.length, n + 1)
    for (let i = 0; i < length; i++) {
      arr[i]--
    }

    arr.sort((a, b) => b - a)
    if (arr[0] === 0) {
      result += arr.length
      break
    } else {
      result = result + n + 1
    }

    while (arr.length) {
      if (arr[arr.length - 1] === 0) {
        arr.pop()
      } else {
        break
      }
    }
  }

  return result
}

// 巧妙解法
function leastInterval(tasks, n) {
  if (n === 0) {
    return tasks.length
  }

  const jobs = new Array(26).fill(0)
  for (let i = 0; i < tasks.length; i++) {
    const index = tasks[i].charCodeAt() - 'A'.charCodeAt()
    jobs[index]++
  }

  jobs.sort((a, b) => b - a)

  const maxExec = jobs[0]
  // 用最大的任务数量计算包含冷却时间的最大值
  let result = (maxExec - 1) * (n + 1) + 1

  // 填入任务，利用冷却时间
  for (let i = 1; i < jobs.length; i++) {
    // 如果等于最大任务数量，冷却只能塞 maxExec - 1个，还有 1 个需要末尾添加
    if (jobs[i] === maxExec) {
      result++
    } else {
      break
    }
  }

  // 冷却时间如果全部利用完了，还不够调度，最少时间就是任务的长度
  return Math.max(result, tasks.length)
}
// @lc code=end
