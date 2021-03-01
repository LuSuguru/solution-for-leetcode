/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = nums.reduce((prev, current, currentIndex) => {
    // +1 防止 0 的判断出现误差
    prev[current] = currentIndex + 1
    return prev
  }, {})

  let returnArr = []

  for (let i = 0; i < nums.length; i++) {
    const first = nums[i]

    // // 大于 target,直接跳过
    // if (Math.abs(first) > Math.abs(target)) {
    //   continue
    // }

    const secondIndex = numMap[target - first]

    if (secondIndex && i !== secondIndex - 1) {
      returnArr = [i, secondIndex - 1]
      break
    } else {
      continue
    }
  }
  return returnArr
};
// @lc code=end

