/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function medianSlidingWindow(nums, k) {
  const arr = []
  const res = []

  // 二分搜索插入元素
  const add = function (num) {
    let left = 0
    let right = arr.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] < num) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    arr.splice(left, 0, num)
  }

  // 二分法删除元素
  const remove = function (num) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] < num) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    arr.splice(left, 1)
  }

  for (let i = 0; i < k - 1; ++i) {
    add(nums[i])
  }

  for (let i = k - 1, len = nums.length; i < len; ++i) {
    add(nums[i])

    if (k % 2) {
      res.push(arr[(k - 1) / 2])
    } else {
      res.push((arr[k / 2] + arr[k / 2 - 1]) / 2)
    }
    remove(nums[i - k + 1])
  }
  return res
}
// @lc code=end
