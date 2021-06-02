/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 没做出来

// 二分法
function minSubArrayLen(target, nums) {
  const binarySearch = (a, l, r, target) => {
    let mid = -1

    while (l < r) {
      mid = Math.floor((l + r) / 2)
      if (a[mid] < target) l = mid + 1
      else r = mid
    }

    return (a[l] >= target) ? l : -1
  }

  const { length } = nums

  if (length == 0) {
    return 0
  }

  let result = Number.MAX_VALUE
  const sums = [0]
  // 为了方便计算，令 size = n + 1
  // sums[0] = 0 意味着前 0 个元素的前缀和为 0
  // sums[1] = A[0] 前 1 个元素的前缀和为 A[0]
  // 以此类推
  for (let i = 1; i <= length; i++) {
    sums[i] = sums[i - 1] + nums[i - 1]
  }

  for (let i = 1; i <= length; i++) {
    const s = target + sums[i - 1]
    const bound = binarySearch(sums, i, length, s)

    if (bound != -1) {
      result = Math.min(result, bound - (i - 1))
    }
  }

  return result === Number.MAX_VALUE ? 0 : result
}

// 滑动窗口
function minSubArrayLen(target, nums) {
  const n = nums.length
  if (n == 0) {
    return 0
  }

  let result = Number.MAX_VALUE
  let start = 0
  let end = 0
  let sum = 0
  while (end < n) {
    sum += nums[end]
    while (sum >= target) {
      result = Math.min(result, end - start + 1)
      sum -= nums[start]
      start++
    }
    end++
  }
  return result == Number.MAX_VALUE ? 0 : result
}

// @lc code=end
