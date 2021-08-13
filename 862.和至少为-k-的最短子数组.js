/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function shortestSubarray(nums, k) {
  const sumArr = [0]
  let i = 0

  // 算出前缀和
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= k) return 1
    sumArr[i + 1] = sumArr[i] + nums[i]
  }

  let result = sumArr.length
  const queue = []

  // 单调队列和滑动窗口
  for (i = 0; i < sumArr.length; i++) {
    while (queue.length && sumArr[i] <= sumArr[queue[queue.length - 1]]) {
      queue.pop()
    }

    while (queue.length && sumArr[i] - sumArr[queue[0]] >= k) {
      result = Math.min(result, i - queue.shift())
    }
    queue.push(i)
  }

  return result === sumArr.length ? -1 : result
}
// @lc code=end
