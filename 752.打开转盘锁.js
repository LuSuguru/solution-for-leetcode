/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function openLock(deadends, target) {
  const visited = new Set(deadends)

  if (visited.has('0000')) {
    return -1
  }

  if (target === '0000') {
    return 0
  }

  visited.add(target)

  const queue = [target]
  let step = 0

  while (queue.length) {
    let { length } = queue
    step++

    while (length--) {
      const node = queue.shift()

      for (let i = 0; i < 8; i++) {
        let curNode = ''
        for (let j = 0; j < node.length; j++) {
          let cur = node[j]

          if (j === i >> 1) {
            if (i % 2 === 1) {
              if (cur > 0) {
                cur -= 1
              }
            } else {
              cur = (+cur + 1) % 10
            }
          }

          curNode += cur
        }

        if (curNode === '0000') {
          return step
        }

        if (!visited.has(curNode)) {
          visited.add(curNode)
          queue.push(curNode)
        }
      }
    }
  }

  return -1
}
// @lc code=end
