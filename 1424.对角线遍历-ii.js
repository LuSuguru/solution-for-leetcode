/*
 * @lc app=leetcode.cn id=1424 lang=javascript
 *
 * [1424] 对角线遍历 II
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
function findDiagonalOrder(nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      const index = i + j
      if (map.get(index)) {
        map.get(index).push(nums[i][j])
      } else {
        map.set(index, [nums[i][j]])
      }
    }
  }

  console.log(map)
  const result = []

  for (const item of map.values()) {
    for (let i = item.length - 1; i >= 0; i--) {
      result.push(item[i])
    }
  }

  return result
}
// @lc code=end
