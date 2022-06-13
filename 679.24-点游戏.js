/*
 * @lc app=leetcode.cn id=679 lang=javascript
 *
 * [679] 24 点游戏
 */

// @lc code=start
/**
 * @param {number[]} cards
 * @return {boolean}
 */

function judgePoint24(cards) {
  const { length } = cards
  let isValid = false

  if (length === 1) {
    return Math.abs(cards[0] - 24) < 1e-9
  }

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const n1 = cards[i]
      const n2 = cards[j]

      const newNums = []

      for (let k = 0; k < length; k++) {
        if (k !== i && k !== j) {
          newNums.push(cards[k])
        }
      }

      isValid = isValid || judgePoint24([...newNums, n1 + n2])
      isValid = isValid || judgePoint24([...newNums, n1 * n2])

      isValid = isValid || judgePoint24([...newNums, n1 - n2])
      isValid = isValid || judgePoint24([...newNums, n2 - n1])

      if (n2 !== 0) {
        isValid = isValid || judgePoint24([...newNums, n1 / n2])
      }

      if (n1 !== 0) {
        isValid = isValid || judgePoint24([...newNums, n2 / n1])
      }

      if (isValid) {
        return true
      }
    }
  }
  return false
}
// @lc code=end
