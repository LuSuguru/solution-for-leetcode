/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 我的解法
function threeSum(nums) {
  if (nums.length < 3) {
    return []
  }

  // 结果去重
  const resultMap = {}
  const result = []

  // map 存储第三个数组
  const numMap = {}
  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j]

      const third = 0 - first - second
      const thirdIndex = numMap[third]
      if (thirdIndex > j) {
        const arr = [first, second, third].sort((a, b) => a - b)

        const key = arr.join('-')

        if (!resultMap[key]) {
          result.push([first, second, third])
          resultMap[key] = true
        }
      }
    }
  }

  return result
}

// 官方解法
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b)
  const { length } = nums

  const result = []

  // 枚举a
  for (let first = 0; first < length; first++) {
    // 需要和上一次枚举的数不相同
    if (first > 0 && nums[first] == nums[first - 1]) {
      continue
    }

    // c的指针在数组最右端
    let third = length - 1
    const target = -nums[first]

    // b 指针在数组左侧，由于排过序，b变大了，c一定变小，所以可以通过双指针一次遍历两个数
    for (let second = first + 1; second < length; second++) {
      // 需要和上一次枚举的数不相同
      if (second > first + 1 && nums[second] == nums[second - 1]) {
        continue
      }

      // 需要保证 b 的指针在 c 的指针的左侧
      while (second < third && nums[second] + nums[third] > target) {
        --third
      }

      // 如果指针重合，随着 b 后续的增加
      // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
      if (second == third) {
        break
      }

      if (nums[second] + nums[third] == target) {
        result.push([nums[first], nums[second], nums[third]])
      }
    }
  }
  return result
}
// @lc code=end
