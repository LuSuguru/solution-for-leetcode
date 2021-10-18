/**
 * @param {number[]} nums
 * @return {number}
 */

function maxSubArray(nums) {
  if (nums.length === 0) return 0

  let last = nums[0]
  let result = last

  for (let i = 1; i < nums.length; i++) {
    last = Math.max(last + nums[i], nums[i])
    result = Math.max(last, result)
  }

  return result
}
