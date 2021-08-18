/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums = nums.sort((a, b) => a - b)
  const { length } = nums

  let best = 100000

  for (let i = 0; i < length; i++) {
    // 保证和上一次枚举的元素不相等
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }

    let j = i + 1
    let k = length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      if (sum === target) {
        return sum
      }

      if (Math.abs(sum - target) < Math.abs(best - target)) {
        best = sum
      }

      if (sum > target) {
        let k0 = k - 1
        while (j < k0 && nums[k0] === nums[k]) {
          k0--
        }
        k = k0
      } else {
        let j0 = j + 1
        while (j0 < k && nums[j0] == nums[j]) {
          j0++
        }
        j = j0
      }
    }
  }

  return best
}
// @lc code=end
