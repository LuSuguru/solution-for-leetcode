/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
  const length1 = nums1.length
  const length2 = nums2.length

  const dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(0))

  let result = 0
  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1
        result = Math.max(dp[i + 1][j + 1], result)
      }
    }
  }

  return result
}

// 优化后的动态规划，状态数组只需要一维
function findLength(nums1, nums2) {
  const length1 = nums1.length
  const length2 = nums2.length

  const dp = new Array(length2 + 1).fill(0)

  let result = 0
  for (let i = 0; i < length1; i++) {
    // 因为子数组的排列是从左往右，因此归并状态机从左到右会注销存储的状态，因此需从右往左
    for (let j = length2; j > 0; j--) {
      if (nums1[i] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
      } else {
        dp[j] = 0
      }
      result = Math.max(dp[j], result)
    }
  }
  return result
}

// 滑动窗口
function findLength(nums1, nums2) {
  function maxLength(add1, add2, length) {
    let ret = 0
    let k = 0
    for (let i = 0; i < length; i++) {
      if (nums1[add1 + i] == nums2[add2 + i]) {
        k++
      } else {
        k = 0
      }
      ret = Math.max(ret, k)
    }
    return ret
  }

  const n = nums1.length
  const m = nums2.length

  let result = 0
  for (let i = 0; i < n; i++) {
    const len = Math.min(m, n - i)
    const maxlen = maxLength(i, 0, len)
    result = Math.max(result, maxlen)
  }

  for (let j = 0; j < m; j++) {
    const len = Math.min(n, m - j)
    const maxlen = maxLength(0, j, len)
    result = Math.max(result, maxlen)
  }
  return result
}
// @lc code=end
