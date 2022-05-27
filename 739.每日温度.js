/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const { length } = temperatures

  const result = new Array(length).fill(0)
  const stack = []

  for (let i = 0; i < length; i++) {
    const temp = temperatures[i]

    while (stack.length && temperatures[stack[stack.length - 1]] < temp) {
      const index = stack.pop()
      result[index] = i - index
    }

    stack.push(i)
  }

  return result
}
// @lc code=end
