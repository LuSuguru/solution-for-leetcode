/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
  let isEven = true

  const condition = (num) => (isEven ? num % 2 === 0 : num % 2 !== 0)

  for (let i = 0; i < nums.length; i++) {
    if (condition(nums[i])) {
      isEven = !isEven
      continue
    }

    for (let j = i; j < nums.length; j++) {
      if (condition(nums[j])) {
        const mid = nums[j]
        nums[j] = nums[i]
        nums[i] = mid

        isEven = !isEven
        break
      }
    }
  }

  return nums
}

function sortArrayByParityII(nums) {
  let i = 1

  for (let j = 0; j < nums.length; j += 2) {
    if (nums[j] % 2 !== 0) {
      while (nums[i] % 2 !== 0) {
        i += 2
      }

      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }

  return nums
}
// @lc code=end
