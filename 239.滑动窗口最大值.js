/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const result = []
  // 构造单调队列
  const queue = []

  for (let j = 0; j < nums.length; j++) {
    if (j >= k && queue[0] === nums[j - k]) {
      queue.shift()
    }

    while (queue.length && queue[queue.length - 1] < nums[j]) {
      queue.pop()
    }
    queue.push(nums[j])

    if (j >= k - 1) {
      result.push(queue[0])
    }
  }

  return result
}

// @lc code=end
