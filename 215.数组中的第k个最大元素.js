/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 堆排序
function findKthLargest(nums, k) {
  const { length } = nums

  const leftChild = i => 2 * i + 1

  const percDown = (i, n) => {
    let childIndex
    let tmp

    for (tmp = nums[i]; leftChild(i) < n; i = childIndex) {
      childIndex = leftChild(i)

      if (childIndex !== n - 1 && nums[childIndex + 1] > nums[childIndex]) {
        childIndex++
      }

      if (tmp < nums[childIndex]) {
        nums[i] = nums[childIndex]
      } else {
        break
      }
    }
    nums[i] = tmp
  }

  let i = Math.floor(length / 2)

  for (i; i >= 0; i--) {
    percDown(i, length)
  }

  for (i = length - 1; i > length - k; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]]
    percDown(0, i)
  }
  return nums[0]
}
// @lc code=end
