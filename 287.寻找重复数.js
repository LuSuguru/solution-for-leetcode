/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  // 由于数组里的值是不会大于nums.length，可以当做一个链表来做，重复数构成的是一个环，要找的是环的起始点
  let fast = 0
  let slow = 0

  while (true) {
    fast = nums[nums[fast]]
    slow = nums[slow]

    if (fast === slow) {
      fast = 0
      while (nums[fast] !== nums[slow]) {
        fast = nums[fast]
        slow = nums[slow]
      }

      return nums[slow]
    }
  }
}
// @lc code=end
