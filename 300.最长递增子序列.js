/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  const { length } = nums
  if (length === 1) return 1

  const dp = new Array(length).fill(1)

  let result = 1

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(dp[i], result)
  }

  return result
}

function lengthOfLIS(nums) {
  let res = 1
  let { length } = nums

  // 表示长度为 ii 的最长上升子序列的末尾元素的最小值，用 len 记录目前最长上升子序列的长度
  let dp = new Array(length + 1)
  dp[res] = nums[0]

  for (let i = 1; i < length; i++) {
    if (nums[i] > dp[res]) {
      dp[++res] = nums[i]
    } else {
      // 二分搜索，替换 dp 里相应位置的值
      let l = 1
      let r = res
      let pos = 0

      while (l <= r) {
        let mid = (l + r) >> 1

        if (dp[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      dp[pos + 1] = nums[i]
    }
  }

  return res
}
// @lc code=end
