/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
function canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity) {
  const stack = []
  // 记录步骤
  stack.push([0, 0])
  // 防止重复步骤
  const seen = new Set()

  while (stack.length) {
    if (seen.has(hash(stack[stack.length - 1]))) {
      stack.pop()
      continue
    }

    seen.add(hash(stack[stack.length - 1]))
    const [remainX, remainY] = stack.pop()

    if (remainX === targetCapacity || remainY === targetCapacity || remainX + remainY === targetCapacity) {
      return true
    }

    // 把 X 装满
    stack.push([jug1Capacity, remainY])
    // 把 X 清空
    stack.push([0, remainY])
    // 把 Y 装满
    stack.push([remainX, jug2Capacity])
    // 把 Y 清空
    stack.push([remainX, 0])
    // 把 X 倒入 Y
    stack.push([remainX - Math.min(remainX, jug2Capacity - remainY), remainY + Math.min(remainX, jug2Capacity - remainY)])
    // 把 Y 倒入 X
    stack.push([remainX + Math.min(jug1Capacity - remainX, remainY), remainY - Math.min(jug1Capacity - remainX, remainY)])
  }

  return false
}

const hash = ([x, y]) => `${x}${y}`

// @lc code=end
