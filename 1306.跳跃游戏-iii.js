/*
 * @lc app=leetcode.cn id=1306 lang=javascript
 *
 * [1306] 跳跃游戏 III
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
function canReach(arr, start) {
  const { length } = arr

  const backtracking = (i) => {
    if (i < 0 || i > length - 1 || arr[i] === -1) {
      return false
    }

    const step = arr[i]
    arr[i] = -1

    return step === 0 || backtracking(i - step) || backtracking(i + step)
  }

  return backtracking(start)
}
// @lc code=end
