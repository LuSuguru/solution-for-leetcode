/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  const cross = (i) => {
    let j = 1
    let cur = 0
    while (j <= gas.length + 1) {
      if (j === 1) {
        cur += gas[i]
      } else {
        cur -= cost[i === 0 ? gas.length - 1 : i - 1]
        if (cur < 0) {
          return false
        }

        if (j !== gas.length + 1) {
          cur += gas[i]
        }
      }

      i++
      j++
      if (i > gas.length - 1) {
        i -= gas.length
      }
    }

    return true
  }

  let isSame = false
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] == cost[i]) {
      if (i === 0) {
        isSame = true
      }
      if (i === gas.length - 1 && isSame) {
        return 0
      }
      continue
    }

    isSame = false

    if (gas[i] > cost[i]) {
      if (cross(i)) {
        return i
      }
    }
  }

  return -1
}

function canCompleteCircuit(gas, cost) {
  let rest = 0
  let total = 0
  let start = 0

  for (let i = 0; i < gas.length; i++) {
    rest += gas[i] - cost[i]
    total += gas[i] - cost[i]

    if (rest < 0) {
      start = i + 1
      rest = 0
    }
  }

  return total < 0 ? -1 : start
}
// @lc code=end
