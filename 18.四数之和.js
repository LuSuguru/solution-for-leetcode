/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  // 排序
  nums.sort((a, b) => a - b)
  const { length } = nums

  const result = []
  // 遍历 a
  for (let a = 0; a < length - 3; a++) {
    // 枚举数不相同
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue
    }

    if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) {
      break
    }
    if (nums[a] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
      continue
    }

    // 遍历 b
    for (let b = a + 1; b < length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue
      }

      if (nums[a] + nums[b] + nums[b + 1] + nums[b + 2] > target) {
        break
      }
      if (nums[a] + nums[b] + nums[length - 2] + nums[length - 1] < target) {
        continue
      }

      let c = b + 1
      let d = length - 1

      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d]
        if (sum < target) {
          c++
        } else if (sum > target) {
          d--
        } else {
          result.push([nums[a], nums[b], nums[c], nums[d]])

          c++
          d--

          while (c < d && nums[c] === nums[c - 1]) c++
          while (c < d && nums[d] === nums[d + 1]) d--
        }
      }
    }
  }
  return result
}
// @lc code=end
