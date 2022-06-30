/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
function maxEnvelopes(envelopes) {
  const { length } = envelopes
  if (length === 1) return 1

  envelopes.sort((a, b) => {
    // 宽度从小到大排序
    if (a[0] - b[0] !== 0) {
      return a[0] - b[0]
    }
    // 高度从大到小排序
    return b[1] - a[1]
  })

  const dp = [envelopes[0][1]]

  for (let i = 1; i < length; i++) {
    const num = envelopes[i][1]

    if (num > dp[dp.length - 1]) {
      dp.push(num)
    } else {
      let l = 0
      let r = dp.length - 1

      while (l < r) {
        const mid = (l + r) >> 1

        if (dp[mid] < num) {
          l = mid + 1
        } else {
          r = mid
        }
      }
      dp[l] = num
    }
  }

  return dp.length
}
// @lc code=end
