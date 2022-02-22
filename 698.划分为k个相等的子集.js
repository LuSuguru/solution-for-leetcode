/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0)

  // 和不为整数
  if (sum % k !== 0) {
    return false
  }

  // 每个子集的和
  sum /= k
  const { length } = nums

  nums = nums.sort((a, b) => a - b)

  // 如果最大的数大于子集和
  if (nums[length - 1] > sum) {
    return false
  }

  // 分成 K 个桶
  const arr = new Array(k).fill(sum)

  const dfs = (cur) => {
    if (cur < 0) {
      return true
    }

    for (let i = 0; i < k; i++) {
      // 减枝
      if (arr[i] === nums[cur] || arr[i] - nums[cur] >= nums[0]) {
        //  将当前数放入桶
        arr[i] -= nums[cur]

        if (dfs(cur - 1)) {
          return true
        }

        // 从桶中取出当前数
        arr[i] += nums[cur]
      }
    }

    return false
  }

  return dfs(length - 1)
}
// @lc code=end
