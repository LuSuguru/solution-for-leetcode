/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  // 单调递增栈
  const stack = []

  let result = 0
  for (let i = 0; i <= heights.length; i++) {
    // 右边加个 0，方便计算
    const rightHeight = i === heights.length ? 0 : heights[i]
    // 对栈中柱体来说，栈中的下一个柱体就是其「左边第一个小于自身的柱体」；
    // 若当前柱体 i 的高度小于栈顶柱体的高度，说明 i 是栈顶柱体的「右边第一个小于栈顶柱体的柱体」。
    // 因此以栈顶柱体为高的矩形的左右宽度边界就确定了，可以计算面积
    while (stack.length !== 0 && heights[stack[stack.length - 1]] > rightHeight) {
      const h = heights[stack.pop()]
      const right = i
      const left = stack.length === 0 ? -1 : stack[stack.length - 1]

      result = Math.max((right - left - 1) * h, result)
    }
    stack.push(i)
  }
  return result
}
// @lc code=end
