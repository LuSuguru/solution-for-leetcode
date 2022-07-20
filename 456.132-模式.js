/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132 模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function find132pattern(nums) {
  // i < j < k nums[i] < nums[k] < nums[j]
  // 单调栈，存放 k，栈底 -> 栈顶，单调递减
  const stack = []
  // 到当前 i 前面的最小元素
  const list = [Number.MAX_SAFE_INTEGER]

  // 枚举 2
  for (let i = 0; i < nums.length; i++) {
    // 更新 单调栈
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop()
    }

    // 单调栈中还有比 nums[i] 更大的元素,即 [0,i-1] 有比 nums[i] 更大的元素，即 3 > 2
    //  stack 是这个元素在 nums[] 的下标，而 list存放的是 nums[i] 其左侧的最小值，于是 list[stack.length-1]代表是单调栈中，存在的元素的左侧的最小值，如果它小于 nums[i]，则满足了 1 < 2
    if (stack.length && list[stack[stack.length - 1]] < nums[i]) {
      return true
    }

    stack.push(i)
    // 更新 last
    if (i === 0) {
      list.push(nums[i])
    } else {
      list.push(Math.min(list[list.length - 1], nums[i]))
    }
  }

  return false
}
// @lc code=end
