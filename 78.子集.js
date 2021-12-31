/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const { length } = result

    for (let j = 0; j < length; j++) {
      result.push([...result[j], nums[i]])
    }

    result.push([nums[i]])
  }

  result.push([])

  return result
}
// @lc code=end
